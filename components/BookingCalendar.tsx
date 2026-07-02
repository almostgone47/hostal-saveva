'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';

// Comprehensive list of Colombian Holidays (Festivos) for 2026 and 2027.
// Includes the Ley Emiliani (which shifts certain holidays to the following Monday).
const COLOMBIAN_HOLIDAYS: Record<string, string> = {
  // 2026
  '2026-01-01': 'Año Nuevo',
  '2026-01-12': 'Día de los Reyes Magos',
  '2026-03-23': 'Día de San José',
  '2026-04-02': 'Jueves Santo',
  '2026-04-03': 'Viernes Santo',
  '2026-05-01': 'Día del Trabajo',
  '2026-05-18': 'Día de la Ascensión',
  '2026-06-08': 'Corpus Christi',
  '2026-06-15': 'Sagrado Corazón',
  '2026-06-29': 'San Pedro y San Pablo',
  '2026-07-20': 'Día de la Independencia',
  '2026-08-07': 'Batalla de Boyacá',
  '2026-08-17': 'La Asunción de la Virgen',
  '2026-10-12': 'Día de la Raza',
  '2026-11-02': 'Día de todos los Santos',
  '2026-11-16': 'Independencia de Cartagena',
  '2026-12-08': 'Inmaculada Concepción',
  '2026-12-25': 'Navidad',

  // 2027
  '2027-01-01': 'Año Nuevo',
  '2027-01-11': 'Día de los Reyes Magos',
  '2027-03-15': 'Día de San José',
  '2027-03-25': 'Jueves Santo',
  '2027-03-26': 'Viernes Santo',
  '2027-05-01': 'Día del Trabajo',
  '2027-05-10': 'Día de la Ascensión',
  '2027-05-31': 'Corpus Christi',
  '2027-06-07': 'Sagrado Corazón',
  '2027-06-14': 'San Pedro y San Pablo',
  '2027-07-20': 'Día de la Independencia',
  '2027-08-07': 'Batalla de Boyacá',
  '2027-08-16': 'La Asunción de la Virgen',
  '2027-10-11': 'Día de la Raza',
  '2027-11-01': 'Día de todos los Santos',
  '2027-11-15': 'Independencia de Cartagena',
  '2027-12-08': 'Inmaculada Concepción',
  '2027-12-25': 'Navidad',
};

interface BookingCalendarProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onSelectDates: (checkIn: Date | null, checkOut: Date | null) => void;
}

export default function BookingCalendar({ checkIn, checkOut, onSelectDates }: BookingCalendarProps) {
  const { language, t } = useApp();
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNamesEs = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const monthNamesEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthName = language === 'es' ? monthNamesEs[month] : monthNamesEn[month];

  const weekdaysEs = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const weekdaysEn = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekdays = language === 'es' ? weekdaysEs : weekdaysEn;

  // Generate days for the current month view
  const firstDayIndex = new Date(year, month, 1).getDay(); // Sunday is 0, Monday is 1, etc.
  // Shift index so Monday is first (index 0)
  const adjustedFirstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const totalDays = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const formatDateKey = (day: number) => {
    const mm = String(month + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    return `${year}-${mm}-${dd}`;
  };

  const isHoliday = (day: number) => {
    const key = formatDateKey(day);
    return key in COLOMBIAN_HOLIDAYS;
  };

  const getHolidayName = (day: number) => {
    const key = formatDateKey(day);
    return COLOMBIAN_HOLIDAYS[key] || '';
  };

  // Detects if a day belongs to a long weekend "puente" (Friday, Saturday, or Sunday preceding a Monday holiday)
  const isPuenteWeekend = (day: number) => {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday

    // If Sunday (0), check if Monday is a holiday
    if (dayOfWeek === 0) {
      const nextDay = new Date(year, month, day + 1);
      const nextKey = `${nextDay.getFullYear()}-${String(nextDay.getMonth() + 1).padStart(2, '0')}-${String(nextDay.getDate()).padStart(2, '0')}`;
      return nextKey in COLOMBIAN_HOLIDAYS;
    }

    // If Saturday (6), check if Monday is a holiday
    if (dayOfWeek === 6) {
      const mondayDay = new Date(year, month, day + 2);
      const mondayKey = `${mondayDay.getFullYear()}-${String(mondayDay.getMonth() + 1).padStart(2, '0')}-${String(mondayDay.getDate()).padStart(2, '0')}`;
      return mondayKey in COLOMBIAN_HOLIDAYS;
    }

    // If Friday (5), check if Monday is a holiday
    if (dayOfWeek === 5) {
      const mondayDay = new Date(year, month, day + 3);
      const mondayKey = `${mondayDay.getFullYear()}-${String(mondayDay.getMonth() + 1).padStart(2, '0')}-${String(mondayDay.getDate()).padStart(2, '0')}`;
      return mondayKey in COLOMBIAN_HOLIDAYS;
    }

    return false;
  };

  const handleDayClick = (day: number) => {
    const selected = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selected < today) return; // Cannot book past dates

    if (!checkIn || (checkIn && checkOut)) {
      // First click: select check-in
      onSelectDates(selected, null);
    } else if (checkIn && !checkOut) {
      if (selected < checkIn) {
        // If clicked earlier, reset check-in
        onSelectDates(selected, null);
      } else {
        // Second click: select check-out
        onSelectDates(checkIn, selected);
      }
    }
  };

  const isSelected = (day: number) => {
    const current = new Date(year, month, day);
    if (checkIn && current.getTime() === checkIn.getTime()) return 'checkin';
    if (checkOut && current.getTime() === checkOut.getTime()) return 'checkout';
    if (checkIn && checkOut && current > checkIn && current < checkOut) return 'range';
    return null;
  };

  const isPast = (day: number) => {
    const current = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return current < today;
  };

  return (
    <div className="bg-white dark:bg-saveva-carddark p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl max-w-md mx-auto relative z-20">
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-black text-lg text-saveva-blue dark:text-white capitalize">
          {monthName} {year}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={handlePrevMonth}
            className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-300 focus:outline-none"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-300 focus:outline-none"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {weekdays.map((d, idx) => (
          <span key={idx} className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            {d}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Empty cells for starting offset */}
        {Array.from({ length: adjustedFirstDayIndex }).map((_, idx) => (
          <div key={`empty-${idx}`} className="aspect-square"></div>
        ))}

        {/* Month Days */}
        {Array.from({ length: totalDays }).map((_, idx) => {
          const day = idx + 1;
          const status = isSelected(day);
          const past = isPast(day);
          const holiday = isHoliday(day);
          const puente = isPuenteWeekend(day);
          const holidayName = getHolidayName(day);

          let dayClasses = "aspect-square flex flex-col items-center justify-center rounded-xl text-sm font-medium transition-all relative cursor-pointer select-none ";
          
          if (past) {
            dayClasses += "text-slate-300 dark:text-slate-700 cursor-not-allowed ";
          } else if (status === 'checkin' || status === 'checkout') {
            dayClasses += "bg-saveva-orange text-white font-bold scale-105 z-10 shadow-lg shadow-saveva-orange/30 ";
          } else if (status === 'range') {
            dayClasses += "bg-saveva-orange/15 dark:bg-saveva-orange/20 text-saveva-orange font-semibold ";
          } else if (holiday) {
            dayClasses += "bg-yellow-100 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-900/50 ";
          } else if (puente) {
            dayClasses += "bg-saveva-green/5 dark:bg-saveva-green/10 text-saveva-green hover:bg-slate-100 dark:hover:bg-slate-800 ";
          } else {
            dayClasses += "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 ";
          }

          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              disabled={past}
              className={`${dayClasses}`}
              title={holiday ? `${holidayName} (Festivo CO)` : puente ? 'Puente Festivo - Temporada Alta' : undefined}
            >
              <span>{day}</span>
              
              {/* Small indicators */}
              <div className="absolute bottom-1 flex space-x-0.5">
                {holiday && !status && (
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" title={holidayName}></span>
                )}
                {puente && !status && !holiday && (
                  <span className="w-1.5 h-1.5 bg-saveva-green rounded-full" title="Fin de Semana Puente"></span>
                )}
              </div>

              {/* Sparkle or visual badge for puente/holiday */}
              {(holiday || puente) && !status && (
                <span className="absolute top-0.5 right-0.5 text-[8px] text-saveva-orange">
                  ★
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Legend & Info block */}
      <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3.5 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 text-slate-500 dark:text-slate-400">
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 bg-saveva-orange rounded-md block"></span>
            <span>{language === 'es' ? 'Selección' : 'Selected'}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 bg-yellow-100 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-900/50 rounded-md block"></span>
            <span>{t('holidayCO', 'common')}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 bg-saveva-green/5 dark:bg-saveva-green/10 border border-saveva-green/20 rounded-md block"></span>
            <span>{language === 'es' ? 'Finde Puente' : 'Bridge Weekend'}</span>
          </div>
        </div>

        {/* Selected date feedback */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
          <div className="flex items-center space-x-2 text-saveva-blue dark:text-saveva-celeste font-semibold mb-1">
            <CalendarIcon className="w-4 h-4 shrink-0" />
            <span>{language === 'es' ? 'Tus Fechas:' : 'Your Dates:'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-mono mt-1">
            <div className="bg-white dark:bg-saveva-carddark p-1.5 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="text-slate-400 text-[9px] uppercase">{language === 'es' ? 'Entrada' : 'Check-in'}</div>
              <div className="font-bold text-slate-700 dark:text-slate-300 truncate">
                {checkIn ? checkIn.toLocaleDateString(language === 'es' ? 'es-CO' : 'en-US', { day: 'numeric', month: 'short', year: '2-digit' }) : '—'}
              </div>
            </div>
            <div className="bg-white dark:bg-saveva-carddark p-1.5 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="text-slate-400 text-[9px] uppercase">{language === 'es' ? 'Salida' : 'Check-out'}</div>
              <div className="font-bold text-slate-700 dark:text-slate-300 truncate">
                {checkOut ? checkOut.toLocaleDateString(language === 'es' ? 'es-CO' : 'en-US', { day: 'numeric', month: 'short', year: '2-digit' }) : '—'}
              </div>
            </div>
          </div>
        </div>

        {/* Context Alert if dates coincide with Colombian Holidays */}
        {checkIn && Array.from({ length: checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24)) + 1 : 1 }).some((_, i) => {
          const d = new Date(checkIn);
          d.setDate(d.getDate() + i);
          const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
          return k in COLOMBIAN_HOLIDAYS;
        }) && (
          <div className="flex items-start space-x-2 bg-yellow-50 dark:bg-yellow-950/20 text-yellow-800 dark:text-yellow-300 p-2.5 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
            <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-saveva-orange animate-bounce" />
            <p className="leading-tight text-[11px]">
              {t('holidayWarning', 'reservas')}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

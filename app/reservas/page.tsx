'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import BookingCalendar from '@/components/BookingCalendar';
import { Shield, Sparkles, Send, CalendarRange, Clock } from 'lucide-react';

export default function ReservasPage() {
  const { t, language } = useApp();
  
  // State for form
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState('1');
  const [roomType, setRoomType] = useState('shared');
  const [comments, setComments] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSelectDates = (start: Date | null, end: Date | null) => {
    setCheckIn(start);
    setCheckOut(end);
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMsg(language === 'es' ? 'Por favor, ingresa tu nombre completo.' : 'Please enter your full name.');
      return;
    }

    if (!checkIn || !checkOut) {
      setErrorMsg(language === 'es' ? 'Por favor, selecciona tus fechas de check-in y check-out en el calendario.' : 'Please select your check-in and check-out dates in the calendar.');
      return;
    }

    // Format dates for message
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const checkinStr = checkIn.toLocaleDateString(language === 'es' ? 'es-CO' : 'en-US', options);
    const checkoutStr = checkOut.toLocaleDateString(language === 'es' ? 'es-CO' : 'en-US', options);

    // Map room type value to text
    const roomTypeMapEs: Record<string, string> = {
      shared: 'Cama en Habitación Compartida',
      private_shared: 'Habitación Privada (Baño Compartido)',
      private_private: 'Habitación Privada (Baño Privado)',
      apartment: 'Apartaestudio Independiente',
      group: 'Reserva Grupal (Hasta 25 personas)',
    };

    const roomTypeMapEn: Record<string, string> = {
      shared: 'Bed in Shared Dorm',
      private_shared: 'Private Room (Shared Bath)',
      private_private: 'Private Room (Private Bath)',
      apartment: 'Independent Studio Apartment',
      group: 'Group Booking (Up to 25 people)',
    };

    const selectedRoomText = language === 'es' ? roomTypeMapEs[roomType] : roomTypeMapEn[roomType];

    // Pre-arm message template
    const template = t('waTemplate', 'reservas');
    const finalMessage = template
      .replace('{name}', name)
      .replace('{checkin}', checkinStr)
      .replace('{checkout}', checkoutStr)
      .replace('{guests}', guests)
      .replace('{type}', selectedRoomText)
      .replace('{comments}', comments.trim() ? comments.trim() : 'Ninguno / None');

    // Create WhatsApp URL
    const phoneNumber = '573332627268';
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

    // Redirect to WhatsApp
    window.open(waUrl, '_blank');
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'reservas')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'reservas')}
          </p>
        </div>

        {/* Form and Calendar Split view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Column: Interactive Calendar (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-100/50 dark:bg-slate-900/50 p-4 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 mb-4">
              <div className="flex items-center space-x-2 text-saveva-green font-bold text-sm mb-1">
                <CalendarRange className="w-5 h-5" />
                <span>{language === 'es' ? 'Paso 1: Selecciona fechas' : 'Step 1: Select dates'}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'es'
                  ? 'Haz clic en el día de llegada (Check-in) y luego en el día de salida (Check-out). Puedes cambiar tu selección en cualquier momento.'
                  : 'Click on the day of arrival (Check-in) and then on the day of departure (Check-out). You can change your dates anytime.'}
              </p>
            </div>

            <BookingCalendar
              checkIn={checkIn}
              checkOut={checkOut}
              onSelectDates={handleSelectDates}
            />
          </div>

          {/* Right Column: Form details (Span 7) */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white dark:bg-saveva-carddark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl space-y-6 relative z-20">
            <h2 className="font-display font-bold text-xl text-saveva-blue dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-saveva-orange" />
              <span>{t('formTitle', 'reservas')}</span>
            </h2>

            {/* Error Message bar */}
            {errorMsg && (
              <div className="bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 p-4 rounded-2xl border border-red-100 dark:border-red-900/30 text-sm font-semibold">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Name field */}
            <div className="space-y-2">
              <label htmlFor="booking-name" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                {t('labelName', 'reservas')} *
              </label>
              <input
                id="booking-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === 'es' ? 'Ej. Juan Pérez' : 'E.g. John Doe'}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-saveva-orange focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Guests Count select */}
              <div className="space-y-2">
                <label htmlFor="booking-guests" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('labelGuests', 'reservas')}
                </label>
                <select
                  id="booking-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-saveva-orange focus:border-transparent transition-all"
                >
                  <option value="1">{t('guests1', 'reservas')}</option>
                  <option value="2">{t('guests2', 'reservas')}</option>
                  <option value="3-4">{t('guests34', 'reservas')}</option>
                  <option value="5+">{t('guestsGroup', 'reservas')}</option>
                </select>
              </div>

              {/* Accommodation Type Select */}
              <div className="space-y-2">
                <label htmlFor="booking-room-type" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('labelType', 'reservas')}
                </label>
                <select
                  id="booking-room-type"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-saveva-orange focus:border-transparent transition-all"
                >
                  <option value="shared">{t('typeShared', 'reservas')}</option>
                  <option value="private_shared">{t('typePrivateSharedBath', 'reservas')}</option>
                  <option value="private_private">{t('typePrivatePrivateBath', 'reservas')}</option>
                  <option value="apartment">{t('typeApartment', 'reservas')}</option>
                  <option value="group">{t('typeGroup', 'reservas')}</option>
                </select>
              </div>
            </div>

            {/* Comments Field */}
            <div className="space-y-2">
              <label htmlFor="booking-comments" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                {t('labelComments', 'reservas')}
              </label>
              <textarea
                id="booking-comments"
                rows={4}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder={t('placeholderComments', 'reservas')}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-saveva-orange focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            {/* Friendly Warning Guarantee */}
            <div className="flex items-start space-x-3 bg-saveva-green/10 p-4 rounded-2xl border border-saveva-green/20">
              <Shield className="w-5 h-5 text-saveva-green shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 dark:text-slate-400">
                <span className="font-bold text-saveva-green block mb-0.5">
                  {language === 'es' ? 'Garantía SAVEVA:' : 'SAVEVA Guarantee:'}
                </span>
                {language === 'es'
                  ? 'No solicitamos pagos adelantados por la web. El cierre de la reserva se acuerda por WhatsApp directamente con nuestro equipo. ¡Confiable, rápido y seguro!'
                  : 'We do not ask for upfront payments on the web. Your booking details are finalized via WhatsApp directly with our team. Safe, fast, and transparent!'}
              </div>
            </div>

            {/* Submit block */}
            <div>
              <button
                type="submit"
                className="w-full bg-saveva-orange hover:bg-saveva-orange/95 text-white font-display font-bold text-sm py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all active:translate-y-0 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-saveva-orange"
              >
                <Send className="w-4 h-4" />
                <span>{t('btnSubmit', 'reservas')}</span>
              </button>
            </div>

            {/* Trust factors */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center space-x-1.5 justify-center">
                <Clock className="w-4 h-4 text-saveva-green shrink-0" />
                <span>{language === 'es' ? 'Respuesta en menos de 15 min' : 'Replies in under 15 min'}</span>
              </div>
              <div className="flex items-center space-x-1.5 justify-center">
                <Shield className="w-4 h-4 text-saveva-celeste shrink-0" />
                <span>{language === 'es' ? 'Atención 100% Personalizada' : '100% Human Care'}</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </MainLayout>
  );
}

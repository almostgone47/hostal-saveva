'use client';

import React, { useState } from 'react';
import { CalendarDays, Users, Search } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { bookingSearchUrl } from '@/lib/contact';

function toISODate(d: Date) {
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tz).toISOString().slice(0, 10);
}

function addDays(iso: string, days: number) {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + days);
  return toISODate(d);
}

interface BookingSearchBarProps {
  defaultGuests?: number;
  maxGuests?: number;
  className?: string;
}

/**
 * Dates + guests form that opens Roomleo straight on its results page,
 * so guests don't have to pick their dates a second time.
 */
export default function BookingSearchBar({ defaultGuests = 2, maxGuests = 8, className = '' }: BookingSearchBarProps) {
  const { language } = useApp();
  const es = language === 'es';
  const today = toISODate(new Date());

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(defaultGuests);

  const onCheckInChange = (value: string) => {
    setCheckIn(value);
    if (value && (!checkOut || checkOut <= value)) setCheckOut(addDays(value, 1));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validDates = checkIn && checkOut && checkOut > checkIn;
    const url = bookingSearchUrl({
      checkIn: validDates ? checkIn : undefined,
      checkOut: validDates ? checkOut : undefined,
      guests,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const labelCls = 'block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1';
  const fieldCls =
    'w-full bg-transparent text-sm font-semibold text-saveva-blue dark:text-white focus:outline-none [color-scheme:light] dark:[color-scheme:dark]';
  const boxCls = 'flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2';

  return (
    <form
      onSubmit={onSubmit}
      className={`bg-white/90 dark:bg-saveva-carddark/90 backdrop-blur rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg p-3 sm:p-4 grid grid-cols-2 md:grid-cols-[1fr_1fr_0.8fr_auto] gap-3 items-end ${className}`}
    >
      <div>
        <label htmlFor="search-checkin" className={labelCls}>{es ? 'Llegada' : 'Check-in'}</label>
        <div className={boxCls}>
          <CalendarDays className="w-4 h-4 text-saveva-orange shrink-0" />
          <input id="search-checkin" type="date" min={today} value={checkIn} onChange={(e) => onCheckInChange(e.target.value)} className={fieldCls} />
        </div>
      </div>
      <div>
        <label htmlFor="search-checkout" className={labelCls}>{es ? 'Salida' : 'Check-out'}</label>
        <div className={boxCls}>
          <CalendarDays className="w-4 h-4 text-saveva-orange shrink-0" />
          <input
            id="search-checkout"
            type="date"
            min={checkIn ? addDays(checkIn, 1) : today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={fieldCls}
          />
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <label htmlFor="search-guests" className={labelCls}>{es ? 'Huéspedes' : 'Guests'}</label>
        <div className={boxCls}>
          <Users className="w-4 h-4 text-saveva-orange shrink-0" />
          <select id="search-guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className={fieldCls}>
            {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {es ? (n === 1 ? 'huésped' : 'huéspedes') : n === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 bg-saveva-orange hover:bg-saveva-orange/90 text-white font-display font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-colors"
      >
        <Search className="w-4 h-4" />
        {es ? 'Ver disponibilidad' : 'Check availability'}
      </button>
    </form>
  );
}

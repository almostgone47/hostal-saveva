'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import BookingSearchBar from '@/components/BookingSearchBar';
import { MapPin, Trophy, Music, Users, Utensils, Bath, BedDouble, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { whatsappLink } from '@/lib/contact';

const gallery = [
  { src: '/rooms/apartaestudios/estudio-camas-cocina.jpg', es: 'Camarotes, cocina y comedor', en: 'Bunks, kitchen and dining area' },
  { src: '/rooms/apartaestudios/camarotes.jpg', es: 'Camarotes con cortina de privacidad', en: 'Bunks with privacy curtains' },
  { src: '/rooms/apartaestudios/cocina.jpg', es: 'Cocina equipada', en: 'Equipped kitchen' },
  { src: '/rooms/apartaestudios/bano.jpg', es: 'Baño privado', en: 'Private bathroom' },
];

export default function ApartaestudiosPage() {
  const { language } = useApp();
  const es = language === 'es';

  const groupQuoteText = es
    ? '¡Hola SAVEVA! 🐦 Somos un grupo y queremos cotizar los apartaestudios. Fechas: ___ · Personas: ___'
    : "Hi SAVEVA! 🐦 We're a group and would like a quote for the studio apartments. Dates: ___ · People: ___";

  const audiences = [
    {
      icon: <Trophy className="w-6 h-6 text-saveva-orange" />,
      title: es ? 'Hinchas y equipos' : 'Fans & teams',
      text: es
        ? 'Partidos en el Atanasio Girardot y torneos en la Unidad Deportiva, sin taxis ni trancones.'
        : 'Matches at the Atanasio Girardot and tournaments at the sports complex, no taxis or traffic.',
    },
    {
      icon: <Music className="w-6 h-6 text-saveva-celeste" />,
      title: es ? 'Conciertos y eventos' : 'Concerts & events',
      text: es
        ? 'Vuelve caminando después del show y descansa en tu propio espacio.'
        : 'Walk back after the show and rest in your own space.',
    },
    {
      icon: <Users className="w-6 h-6 text-saveva-green" />,
      title: es ? 'Familias' : 'Families',
      text: es
        ? 'Cocina para preparar sus comidas y baño propio, con la calidez del hostal.'
        : 'A kitchen to cook your own meals and your own bathroom, with the warmth of the hostel.',
    },
  ];

  const features = [
    { icon: <BedDouble className="w-5 h-5" />, es: '4 camas en camarotes con cortina de privacidad', en: '4 beds in bunks with privacy curtains' },
    { icon: <Utensils className="w-5 h-5" />, es: 'Cocina equipada y mesa de comedor', en: 'Equipped kitchen and dining table' },
    { icon: <Bath className="w-5 h-5" />, es: 'Baño privado dentro del apartaestudio', en: 'Private bathroom inside the studio' },
    { icon: <MapPin className="w-5 h-5" />, es: 'Laureles Estadio, a pocos minutos caminando del estadio', en: 'Laureles Estadio, a few minutes’ walk from the stadium' },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Hero */}
        <section className="relative rounded-3xl overflow-hidden mb-6 min-h-[420px] sm:min-h-[460px] flex items-end">
          <Image src={gallery[0].src} alt={es ? 'Apartaestudio SAVEVA cerca al Estadio' : 'SAVEVA studio near the Stadium'} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-saveva-blue via-saveva-blue/70 to-saveva-blue/10" />
          <div className="relative p-6 sm:p-10 text-white max-w-3xl">
            <p className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold bg-saveva-orange px-3 py-1 rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {es ? 'Junto al Estadio Atanasio Girardot' : 'Next to the Atanasio Girardot Stadium'}
            </p>
            <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight mb-3">
              {es ? 'Apartaestudios para familias y grupos' : 'Studio apartments for families & groups'}
            </h1>
            <p className="text-slate-200 text-base sm:text-lg">
              {es
                ? 'Dos apartaestudios privados con 4 camas, cocina y baño propio cada uno. Reserva uno para tu familia, o los dos para grupos de hasta 8.'
                : 'Two private studios, each with 4 beds, its own kitchen and bathroom. Book one for your family, or both for groups of up to 8.'}
            </p>
          </div>
        </section>

        {/* Search → Roomleo */}
        <div className="max-w-4xl mx-auto -mt-2 mb-16 relative z-20">
          <BookingSearchBar defaultGuests={4} />
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3">
            {es ? '¿Son más de 4, o no aparece disponible para tus fechas? ' : 'More than 4 of you, or not showing for your dates? '}
            <a href={whatsappLink(groupQuoteText)} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1da851] underline underline-offset-2">
              {es ? 'Escríbenos por WhatsApp' : 'Message us on WhatsApp'}
            </a>
            .
          </p>
        </div>

        {/* Who it's for */}
        <section className="mb-20 relative z-20">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white text-center mb-10">
            {es ? 'Ideal si vienes por el estadio' : 'Perfect if you are here for the stadium'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="bg-white dark:bg-saveva-carddark rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-800">
                  {a.icon}
                </div>
                <h3 className="font-display font-black text-lg text-saveva-blue dark:text-white mb-1">{a.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery + features */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20 relative z-20">
          <div className="lg:col-span-7 grid grid-cols-3 gap-3">
            {gallery.map((g, i) => (
              <figure key={g.src} className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'col-span-3 h-72 sm:h-80' : 'h-32 sm:h-44'}`}>
                <Image src={g.src} alt={es ? g.es : g.en} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
                <figcaption className="absolute bottom-2 left-2 text-[11px] font-semibold bg-black/60 text-white px-2 py-0.5 rounded-md">
                  {es ? g.es : g.en}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white">
              {es ? 'Tu propio espacio, con todo lo del hostal' : 'Your own space, with everything the hostel offers'}
            </h2>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f.es} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-9 h-9 rounded-xl bg-saveva-orange/10 text-saveva-orange flex items-center justify-center shrink-0">{f.icon}</span>
                  <span className="pt-2">{es ? f.es : f.en}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 p-4 text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <p className="flex items-start gap-2"><Check className="w-4 h-4 text-saveva-green shrink-0 mt-0.5" />{es ? 'WiFi, sala común y jardín del hostal incluidos.' : 'WiFi, the hostel common room and garden included.'}</p>
              <p className="flex items-start gap-2"><Check className="w-4 h-4 text-saveva-green shrink-0 mt-0.5" />{es ? 'Check-in desde las 15:00.' : 'Check-in from 15:00.'}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink(groupQuoteText)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-[#25D366] hover:text-[#1da851] rounded-xl py-3 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                {es ? 'Cotizar para grupo' : 'Group quote'}
              </a>
              <a
                href="#top"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex-1 text-center text-sm font-bold text-white bg-saveva-orange hover:bg-saveva-orange/90 rounded-xl py-3 transition-colors"
              >
                {es ? 'Ver disponibilidad' : 'Check availability'}
              </a>
            </div>
          </div>
        </section>

        {/* Just need a bed? */}
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-20">
          <div>
            <h3 className="font-display font-black text-lg text-saveva-blue dark:text-white">
              {es ? '¿Viajas solo y necesitas una cama?' : 'Travelling solo and just need a bed?'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {es ? 'También vendemos estas habitaciones por cama, en habitación compartida.' : 'We also sell these rooms bed by bed, as a shared room.'}
            </p>
          </div>
          <Link href="/habitaciones#compartida-4" className="inline-flex items-center gap-2 text-sm font-bold text-saveva-blue dark:text-white hover:text-saveva-orange">
            {es ? 'Ver camas en habitación compartida' : 'See shared-room beds'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </MainLayout>
  );
}

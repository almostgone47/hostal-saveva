'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import { Compass, MapPin, Calendar, Heart, ArrowUpRight, CheckCircle, Sparkles, Bike, MessageCircle } from 'lucide-react';

export default function ExperienciasPage() {
  const { t, language } = useApp();

  const scheduleEvents = [
    {
      day: language === 'es' ? 'Martes' : 'Tuesday',
      title: language === 'es' ? 'Intercambio de Idiomas & Empanadas' : 'Language Exchange & Empanadas',
      time: '19:00 - 21:00',
      desc: language === 'es' 
        ? 'Ven a practicar tu español o inglés con locales y viajeros del hostal. ¡Las empanadas corren por cuenta de SAVEVA! 🥟' 
        : 'Come practice your Spanish or English with locals and hostel guests. FREE empanadas on SAVEVA! 🥟',
      icon: '💬',
    },
    {
      day: language === 'es' ? 'Jueves' : 'Thursday',
      title: language === 'es' ? 'Clase de Salsa & Salida Grupal' : 'Salsa Class & Group Outing',
      time: '18:30 - Late',
      desc: language === 'es'
        ? 'Aprende los pasos básicos de la salsa con nuestro profesor local en el jardín común y luego salimos en grupo a azotar baldosa en la 70.'
        : 'Learn core salsa steps with our local teacher in the shared garden, then join the group outing to dance on the famous 70 street.',
      icon: '💃',
    },
    {
      day: language === 'es' ? 'Sábado' : 'Saturday',
      title: language === 'es' ? 'El Gran Asado SAVEVA (Bbq)' : 'The Great SAVEVA BBQ',
      time: '14:00 - 18:00',
      desc: language === 'es'
        ? 'Asado comunitario en el patio de entrada. Música, buena vibra, opción vegetariana y la oportunidad perfecta para planear el resto del finde.'
        : 'Community BBQ in the entrance yard. Music, cool vibes, veggie options available, and the perfect chance to plan the weekend adventures.',
      icon: '🔥',
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'experiencias')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'experiencias')}
          </p>
        </div>

        {/* 3 Core Experience Pillars */}
        <div className="space-y-20 mb-20 relative z-20">
          
          {/* Pillar 1: Adventure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/gallery/comuna13.jpg"
                alt="Parque Arvi Medellín Excursión"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-saveva-orange text-white px-4 py-1 rounded-full text-xs font-mono uppercase font-black">
                {language === 'es' ? 'Explora' : 'Explore'}
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-saveva-orange/10 dark:bg-saveva-orange/20 rounded-2xl flex items-center justify-center text-saveva-orange">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white tracking-tight">
                {t('pilar1Title', 'experiencias')}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {t('pilar1Desc', 'experiencias')}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-bold text-slate-500">
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">#Guatape</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">#ParqueArvi</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">#GraffitiTour</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Laureles Neighborhood */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 lg:order-first order-last">
              <div className="w-12 h-12 bg-saveva-green/10 dark:bg-saveva-green/20 rounded-2xl flex items-center justify-center text-saveva-green">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white tracking-tight">
                {t('pilar2Title', 'experiencias')}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {t('pilar2Desc', 'experiencias')}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-bold text-slate-500">
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">#LaurelesEstadio</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">#Nutibara</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">#CafeOrigen</span>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/gallery/entrada-barrio.jpg"
                alt="Barrio Laureles Medellín Calles"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-saveva-green text-white px-4 py-1 rounded-full text-xs font-mono uppercase font-black">
                {language === 'es' ? 'Barrio' : 'Local'}
              </div>
            </div>
          </div>

          {/* Pillar 3: Social Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/gallery/juegos-mesa.jpg"
                alt="Eventos y planes SAVEVA Hostal"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-saveva-celeste text-white px-4 py-1 rounded-full text-xs font-mono uppercase font-black">
                {language === 'es' ? 'Comunidad' : 'Community'}
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-saveva-celeste/10 dark:bg-saveva-celeste/20 rounded-2xl flex items-center justify-center text-saveva-celeste">
                <Calendar className="w-6 h-6" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white tracking-tight">
                {t('pilar3Title', 'experiencias')}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {t('pilar3Desc', 'experiencias')}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-bold text-slate-500">
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">#LanguageExchange</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">#SalsaClass</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">#SAVEVA_BBQ</span>
              </div>
            </div>
          </div>

          {/* Pillar 4: E-Bikes & 3 Climate Zones Tour */}
          <div className="bg-gradient-to-br from-saveva-blue to-slate-900 text-white rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden relative">
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-saveva-orange text-white px-4 py-1 rounded-full text-xs font-mono uppercase font-black z-20">
              {language === 'es' ? 'Tour de 1 Día' : '1-Day Tour'}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 pt-10">
              {/* Image gallery */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl col-span-1">
                  <Image
                    src="/tour-cold-forest.jpg"
                    alt="Bicicleta eléctrica en el clima frío del bosque de niebla"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl col-span-1">
                  <Image
                    src="/tour-waterfall.jpg"
                    alt="Clima subtropical con cascadas y bosque nublado"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Text block */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-saveva-celeste">
                  <Bike className="w-6 h-6" />
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight">
                  {t('pilar4Title', 'experiencias')}
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {t('pilar4Desc', 'experiencias')}
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                  {[
                    language === 'es' ? 'Bicicletas eléctricas, transporte, alimentación y guía turístico' : 'E-bikes, transport, catering & tour guide',
                    language === 'es' ? 'Ida y vuelta en un escarabajo Volkswagen del año 1961' : 'Round trip in a 1961 Volkswagen Beetle',
                    language === 'es' ? 'Conoce nuestra fundación y sus programas de nutrición y salud' : "Get to know our foundation's nutrition & health programs",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-saveva-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="font-display font-black text-xl text-saveva-celeste">
                    {t('pilar4Price', 'experiencias')}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t('pilar4Voucher', 'experiencias')}
                </p>

                <a
                  href={`https://wa.me/573332627268?text=${encodeURIComponent('¡Hola SAVEVA! 🐦 Quiero reservar el Tour de Bicicletas Eléctricas y los 3 Climas.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-saveva-orange hover:bg-saveva-orange/90 text-white font-display font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-colors mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === 'es' ? 'Reservar por WhatsApp' : 'Book via WhatsApp'}</span>
                </a>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-bold text-slate-300">
                  <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">#EBikes</span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">#3ClimateZones</span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">#Waterfalls</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Weekly Events Agenda block */}
        <div className="bg-slate-100/55 dark:bg-saveva-carddark p-8 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-1 bg-saveva-orange/15 text-saveva-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
              <span>Agenda SAVEVA</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white mb-2">
              {t('eventTitle', 'experiencias')}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {language === 'es' ? 'Todos nuestros eventos están abiertos para los huéspedes del hostal.' : 'All weekly gatherings are fully open to all current guests.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scheduleEvents.map((ev, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold uppercase text-saveva-green tracking-wider bg-saveva-green/10 px-2.5 py-1 rounded-lg">
                      {ev.day}
                    </span>
                    <span className="text-2xl">{ev.icon}</span>
                  </div>
                  <h3 className="font-display font-black text-base text-saveva-blue dark:text-white">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {ev.desc}
                  </p>
                </div>
                
                <div className="pt-6 text-xs text-slate-400 font-mono font-bold border-t border-slate-100 dark:border-slate-800 mt-6">
                  🕒 {ev.time}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

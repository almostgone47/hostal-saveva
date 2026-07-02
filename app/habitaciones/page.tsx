'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import { Check, MessageSquare, Calendar, Wifi, Coffee, Sparkles, Utensils, Award } from 'lucide-react';

export default function HabitacionesPage() {
  const { t, language } = useApp();

  const roomOptions = [
    {
      id: 'shared',
      title: t('shared', 'habitaciones'),
      desc: t('sharedDesc', 'habitaciones'),
      image: 'https://picsum.photos/seed/saveva-dorm/800/600',
      price: language === 'es' ? 'COP 45.000' : 'USD 12',
      features: language === 'es' 
        ? ['Casilleros de seguridad individuales', 'Tomacorrientes en cada cama', 'Luz de lectura dedicada', 'Excelente ventilación']
        : ['Individual security lockers', 'Power outlets on every bed', 'Dedicated reading light', 'Great ventilation'],
      waText: '¡Hola SAVEVA! 🐦 Quisiera consultar disponibilidad y tarifas para la Habitación Compartida.',
    },
    {
      id: 'private_shared',
      title: t('privateSharedBath', 'habitaciones'),
      desc: t('privateSharedBathDesc', 'habitaciones'),
      image: 'https://picsum.photos/seed/saveva-private-shared/800/600',
      price: language === 'es' ? 'COP 110.000' : 'USD 28',
      features: language === 'es'
        ? ['Cama doble ultra cómoda', 'Ventilador silencioso', 'Escritorio pequeño para laptop', 'Baño compartido impecable']
        : ['Ultra-comfortable double bed', 'Silent ceiling/floor fan', 'Small laptop desk setup', 'Impeccable shared bathroom'],
      waText: '¡Hola SAVEVA! 🐦 Quisiera consultar disponibilidad y tarifas para la Habitación Privada con Baño Compartido.',
    },
    {
      id: 'private_private',
      title: t('privatePrivateBath', 'habitaciones'),
      desc: t('privatePrivateBathDesc', 'habitaciones'),
      image: 'https://picsum.photos/seed/saveva-private-private/800/600',
      price: language === 'es' ? 'COP 150.000' : 'USD 38',
      features: language === 'es'
        ? ['Baño privado en suite', 'Escritorio amplio de trabajo', 'Ventilador de alta potencia', 'Armario amplio para equipaje']
        : ['En-suite private bathroom', 'Spacious working desk', 'High-power fan', 'Large wardrobe space'],
      waText: '¡Hola SAVEVA! 🐦 Quisiera consultar disponibilidad y tarifas para la Habitación Privada con Baño Privado.',
    },
  ];

  const amenities = [
    { icon: <Wifi className="w-6 h-6 text-saveva-green" />, text: t('amenity1', 'habitaciones') },
    { icon: <Utensils className="w-6 h-6 text-saveva-orange" />, text: t('amenity2', 'habitaciones') },
    { icon: <Coffee className="w-6 h-6 text-saveva-celeste" />, text: t('amenity5', 'habitaciones') },
    { icon: <Sparkles className="w-6 h-6 text-saveva-orange" />, text: t('amenity4', 'habitaciones') },
    { icon: <Award className="w-6 h-6 text-saveva-green" />, text: t('amenity6', 'habitaciones') },
    { icon: <MessageSquare className="w-6 h-6 text-saveva-celeste" />, text: t('amenity3', 'habitaciones') },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'habitaciones')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'habitaciones')}
          </p>
        </div>

        {/* Room Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 relative z-20">
          {roomOptions.map((room) => {
            return (
              <div
                key={room.id}
                className="bg-white dark:bg-saveva-carddark rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                {/* Image Frame */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                  />
                  {/* Price Tag overlay */}
                  <div className="absolute bottom-4 right-4 bg-saveva-blue text-white font-mono font-bold text-sm px-4 py-1.5 rounded-full shadow-md">
                    <span className="text-[10px] text-saveva-celeste font-semibold mr-1">{t('priceFrom', 'habitaciones')}</span>
                    {room.price}
                    <span className="text-[10px] text-slate-300 font-normal ml-0.5">{t('perNight', 'habitaciones')}</span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 space-y-4 flex flex-col justify-between h-[calc(100%-16rem)]">
                  <div className="space-y-3">
                    <h3 className="font-display font-black text-xl text-saveva-blue dark:text-white group-hover:text-saveva-orange transition-colors">
                      {room.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-h-[4rem]">
                      {room.desc}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      {room.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-4 h-4 text-saveva-green shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons Action Split */}
                  <div className="pt-6 space-y-2">
                    <Link
                      href="/reservas"
                      className="w-full flex items-center justify-center space-x-2 bg-saveva-orange hover:bg-saveva-orange/95 text-white text-xs font-display font-bold py-3.5 rounded-xl shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-saveva-orange"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{t('btnBook', 'habitaciones')}</span>
                    </Link>

                    <a
                      href={`https://wa.me/573332627268?text=${encodeURIComponent(room.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-saveva-blue hover:bg-saveva-blue/5 text-saveva-blue dark:border-white/20 dark:text-white dark:hover:bg-white/10 text-xs font-display font-bold py-3.5 rounded-xl flex items-center justify-center space-x-1.5 transition-colors focus:outline-none"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12.003 21.003c-1.602 0-3.115-.413-4.432-1.135l-.317-.174-3.297.865.88-3.21-.192-.305a9.003 9.003 0 0 1-1.464-4.88c0-4.963 4.04-9.003 9.003-9.003 4.963 0 9.003 4.04 9.003 9.003 0 4.963-4.04 9.003-9.003 9.003zm0-19.003C6.486 2 2 6.486 2 12.003c0 1.83.493 3.548 1.353 5.034L2 22l5.127-1.344a9.96 9.96 0 0 0 4.876 1.347C17.516 22.003 22 17.517 22 12.003 22 6.486 17.516 2 12.003 2z" />
                      </svg>
                      <span>{t('btnWhatsApp', 'habitaciones')}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services & Amenities Showcase Section */}
        <div className="bg-slate-100/55 dark:bg-saveva-carddark p-8 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white mb-2">
              {t('amenitiesTitle', 'habitaciones')}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {language === 'es' ? 'Todo lo necesario para que tu viaje sea cómodo y compartas grandes historias.' : 'All the core values to keep you comfortable while creating new travel stories.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0 border border-slate-100 dark:border-slate-800">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed pt-1.5">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

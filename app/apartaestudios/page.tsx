'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import { Shield, Users, CheckCircle, Home, MapPin, Send, ExternalLink } from 'lucide-react';

interface Apartaestudio {
  id: string;
  title: string;
  capacity: { es: string; en: string };
  image: string;
  url: string;
}

const apartaestudios: Apartaestudio[] = [
  {
    id: 'ae1',
    title: 'Apartaestudio #1',
    capacity: { es: 'Hasta 4 Personas', en: 'Up to 4 People' },
    image: '/rooms/Copia-de-WhatsApp-Image-2023-10-14-at-7.47.33-PM-1024x576.jpeg',
    url: 'https://hostalsaveva.com/tipo-de-habitacion/apartaestudio-1/',
  },
  {
    id: 'ae2',
    title: 'Apartaestudio #2',
    capacity: { es: 'Hasta 8 Personas', en: 'Up to 8 People' },
    image: '/rooms/20240831_150457-1024x576.jpeg',
    url: 'https://hostalsaveva.com/tipo-de-habitacion/apartaestudio-2/',
  },
  {
    id: 'ae3',
    title: 'Apartaestudio #3',
    capacity: { es: 'Hasta 3 Personas', en: 'Up to 3 People' },
    image: '/rooms/Copia-de-WhatsApp-Image-2023-12-01-at-12.20.29-PM-1024x576.jpeg',
    url: 'https://hostalsaveva.com/tipo-de-habitacion/apartaestudio-3/',
  },
];

export default function ApartaestudiosPage() {
  const { t, language } = useApp();

  const features = [
    t('feat1', 'apartaestudios'),
    t('feat2', 'apartaestudios'),
    t('feat3', 'apartaestudios'),
    t('feat4', 'apartaestudios'),
    t('feat5', 'apartaestudios'),
  ];

  const waText = (label: string) =>
    `¡Hola SAVEVA! 🐦 Me interesa cotizar el ${label} para una estadía por noches.`;

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'apartaestudios')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'apartaestudios')}
          </p>
        </div>

        {/* Real Apartaestudios Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 relative z-20">
          {apartaestudios.map((apt) => (
            <div
              key={apt.id}
              className="bg-white dark:bg-saveva-carddark rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={apt.image}
                  alt={apt.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-display font-black text-lg text-saveva-blue dark:text-white group-hover:text-saveva-orange transition-colors">
                  {apt.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-saveva-orange shrink-0" />
                  {language === 'es' ? apt.capacity.es : apt.capacity.en}
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href={`https://wa.me/573332627268?text=${encodeURIComponent(waText(apt.title))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-bold text-white bg-saveva-orange hover:bg-saveva-orange/90 rounded-xl py-2.5 transition-colors"
                  >
                    {language === 'es' ? 'Consultar por WhatsApp' : 'Ask on WhatsApp'}
                  </a>
                  <a
                    href={apt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-saveva-blue dark:text-white/70 hover:text-saveva-orange transition-colors"
                    aria-label="Ver apartaestudio en el sitio oficial"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content splits and visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 relative z-20">

          {/* Image visual block */}
          <div className="lg:col-span-6 relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={apartaestudios[1].image}
              alt="Apartaestudios Independientes de SAVEVA Hostal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
            {/* Quick stats floating badge */}
            <div className="absolute bottom-6 left-6 bg-slate-900/90 text-white p-4 rounded-2xl backdrop-blur-md max-w-xs border border-white/10 flex items-center space-x-3">
              <Users className="w-10 h-10 text-saveva-orange shrink-0 animate-bounce" />
              <div>
                <p className="font-bold text-sm">{language === 'es' ? 'Grupos de:' : 'Groups of:'}</p>
                <p className="text-xs text-slate-300">{language === 'es' ? '3 a 8 personas por apartaestudio.' : '3 to 8 people per apartaestudio.'}</p>
              </div>
            </div>
          </div>

          {/* Text block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-saveva-orange/10 border border-saveva-orange/20 rounded-full px-4 py-1.5 text-saveva-orange text-xs font-mono font-bold uppercase">
              <Home className="w-4 h-4" />
              <span>{language === 'es' ? 'Entrada Independiente' : 'Private Access'}</span>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg font-medium">
              {t('desc1', 'apartaestudios')}
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('desc2', 'apartaestudios')}
            </p>

            {/* Bullet features list */}
            <div className="bg-slate-100/40 dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-4">
              <h3 className="font-display font-bold text-sm uppercase text-slate-400 tracking-wider">
                {t('featuresTitle', 'apartaestudios')}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-saveva-orange shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact WhatsApp Quote */}
            <div className="pt-4">
              <a
                href={`https://wa.me/573332627268?text=${encodeURIComponent('¡Hola SAVEVA! 🐦 Me interesa cotizar un Apartaestudio para un grupo.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-saveva-orange hover:bg-saveva-orange/95 text-white font-display font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>{t('cta', 'apartaestudios')}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Proximity Location Callout block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-saveva-blue text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-xl">
          <div className="space-y-4 z-10 relative">
            <div className="flex items-center space-x-2 text-saveva-celeste font-mono uppercase text-xs tracking-wider">
              <MapPin className="w-5 h-5 shrink-0" />
              <span>{language === 'es' ? 'Ubicación Estratégica' : 'Strategic Location'}</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
              {language === 'es' ? 'Cerca de la acción deportiva de Medellín' : "Close to Medellin's main sporting actions"}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {language === 'es'
                ? 'Nos encontramos a pocos minutos de la Unidad Deportiva Atanasio Girardot, el complejo atlético y recreativo principal de la ciudad. Perfecto para delegaciones de natación, gimnasia, atletismo y fútbol que buscan un hospedaje cómodo, seguro, que permita concentrar al equipo y con facilidades de cocina privada.'
                : 'We are situated just a few minutes walk from the Atanasio Girardot Sports Complex, the city\'s main athletic and recreational hub. Perfect for swimming, gymnastics, track, and soccer delegations looking for cozy, secure, independent lodging.'}
            </p>
          </div>

          <div className="relative h-60 rounded-2xl overflow-hidden self-center border border-white/10 z-10">
            <Image
              src="https://picsum.photos/seed/medellin-estadio/600/400"
              alt="Estadio Atanasio Girardot Medellín"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Background Hummingbird watermark */}
          <div className="absolute top-[-20px] right-[-20px] w-64 h-64 text-white/5 pointer-events-none">
            <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
              <path d="M12 28 C16 28 22 24 26 18 C30 12 30 6 28 4 C26 2 20 2 16 6 C12 10 10 18 12 28 Z" />
            </svg>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

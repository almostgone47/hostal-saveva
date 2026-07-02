'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import { Award, Compass, Heart, Users, ShieldCheck, HelpCircle, Star, Sparkles } from 'lucide-react';

export default function NosotrosPage() {
  const { t, language } = useApp();

  const valuesList = [
    { icon: <Users className="w-6 h-6 text-saveva-green" />, title: language === 'es' ? 'Comunidad' : 'Community', desc: language === 'es' ? 'Creemos que viajar es mejor cuando se comparte y se hace en grupo.' : 'We believe that traveling is better when shared and done in groups.' },
    { icon: <Compass className="w-6 h-6 text-saveva-orange" />, title: language === 'es' ? 'Aventura' : 'Adventure', desc: language === 'es' ? 'Exploramos con curiosidad y entusiasmo lo desconocido de Medellín.' : 'We explore the unknown corners of Medellin with curiosity and energy.' },
    { icon: <Heart className="w-6 h-6 text-red-500" />, title: language === 'es' ? 'Calidez' : 'Warm hospitality', desc: language === 'es' ? 'Tuteo directo, sonrisas sinceras y hospitalidad que te hace sentir en casa.' : 'Direct approach, sincere smiles, and hospitality that feels like home.' },
    { icon: <ShieldCheck className="w-6 h-6 text-saveva-blue" />, title: language === 'es' ? 'Confianza & Respeto' : 'Trust & Respect', desc: language === 'es' ? 'Garantizamos espacios limpios, inclusivos y seguros para todos.' : 'We guarantee clean, inclusive, and safe spaces for all guests.' },
    { icon: <Award className="w-6 h-6 text-saveva-celeste" />, title: language === 'es' ? 'Autenticidad' : 'Authenticity', desc: language === 'es' ? 'Mostramos la verdadera cultura de barrio de Laureles y Medellín.' : 'We display the real neighborhood culture of Laureles and Medellin.' },
    { icon: <Sparkles className="w-6 h-6 text-yellow-500" />, title: language === 'es' ? 'Sostenibilidad' : 'Sustainability', desc: language === 'es' ? 'Apoyamos el comercio de Laureles, cuidando del agua y recursos locales.' : 'We support Laureles shops, saving water and caring for resources.' },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'nosotros')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'nosotros')}
          </p>
        </div>

        {/* Narrative & Brand Identity splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 relative z-20">
          
          {/* Left Column: Core story */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white">
              {t('storyTitle', 'nosotros')}
            </h2>
            <div className="w-10 h-0.5 bg-saveva-orange"></div>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              {t('who_we_are_desc', 'nosotros')}
            </p>

            <div className="bg-slate-100/50 dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-3">
              <h3 className="font-display font-bold text-sm uppercase text-saveva-orange tracking-wider flex items-center space-x-1.5">
                <Star className="w-4 h-4 text-saveva-orange" />
                <span>{t('personality', 'nosotros')}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('personality_desc', 'nosotros')}
              </p>
            </div>
          </div>

          {/* Right Column: Narrative photo */}
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/saveva-team/800/600"
              alt="SAVEVA Hostal Team Medellín"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />
            {/* Beautiful Colibrí watermarked overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
          </div>

        </div>

        {/* Mission and Vision Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-saveva-blue text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-lg border border-white/5">
            <h2 className="font-display font-black text-xl sm:text-2xl mb-4 text-saveva-celeste">
              {t('missionTitle', 'nosotros')}
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed relative z-10">
              {t('mission_desc', 'nosotros')}
            </p>
            <div className="absolute bottom-[-30px] right-[-30px] w-48 h-48 opacity-5 text-white pointer-events-none">
              <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                <path d="M12 28 C16 28 22 24 26 18 C30 12 30 6 28 4 C26 2 20 2 16 6 C12 10 10 18 12 28 Z" />
              </svg>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-saveva-green text-white p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-lg border border-white/5">
            <h2 className="font-display font-black text-xl sm:text-2xl mb-4 text-white">
              {t('visionTitle', 'nosotros')}
            </h2>
            <p className="text-slate-100 text-sm leading-relaxed relative z-10">
              {t('vision_desc', 'nosotros')}
            </p>
            <div className="absolute bottom-[-30px] right-[-30px] w-48 h-48 opacity-5 text-white pointer-events-none">
              <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
                <path d="M28 22 C34 22 42 30 46 38 C50 46 48 52 44 54 C40 56 34 52 30 44 C26 36 24 28 28 22 Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Brand Values block */}
        <div className="bg-white dark:bg-saveva-carddark p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white mb-2">
              {t('valuesTitle', 'nosotros')}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {language === 'es' ? 'Los principios que definen cada experiencia en nuestro hostal.' : 'The core beliefs that shape every experience in our hostel.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesList.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-50 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-slate-100/50 dark:hover:bg-slate-900/80 transition-colors"
              >
                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-sm mb-4">
                  {val.icon}
                </div>
                <h3 className="font-display font-bold text-base text-saveva-blue dark:text-white mb-1">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

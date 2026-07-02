'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import { Wifi, BookOpen, Star, Sparkles, Send, Coffee, Calendar, Landmark } from 'lucide-react';

export default function StayStudyPage() {
  const { t, language } = useApp();

  const benefits = [
    t('benefit1', 'stay_study'),
    t('benefit2', 'stay_study'),
    t('benefit3', 'stay_study'),
    t('benefit4', 'stay_study'),
    t('benefit5', 'stay_study'),
  ];

  const waText = '¡Hola SAVEVA! 🐦 Me interesa aplicar para el programa Stay & Study de estadía larga para estudiantes/nómadas.';

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'stay_study')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'stay_study')}
          </p>
        </div>

        {/* Storytelling & Visual Splitting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 relative z-20">
          
          {/* Left Column: Text narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-saveva-green/10 border border-saveva-green/20 rounded-full px-4 py-1.5 text-saveva-green text-xs font-mono font-bold uppercase">
              <BookOpen className="w-4 h-4" />
              <span>{language === 'es' ? 'Nómadas & Estudiantes' : 'Nomads & Students'}</span>
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg font-medium">
              {t('desc1', 'stay_study')}
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('desc2', 'stay_study')}
            </p>

            {/* Special long term benefits list */}
            <div className="bg-slate-100/40 dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-4">
              <h3 className="font-display font-bold text-sm uppercase text-slate-400 tracking-wider flex items-center space-x-1.5">
                <Star className="w-4 h-4 text-saveva-green" />
                <span>{t('benefitTitle', 'stay_study')}</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-sm text-slate-700 dark:text-slate-300">
                    <Sparkles className="w-4 h-4 text-saveva-green shrink-0 mt-0.5 animate-pulse" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action trigger */}
            <div className="pt-4">
              <a
                href={`https://wa.me/573332627268?text=${encodeURIComponent(waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-saveva-green hover:bg-saveva-green/95 text-white font-display font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>{t('cta', 'stay_study')}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Imagery showcase */}
          <div className="lg:col-span-5 relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/saveva-nomad/800/1000"
              alt="Nómada digital en SAVEVA Hostal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              referrerPolicy="no-referrer"
            />
            {/* Quick overlay box for fiber wifi */}
            <div className="absolute top-6 right-6 bg-saveva-orange text-white px-4 py-2 rounded-2xl font-mono text-xs font-bold flex items-center space-x-1.5 shadow-md">
              <Wifi className="w-4 h-4 shrink-0" />
              <span>WiFi 250 Mbps (Fibra)</span>
            </div>
          </div>

        </div>

        {/* Pricing special rates block */}
        <div className="bg-slate-100/50 dark:bg-saveva-carddark p-8 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white mb-2">
              {t('ratesTitle', 'stay_study')}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {language === 'es' ? 'Precios escalados para estancias prolongadas en habitación compartida o privada.' : 'Discounted pricing tiers for extended bookings.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Weekly Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-block bg-saveva-celeste/10 text-saveva-celeste px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider">
                  {t('rateWeekly', 'stay_study')}
                </div>
                <h3 className="font-display font-bold text-lg text-saveva-blue dark:text-white">
                  {t('rateWeeklyDesc', 'stay_study')}
                </h3>
                <div className="font-mono text-3xl font-black text-slate-800 dark:text-white pt-2">
                  {language === 'es' ? 'COP 250.000' : 'USD 65'}
                  <span className="text-xs text-slate-400 font-normal ml-1">/ {t('weeklyLabel', 'stay_study')}</span>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href={`https://wa.me/573332627268?text=${encodeURIComponent('Hola SAVEVA! 🐦 Me interesa cotizar tarifas semanales de Stay & Study.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-3.5 border border-saveva-blue hover:bg-saveva-blue/5 text-saveva-blue dark:border-white/20 dark:text-white dark:hover:bg-white/10 rounded-xl text-xs font-bold transition-all"
                >
                  {language === 'es' ? 'Cotizar por semanas' : 'Inquire Weekly Rates'}
                </a>
              </div>
            </div>

            {/* Monthly Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-saveva-orange/40 dark:border-saveva-orange/20 shadow-md flex flex-col justify-between relative overflow-hidden">
              {/* Highlight sash */}
              <div className="absolute top-0 right-0 bg-saveva-orange text-white text-[9px] font-mono uppercase font-black px-6 py-1.5 rotate-45 translate-x-5 translate-y-3">
                {language === 'es' ? 'Popular' : 'Best Price'}
              </div>
              
              <div className="space-y-4">
                <div className="inline-block bg-saveva-orange/10 text-saveva-orange px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider">
                  {t('rateMonthly', 'stay_study')}
                </div>
                <h3 className="font-display font-bold text-lg text-saveva-blue dark:text-white">
                  {t('rateMonthlyDesc', 'stay_study')}
                </h3>
                <div className="font-mono text-3xl font-black text-slate-800 dark:text-white pt-2">
                  {language === 'es' ? 'COP 850.000' : 'USD 220'}
                  <span className="text-xs text-slate-400 font-normal ml-1">/ {t('monthlyLabel', 'stay_study')}</span>
                </div>
              </div>
              <div className="pt-6">
                <a
                  href={`https://wa.me/573332627268?text=${encodeURIComponent('Hola SAVEVA! 🐦 Me interesa aplicar a las tarifas mensuales de Stay & Study.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-3.5 bg-saveva-orange hover:bg-saveva-orange/95 text-white rounded-xl text-xs font-bold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-saveva-orange"
                >
                  {language === 'es' ? 'Aplicar plan mensual' : 'Apply Monthly Plan'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* University Proximity Block */}
        <div className="bg-gradient-to-r from-saveva-blue to-[#092051] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="md:w-2/3 space-y-4 relative z-10">
            <div className="flex items-center space-x-2 text-saveva-celeste text-xs font-mono font-bold uppercase tracking-wider">
              <Landmark className="w-5 h-5 shrink-0" />
              <span>{language === 'es' ? 'Estudiantes de Intercambio' : 'Exchange Students'}</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
              {language === 'es' ? 'Cerca a la Universidad Pontificia Bolivariana (UPB) y Universidad de Antioquia' : 'Conveniently situated near UPB and Universidad de Antioquia'}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {language === 'es'
                ? 'Si vienes a estudiar en Medellín, SAVEVA Hostal está ubicado estratégicamente en Laureles Estadio, uno de los barrios universitarios más tradicionales y seguros. Contamos con fácil acceso de transporte público hacia la UPB y la Universidad de Antioquia, además de estar rodeados de parques tranquilos, supermercados, ciclorrutas y cafés de especialidad para preparar exámenes o escribir tesis.'
                : 'If you are coming to study in Medellin, SAVEVA is located in Laureles Estadio, one of the greenest, safest, and most traditional academic neighborhoods. We provide easy transit links to UPB and UdeA, as well as plenty of nearby specialty coffee shops, bike paths, and parks to study or relax.'}
            </p>
          </div>
          <div className="md:w-1/3 relative h-64 w-full md:w-auto rounded-2xl overflow-hidden self-center border border-white/10 shrink-0">
            <Image
              src="https://picsum.photos/seed/saveva-university/600/400"
              alt="Universidad en Medellín"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

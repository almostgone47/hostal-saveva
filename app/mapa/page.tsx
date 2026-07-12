'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import { MapPin } from 'lucide-react';

// Leaflet depende de `window`, así que el mapa se carga solo en el cliente.
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[480px] rounded-2xl bg-slate-100 dark:bg-slate-900 animate-pulse flex items-center justify-center text-slate-400 text-sm">
      Cargando mapa...
    </div>
  ),
});

export default function MapaPage() {
  const { t } = useApp();

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-12 h-12 mx-auto bg-saveva-orange/10 dark:bg-saveva-orange/20 rounded-2xl flex items-center justify-center text-saveva-orange mb-4">
            <MapPin className="w-6 h-6" />
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'mapa')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'mapa')}
          </p>
        </div>

        <div className="bg-white dark:bg-saveva-carddark p-4 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg">
          <InteractiveMap height={560} />
        </div>
      </div>
    </MainLayout>
  );
}

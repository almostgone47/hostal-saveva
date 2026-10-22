'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import { Check, MessageSquare, Calendar, Wifi, Coffee, Sparkles, Utensils, Award, Home, ExternalLink } from 'lucide-react';

interface RoomUnit {
  id: string;
  number: string;
  capacity: { es: string; en: string };
  image: string;
  url: string;
}

const casaBlancaRooms: RoomUnit[] = [
  { id: 'cb1', number: '#1', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/20240831_125720-1024x576.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-blanca-habitacion-1/' },
  { id: 'cb2', number: '#2', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/20240831_124941-1024x576.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-blanca-habitacion-2/' },
  { id: 'cb3', number: '#3', capacity: { es: 'Hasta 2 Personas', en: 'Up to 2 People' }, image: '/rooms/20240831_123702-1024x768.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-blanca-habitacion-3/' },
  { id: 'cb4', number: '#4', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/20240831_124044-1024x768.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-blanca-habitacion-4/' },
  { id: 'cb5', number: '#5', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/Copia-de-5-1024x576.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-blanca-habitacion-5/' },
  { id: 'cb7', number: '#7', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/Copia-de-7-1024x462.jpg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-blanca-habitacion-7/' },
  { id: 'cb8', number: '#8', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/WhatsApp-Image-2024-08-29-at-10.53.42-AM-1024x768.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-blanca-habitacion-8/' },
];

const casaAmarillaRooms: RoomUnit[] = [
  { id: 'ca11', number: '#11', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/20240709_144736-1024x768.jpg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-11/' },
  { id: 'ca12', number: '#12', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/20250117_134440-1024x576.jpg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-12/' },
  { id: 'ca13', number: '#13', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/Habitacion-13-Casa-Amarilla-704x1024.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-13/' },
  { id: 'ca14', number: '#14', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/Copia-de-20240912_122202-1024x768.jpg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-14/' },
  { id: 'ca16', number: '#16', capacity: { es: 'Hasta 2 Personas', en: 'Up to 2 People' }, image: '/rooms/Habitacion-16-Casa-Amarilla-1024x719.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-16/' },
  { id: 'ca17', number: '#17', capacity: { es: 'Hasta 2 Personas', en: 'Up to 2 People' }, image: '/rooms/Habitacion-17-Casa-Amarilla_-1024x576.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-17/' },
  { id: 'ca18', number: '#18', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/20230716_1644051-1024x576.jpg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-18/' },
  { id: 'ca19', number: '#19', capacity: { es: 'Hasta 2 Personas', en: 'Up to 2 People' }, image: '/rooms/20230716_161458-1024x576.jpg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-19/' },
  { id: 'ca20', number: '#20', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/20250117_132649-1024x576.jpg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-20/' },
  { id: 'ca21', number: '#21', capacity: { es: 'Hasta 2 Personas', en: 'Up to 2 People' }, image: '/rooms/20240831_134324-1024x576.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-21/' },
  { id: 'ca22', number: '#22', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/20240831_142443-1024x576.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-22/' },
  { id: 'ca23', number: '#23', capacity: { es: '1 Persona', en: '1 Person' }, image: '/rooms/20240831_144110-1024x576.jpeg', url: 'https://hostalsaveva.com/tipo-de-habitacion/casa-amarilla-habitacion-23/' },
];

function RoomGrid({ rooms, language }: { rooms: RoomUnit[]; language: 'es' | 'en' }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {rooms.map((room) => (
        <div key={room.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col">
          <div className="relative h-32 sm:h-36 overflow-hidden">
            <Image src={room.image} alt={`Habitación ${room.number} SAVEVA`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
          <div className="p-3 flex flex-col flex-1 justify-between gap-2">
            <div>
              <p className="font-display font-black text-sm text-saveva-blue">{room.number}</p>
              <p className="text-[11px] text-slate-500">{language === 'es' ? room.capacity.es : room.capacity.en}</p>
            </div>
            <a href="https://hostal-saveva.roomleo.com/book" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-[11px] font-bold text-white bg-saveva-orange hover:bg-saveva-orange/90 rounded-lg py-2 transition-colors">
              {language === 'es' ? 'Ver disponibilidad' : 'Check availability'}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HabitacionesPage() {
  const { t, language } = useApp();

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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'habitaciones')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'habitaciones')}
          </p>
          <p className="text-xs text-slate-400 mt-3 font-mono uppercase tracking-wider">
            {language === 'es'
              ? 'Habitaciones amuebladas por mes, en la Casa Blanca y la Casa Amarilla · Laureles Estadio'
              : 'Furnished monthly rooms across Casa Blanca and Casa Amarilla · Laureles Estadio'}
          </p>
        </div>

        {/* Casa Blanca */}
        <div className="mb-16 relative z-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center text-saveva-blue border border-slate-200/60 dark:border-slate-800">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-saveva-blue dark:text-white">
                {language === 'es' ? 'Habitaciones de la Casa Blanca' : 'Rooms at Casa Blanca'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'es' ? 'Habitaciones amuebladas, individuales o para 2 personas' : 'Furnished rooms, single or double occupancy'}
              </p>
            </div>
          </div>
          <RoomGrid rooms={casaBlancaRooms} language={language} />
        </div>

        {/* Casa Amarilla */}
        <div className="mb-20 relative z-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-saveva-orange/10 dark:bg-saveva-orange/20 rounded-xl flex items-center justify-center text-saveva-orange border border-saveva-orange/20">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-saveva-blue dark:text-white">
                {language === 'es' ? 'Habitaciones de la Casa Amarilla' : 'Rooms at Casa Amarilla'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'es' ? 'Habitaciones amuebladas, individuales o para 2 personas' : 'Furnished rooms, single or double occupancy'}
              </p>
            </div>
          </div>
          <RoomGrid rooms={casaAmarillaRooms} language={language} />
        </div>

        {/* Group booking CTA */}
        <div className="bg-saveva-blue text-white rounded-3xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-black text-xl sm:text-2xl mb-1">
              {language === 'es' ? '¿Prefieres una estadía corta o para grupo?' : 'Prefer a short stay or a group booking?'}
            </h3>
            <p className="text-slate-300 text-sm">
              {language === 'es'
                ? 'Conoce nuestros Apartaestudios por noche, ideales para grupos de 3 a 8 personas.'
                : 'Check out our nightly Apartaestudios, ideal for groups of 3 to 8 people.'}
            </p>
          </div>
          <Link
            href="/apartaestudios"
            className="shrink-0 bg-saveva-orange hover:bg-saveva-orange/90 text-white font-display font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-colors"
          >
            {language === 'es' ? 'Ver Apartaestudios' : 'View Apartaestudios'}
          </Link>
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

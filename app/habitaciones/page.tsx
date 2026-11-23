'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import BookingSearchBar from '@/components/BookingSearchBar';
import { Check, MessageSquare, MessageCircle, Wifi, Coffee, Sparkles, Utensils, Award, Users, ArrowRight } from 'lucide-react';
import { BOOKING_URL, whatsappLink, unitInquiryText } from '@/lib/contact';

type Lang = 'es' | 'en';
type Text = Record<Lang, string>;

interface RoomType {
  id: string;
  /** Same name Roomleo shows on its results page, so guests recognise it there. */
  name: Text;
  occupancy: Text;
  features: Record<Lang, string[]>;
  image: string;
  /** Rooms 9 & 10: also sold whole as apartaestudios. */
  alsoStudio?: boolean;
  /** Has its own page: the main button goes there instead of straight to Roomleo. */
  detailsHref?: string;
}

const roomTypes: RoomType[] = [
  {
    id: 'compartida-4',
    name: { es: 'Habitación Compartida (4 Camas)', en: 'Shared Room (4 Beds)' },
    occupancy: { es: '1 huésped por cama', en: '1 guest per bed' },
    features: {
      es: ['Camarotes con cortina de privacidad', 'Cocina y baño dentro de la habitación'],
      en: ['Bunks with privacy curtains', 'Kitchen and bathroom inside the room'],
    },
    image: '/rooms/types/compartida-4.jpg',
    alsoStudio: true,
  },
  {
    id: 'compartida-6',
    name: { es: 'Habitación Compartida (6 Camas)', en: 'Shared Room (6 Beds)' },
    occupancy: { es: '1 huésped por cama', en: '1 guest per bed' },
    features: {
      es: ['La opción más económica', 'Ideal para mochileros y viajeros solos'],
      en: ['Our best-value option', 'Ideal for backpackers and solo travellers'],
    },
    image: '/rooms/types/compartida-6.jpg',
  },
  {
    id: 'individual',
    name: { es: 'Habitación Individual', en: 'Single Room' },
    occupancy: { es: 'Habitación privada · 1 huésped', en: 'Private room · 1 guest' },
    features: {
      es: ['Tu propio espacio para descansar', 'Baño compartido'],
      en: ['Your own space to rest', 'Shared bathroom'],
    },
    image: '/rooms/types/individual.jpg',
  },
  {
    id: 'individual-ensuite',
    name: { es: 'Habitación Individual Ensuite', en: 'Single Room Ensuite' },
    occupancy: { es: 'Habitación privada · 1 huésped', en: 'Private room · 1 guest' },
    features: {
      es: ['Baño privado', 'Escritorio para trabajar o estudiar'],
      en: ['Private bathroom', 'Desk for work or study'],
    },
    image: '/rooms/types/individual-ensuite.jpg',
  },
  {
    id: 'doble-ensuite',
    name: { es: 'Habitación Doble Ensuite', en: 'Double Room Ensuite' },
    occupancy: { es: 'Habitación privada · hasta 2 huéspedes', en: 'Private room · up to 2 guests' },
    features: {
      es: ['Cama doble', 'Baño privado'],
      en: ['Double bed', 'Private bathroom'],
    },
    image: '/rooms/types/doble-ensuite.jpg',
  },
  {
    id: 'apartaestudio',
    name: { es: 'Apartaestudio (4 personas)', en: 'Studio Apartment (4 people)' },
    occupancy: { es: 'Privado · hasta 4 huéspedes', en: 'Private · up to 4 guests' },
    features: {
      es: ['Cocina y baño privado', 'A pocos minutos caminando del Estadio'],
      en: ['Private kitchen and bathroom', 'A few minutes’ walk from the Stadium'],
    },
    image: '/rooms/apartaestudios/estudio-camas-cocina.jpg',
    detailsHref: '/apartaestudios',
  },
];

function RoomTypeCard({ room, language }: { room: RoomType; language: Lang }) {
  const es = language === 'es';
  return (
    <div id={room.id} className="bg-white dark:bg-saveva-carddark rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group flex flex-col scroll-mt-28">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name[language]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-display font-black text-lg text-saveva-blue dark:text-white">{room.name[language]}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
            <Users className="w-4 h-4 text-saveva-orange shrink-0" />
            {room.occupancy[language]}
          </p>
        </div>
        <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
          {room.features[language].map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-saveva-green shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
        {room.alsoStudio && (
          <Link href="/apartaestudios" className="inline-flex items-center gap-1 text-xs font-semibold text-saveva-blue dark:text-saveva-celeste hover:text-saveva-orange underline underline-offset-2">
            {es ? '¿Viajas en familia o grupo? Reserva el apartaestudio completo' : 'Travelling as a family or group? Book the whole studio'}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
        <div className="mt-auto pt-2 space-y-2">
          <a
            href={whatsappLink(unitInquiryText(es ? `la ${room.name.es}` : `the ${room.name.en}`, language))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#25D366] hover:text-[#1da851] rounded-xl py-2.5 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            {es ? 'Preguntar por WhatsApp' : 'Ask on WhatsApp'}
          </a>
          {room.detailsHref ? (
            <Link
              href={room.detailsHref}
              className="block w-full text-center text-xs font-bold text-white bg-saveva-orange hover:bg-saveva-orange/90 rounded-xl py-2.5 transition-colors"
            >
              {es ? 'Ver apartaestudios' : 'View studios'}
            </Link>
          ) : (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-xs font-bold text-white bg-saveva-orange hover:bg-saveva-orange/90 rounded-xl py-2.5 transition-colors"
            >
              {es ? 'Reservar' : 'Book now'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HabitacionesPage() {
  const { t, language } = useApp();
  const es = language === 'es';

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

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'habitaciones')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'habitaciones')}
          </p>
        </div>

        {/* Search → Roomleo results */}
        <div className="max-w-4xl mx-auto mb-14 relative z-20">
          <BookingSearchBar />
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3">
            {es ? 'Elige tus fechas y te mostramos disponibilidad y precios en tiempo real.' : 'Pick your dates to see live availability and prices.'}
          </p>
        </div>

        {/* Room types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-20">
          {roomTypes.map((room) => (
            <RoomTypeCard key={room.id} room={room} language={language} />
          ))}
        </div>

        {/* Studios / groups CTA */}
        <div className="bg-saveva-blue text-white rounded-3xl overflow-hidden mb-16 grid grid-cols-1 md:grid-cols-5 relative z-20">
          <div className="relative h-56 md:h-auto md:col-span-2">
            <Image src="/rooms/apartaestudios/estudio-camas-cocina.jpg" alt={es ? 'Apartaestudio SAVEVA' : 'SAVEVA studio apartment'} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
          </div>
          <div className="p-8 md:p-10 md:col-span-3 flex flex-col justify-center gap-4">
            <p className="text-xs font-mono uppercase tracking-wider text-saveva-orange font-bold">
              {es ? 'Familias y grupos' : 'Families & groups'}
            </p>
            <h3 className="font-display font-black text-2xl sm:text-3xl">
              {es ? '¿Vienes a un partido o concierto en el Estadio?' : 'Coming for a match or concert at the Stadium?'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {es
                ? 'Nuestros apartaestudios tienen 4 camas, cocina y baño privado, a pocos minutos caminando del Estadio Atanasio Girardot.'
                : 'Our studio apartments have 4 beds, a private kitchen and bathroom, a few minutes’ walk from the Atanasio Girardot Stadium.'}
            </p>
            <div>
              <Link
                href="/apartaestudios"
                className="inline-flex items-center gap-2 bg-saveva-orange hover:bg-saveva-orange/90 text-white font-display font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-colors"
              >
                {es ? 'Ver Apartaestudios' : 'View Studio Apartments'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Services & Amenities */}
        <div className="bg-slate-100/55 dark:bg-saveva-carddark p-8 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white mb-2">
              {t('amenitiesTitle', 'habitaciones')}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {es ? 'Todo lo necesario para que tu viaje sea cómodo y compartas grandes historias.' : 'All the core values to keep you comfortable while creating new travel stories.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0 border border-slate-100 dark:border-slate-800">
                  {item.icon}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed pt-1.5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

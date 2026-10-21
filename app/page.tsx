'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, Users, Map, Coffee, Check, Shield } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';

export default function Home() {
  const { t, language } = useApp();

  return (
    <MainLayout>
      {/* 1. IMMERSIVE HERO SECTION */}
      <section id="hero-section" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-saveva-house.jpg"
            alt="Fachada del Hostal SAVEVA en Laureles Estadio, Medellín"
            fill
            priority
            className="object-cover opacity-60 scale-105 animate-float"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/40"></div>
          
          {/* Subtle tropical overlay overlay pattern (Hummingbirds & Leaves silhouettes) */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[radial-gradient(#ff7a00_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          {/* Accent Badge */}
          <div className="inline-flex items-center space-x-2 bg-saveva-orange/20 border border-saveva-orange/30 rounded-full px-4 py-1.5 mb-6 animate-pulse">
            {/* Hummingbird Mini SVG */}
            <svg viewBox="0 0 64 64" fill="currentColor" className="w-5 h-5 text-saveva-orange">
              <path d="M12 28 C16 28 22 24 26 18 C30 12 30 6 28 4 C26 2 20 2 16 6 C12 10 10 18 12 28 Z" fill="currentColor" />
            </svg>
            <span className="text-xs font-mono font-bold tracking-widest text-saveva-orange uppercase">
              {t('badge', 'home')}
            </span>
          </div>

          {/* Core Title */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none mb-6">
            {t('heroTitle', 'home')}
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 font-sans font-medium mb-10 leading-relaxed">
            {t('heroSub', 'home')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservas"
              className="w-full sm:w-auto bg-saveva-orange hover:bg-saveva-orange/95 text-white font-display font-bold px-7 py-3.5 rounded-xl text-sm transition-all text-center tracking-wide shadow-sm hover:shadow-md active:translate-y-0"
            >
              {t('cta', 'home')}
            </Link>
            <Link
              href="/habitaciones"
              className="w-full sm:w-auto border border-white/30 bg-white/10 hover:bg-white/20 text-white font-display font-bold px-7 py-3.5 rounded-xl text-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <span>{t('roomsBtn', 'home')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Curve Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[50px] fill-[#FDECE1]/40 dark:fill-saveva-blue" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. THE BRAND EXPERIENCE (INTRO) */}
      <section id="experience-section" className="py-20 bg-[#FDECE1]/40 dark:bg-saveva-blue transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-saveva-blue dark:text-white tracking-tight mb-4">
              {t('aboutTitle', 'home')}
            </h2>
            <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4 font-medium">
              {t('aboutDesc1', 'home')}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('aboutDesc2', 'home')}
            </p>
          </div>

          {/* Three core pillars visual bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-saveva-carddark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-saveva-green/10 dark:bg-saveva-green/20 rounded-2xl flex items-center justify-center text-saveva-green mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-lg text-saveva-blue dark:text-white mb-2">
                {language === 'es' ? 'Naturaleza y Bienestar' : 'Nature & Wellbeing'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === 'es' 
                  ? 'Inspirados en el vuelo del colibrí, integramos vegetación tropical y espacios al aire libre para que respires profundo.' 
                  : 'Inspired by the hummingbird flight, we integrate tropical vegetation and outdoor spots so you can breathe fresh.'}
              </p>
            </div>

            <div className="bg-white dark:bg-saveva-carddark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-saveva-orange/10 dark:bg-saveva-orange/20 rounded-2xl flex items-center justify-center text-saveva-orange mb-6 group-hover:scale-110 transition-transform">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-lg text-saveva-blue dark:text-white mb-2">
                {language === 'es' ? 'Aventura y Exploración' : 'Adventure & Exploration'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === 'es' 
                  ? 'Medellín está llena de rincones mágicos. Te ayudamos a armar tus rutas, tours grupales y caminatas por senderos locales.' 
                  : 'Medellin is full of magical places. We help you design your routes, join group tours, and hike local trails.'}
              </p>
            </div>

            <div className="bg-white dark:bg-saveva-carddark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-saveva-celeste/10 dark:bg-saveva-celeste/20 rounded-2xl flex items-center justify-center text-saveva-celeste mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-lg text-saveva-blue dark:text-white mb-2">
                {language === 'es' ? 'Comunidad y Amistad' : 'Community & Friendship'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === 'es' 
                  ? 'El corazón de SAVEVA son las personas. Ven solo y vete con amigos de todo el mundo con quienes planear tu próximo destino.' 
                  : 'The heart of SAVEVA is our people. Arrive solo and leave with friends from all over the world to plan your next trip.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALTERNATING IMAGES & TEXT SECTIONS (Inspired by Polylepis.com) */}
      <section id="features-split-section" className="py-12 bg-[#FDF5EC] dark:bg-saveva-blue/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Section A: Rooms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl order-last lg:order-first">
              <Image
                src="/hero-saveva-house.jpg"
                alt="Habitaciones en SAVEVA Hostal"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-saveva-blue text-white px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold">
                {language === 'es' ? 'Estilo & Confort' : 'Style & Comfort'}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display font-black text-3xl sm:text-4xl text-saveva-blue dark:text-white tracking-tight">
                {t('roomsTitle', 'home')}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {t('roomsSub', 'home')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-saveva-green shrink-0" />
                  <span>{language === 'es' ? 'Habitaciones compartidas con lockers amplios.' : 'Shared dorms with spacious personal lockers.'}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-saveva-green shrink-0" />
                  <span>{language === 'es' ? 'Habitaciones privadas con baño en-suite y escritorios.' : 'Private rooms with en-suite bathrooms and desks.'}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-saveva-green shrink-0" />
                  <span>{language === 'es' ? 'Limpieza diaria y sábanas limpias incluidas.' : 'Daily housekeeping and fresh linens included.'}</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/habitaciones"
                  className="inline-flex items-center space-x-2 bg-saveva-blue hover:bg-saveva-blue/90 text-white font-display font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:translate-x-1"
                >
                  <span>{t('roomsBtn', 'home')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section B: Apartments (Apartaestudios) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display font-black text-3xl sm:text-4xl text-saveva-blue dark:text-white tracking-tight">
                {t('apartmentsTitle', 'home')}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {t('apartmentsDesc', 'home')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-saveva-orange shrink-0" />
                  <span>{language === 'es' ? 'Entrada 100% independiente de la calle principal.' : '100% independent street-side entrance.'}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-saveva-orange shrink-0" />
                  <span>{language === 'es' ? 'Cocina y baños totalmente privados y equipados.' : 'Fully private and equipped kitchens and bathrooms.'}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-saveva-orange shrink-0" />
                  <span>{language === 'es' ? 'Grupos de 3 a 8 personas por apartaestudio.' : 'Groups of 3 to 8 people per apartaestudio.'}</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/apartaestudios"
                  className="inline-flex items-center space-x-2 bg-saveva-orange hover:bg-saveva-orange/90 text-white font-display font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:translate-x-1"
                >
                  <span>{t('apartmentsBtn', 'home')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/rooms/20240831_150457-1024x576.jpeg"
                alt="Apartaestudios en SAVEVA"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-saveva-orange text-white px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold">
                {language === 'es' ? 'Grupos & Familias' : 'Groups & Families'}
              </div>
            </div>
          </div>

          {/* Section C: Stay & Study */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl order-last lg:order-first">
              <Image
                src="/rooms/Habitacion-17-Casa-Amarilla_-1024x576.jpeg"
                alt="Stay and study en SAVEVA Hostal"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-saveva-green text-white px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold">
                {language === 'es' ? 'Estadías Largas' : 'Long-Term Stays'}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display font-black text-3xl sm:text-4xl text-saveva-blue dark:text-white tracking-tight">
                {t('stayStudyTitle', 'home')}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {t('stayStudyDesc', 'home')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-saveva-green shrink-0" />
                  <span>{language === 'es' ? 'WiFi simétrico y de ultra alta velocidad.' : 'Symmetrical ultra high-speed fiber internet.'}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-saveva-green shrink-0" />
                  <span>{language === 'es' ? 'Espacios de coworking con excelente ambiente.' : 'Co-working setups with inspiring community vibes.'}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-saveva-green shrink-0" />
                  <span>{language === 'es' ? 'Precios preferenciales con descuentos mensuales.' : 'Preferential monthly plans with special discounts.'}</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/stay-study"
                  className="inline-flex items-center space-x-2 bg-saveva-green hover:bg-saveva-green/90 text-white font-display font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:translate-x-1"
                >
                  <span>{t('stayStudyBtn', 'home')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CHOSEN TESTIMONIALS */}
      <section id="testimonials-section" className="py-20 bg-[#FDECE1]/40 dark:bg-saveva-blue transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-saveva-blue dark:text-white tracking-tight">
              {language === 'es' ? 'Lo que dicen de nosotros' : 'What they say about us'}
            </h2>
            <p className="text-sm font-mono uppercase tracking-widest text-saveva-orange mt-2">
              {language === 'es' ? 'La familia SAVEVA' : 'The SAVEVA Family'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-saveva-carddark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative">
              <span className="absolute top-4 right-6 text-6xl text-saveva-orange/10 font-serif leading-none">“</span>
              <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                {language === 'es' 
                  ? '“Llegué a Medellín sola por una semana y me terminé quedando un mes entero. El ambiente comunitario que tiene SAVEVA es de locos, hice amigos de Francia, Alemania y Colombia el primer día. Las camas son muy cómodas y el WiFi es súper rápido para trabajar.”' 
                  : '"I arrived in Medellin alone for a week and ended up staying a whole month. The community vibe at SAVEVA is crazy, I made friends from France, Germany, and Colombia on day one. The beds are super comfortable and the WiFi is fast for working."'}
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-full bg-saveva-cream flex items-center justify-center text-saveva-blue font-bold">SJ</div>
                <div>
                  <h4 className="font-bold text-sm text-saveva-blue dark:text-white">Sarah Jenkins</h4>
                  <p className="text-xs text-slate-400">Digital Nomad, USA</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-saveva-carddark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative">
              <span className="absolute top-4 right-6 text-6xl text-saveva-orange/10 font-serif leading-none">“</span>
              <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                {language === 'es' 
                  ? '“El mejor hostal en Laureles. Un lugar muy limpio, con cocina amplia, asados brutales los sábados y un equipo que te ayuda con todo lo que necesitas en Medellín. La ubicación es perfecta, cerca de restaurantes, parques y la estación de metro.”' 
                  : '"Best hostel in Laureles. A very clean place with a spacious kitchen, amazing BBQs on Saturdays, and a team that helps you with everything you need in Medellin. Perfect location close to restaurants, parks, and the metro."'}
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-full bg-saveva-cream flex items-center justify-center text-saveva-blue font-bold">LM</div>
                <div>
                  <h4 className="font-bold text-sm text-saveva-blue dark:text-white">Lucas Moreau</h4>
                  <p className="text-xs text-slate-400">Backpacker, France</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-saveva-carddark p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative">
              <span className="absolute top-4 right-6 text-6xl text-saveva-orange/10 font-serif leading-none">“</span>
              <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                {language === 'es' 
                  ? '“Alquilamos un apartaestudio completo con mi grupo de atletismo y fue increíble. Tuvimos nuestra propia entrada privada y cocinas, pero pudimos integrarnos a los asados y juegos del hostal. Súper recomendado para delegaciones deportivas por su cercanía al Estadio.”' 
                  : '"We rented a full studio apartment with my track and field group and it was awesome. We had our own private entrance and kitchens, but still enjoyed the hostel BBQs and game nights. Highly recommended for sports delegations!"'}
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-full bg-saveva-cream flex items-center justify-center text-saveva-blue font-bold">MA</div>
                <div>
                  <h4 className="font-bold text-sm text-saveva-blue dark:text-white">Mateo Gómez</h4>
                  <p className="text-xs text-slate-400">Deportista, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM COMMUNITY BAND */}
      <section id="instagram-section" className="py-16 bg-[#FDF5EC] dark:bg-saveva-blue/40 border-t border-b border-[#0D2B6B]/10 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-saveva-blue dark:text-white mb-2">
            {t('instagramTitle', 'home')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 font-mono">
            {t('instagramSub', 'home')} <span className="text-saveva-orange font-bold">@hostalsaveva</span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => {
              return (
                <a
                  key={i}
                  href="https://instagram.com/hostalsaveva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block aspect-square rounded-2xl overflow-hidden shadow-sm"
                >
                  <Image
                    src={['/hero-saveva-house.jpg', '/tour-cold-forest.jpg', '/rooms/20240831_125720-1024x576.jpeg', '/tour-waterfall.jpg', '/rooms/Habitacion-17-Casa-Amarilla_-1024x576.jpeg', '/rooms/20240831_150457-1024x576.jpeg'][i - 1]}
                    alt={`SAVEVA Instagram feed ${i}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-saveva-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col items-center justify-center text-white">
                    <svg className="w-8 h-8 text-white mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="text-xs font-mono font-bold">@hostalsaveva</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BIG CTA BOOKING BANNER */}
      <section id="booking-cta-section" className="py-24 relative overflow-hidden bg-gradient-to-br from-saveva-blue to-[#07193f] text-white">
        {/* Decorative hummingbird silhouette watermarks */}
        <div className="absolute top-[-50px] left-[-50px] w-80 h-80 opacity-5 pointer-events-none text-saveva-celeste">
          <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
            <path d="M12 28 C16 28 22 24 26 18 C30 12 30 6 28 4 C26 2 20 2 16 6 C12 10 10 18 12 28 Z" />
          </svg>
        </div>
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 opacity-10 pointer-events-none text-saveva-orange">
          <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
            <path d="M28 22 C34 22 42 30 46 38 C50 46 48 52 44 54 C40 56 34 52 30 44 C26 36 24 28 28 22 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            {t('bookingBannerTitle', 'home')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('bookingBannerSub', 'home')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservas"
              className="w-full sm:w-auto bg-saveva-orange hover:bg-saveva-orange/95 text-white font-display font-bold px-7 py-3.5 rounded-xl text-sm shadow-sm hover:shadow-md transition-all text-center flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{language === 'es' ? 'Ver Disponibilidad & Calendario' : 'View Availability & Calendar'}</span>
            </Link>
            <a
              href="https://wa.me/573332627268"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/30 bg-white/10 hover:bg-white/25 text-white font-display font-bold px-7 py-3.5 rounded-xl text-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current shrink-0 text-[#25D366]" viewBox="0 0 24 24">
                <path d="M12.003 21.003c-1.602 0-3.115-.413-4.432-1.135l-.317-.174-3.297.865.88-3.21-.192-.305a9.003 9.003 0 0 1-1.464-4.88c0-4.963 4.04-9.003 9.003-9.003 4.963 0 9.003 4.04 9.003 9.003 0 4.963-4.04 9.003-9.003 9.003zm0-19.003C6.486 2 2 6.486 2 12.003c0 1.83.493 3.548 1.353 5.034L2 22l5.127-1.344a9.96 9.96 0 0 0 4.876 1.347C17.516 22.003 22 17.517 22 12.003 22 6.486 17.516 2 12.003 2z" />
              </svg>
              <span>{t('contactWhatsApp', 'common')}</span>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Globe, MessageSquare } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, theme, toggleTheme, t } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on path change (handled via inline click handlers to avoid effect setstate)

  const navItems = [
    { name: t('home', 'nav'), path: '/' },
    { name: t('rooms', 'nav'), path: '/habitaciones' },
    { name: t('apartments', 'nav'), path: '/apartaestudios' },
    { name: t('stayStudy', 'nav'), path: '/stay-study' },
    { name: t('about', 'nav'), path: '/nosotros' },
    { name: t('experiences', 'nav'), path: '/experiencias' },
    { name: t('map', 'nav'), path: '/mapa' },
    { name: t('booking', 'nav'), path: '/reservas' },
    { name: t('contact', 'nav'), path: '/contacto' },
  ];

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 w-full z-40 py-3.5 shadow-md border-b border-slate-200/30 dark:border-white/10 bg-[#FDF5EC] dark:bg-saveva-blue transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-saveva-orange rounded-lg p-1">
            {/* Real SAVEVA full logo (icon + wordmark) - swaps for dark mode */}
            <div className="relative h-11 sm:h-12 w-[150px] sm:w-[170px] group-hover:scale-105 transition-transform">
              <Image
                src={theme === 'dark' ? '/saveva-logo-white.png' : '/saveva-logo-full.png'}
                alt="SAVEVA Hostal Medellín"
                fill
                className="object-contain object-left"
                sizes="170px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-saveva-orange ${
                    isActive
                      ? 'text-saveva-orange bg-saveva-orange/5 dark:bg-saveva-orange/10 font-black'
                      : 'text-saveva-blue dark:text-slate-100 hover:text-saveva-orange hover:bg-saveva-blue/5 dark:hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Actions: Theme, Lang, CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language toggle */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-saveva-blue/20 dark:border-white/10 hover:bg-saveva-blue/5 dark:hover:bg-white/10 text-sm font-bold text-saveva-blue dark:text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-saveva-orange"
              title="Toggle Language"
            >
              <Globe className="w-4 h-4 text-saveva-green" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-saveva-blue/20 dark:border-white/10 hover:bg-saveva-blue/5 dark:hover:bg-white/10 text-saveva-blue dark:text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-saveva-orange"
              title="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-saveva-blue" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400" />
              )}
            </button>

            {/* CTA Book Button */}
            <Link
              href="/reservas"
              className="bg-saveva-orange hover:bg-saveva-orange/95 text-white px-5 py-2.5 rounded-xl font-display font-bold text-sm shadow-sm hover:shadow-md transition-all active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-saveva-orange"
            >
              {t('bookNow', 'common')}
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Quick Language Toggle on Mobile */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="p-2.5 rounded-xl border border-transparent bg-saveva-blue/10 dark:bg-white/10 text-saveva-blue dark:text-white text-xs font-black shadow-sm transition-all hover:bg-saveva-blue/20 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-saveva-orange"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-transparent bg-saveva-blue text-white dark:bg-white dark:text-saveva-blue shadow-md transition-all hover:bg-saveva-blue/90 dark:hover:bg-white/90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-saveva-orange"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-80 max-w-full h-full bg-saveva-blue dark:bg-saveva-blue p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center">
                <div className="relative h-10 w-[140px]">
                  <Image
                    src="/saveva-logo-white.png"
                    alt="SAVEVA"
                    fill
                    className="object-contain object-left"
                    sizes="140px"
                  />
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-saveva-orange"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col space-y-2 py-6">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-saveva-orange/20 text-saveva-orange font-bold border-l-4 border-saveva-orange pl-3'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Settings and Actions */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            {/* Quick toggles */}
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-medium text-white/70">Theme / Tema</span>
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all focus:outline-none focus:ring-2 focus:ring-saveva-orange"
              >
                {theme === 'light' ? (
                  <>
                    <Sun className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-white">{language === 'es' ? 'Modo Claro' : 'Light Mode'}</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-saveva-celeste" />
                    <span className="text-xs font-bold text-white">{language === 'es' ? 'Modo Oscuro' : 'Dark Mode'}</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Contact Link */}
            <a
              href="https://wa.me/573332627268"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3.5 border border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-bold transition-all focus:outline-none"
            >
              <svg className="w-4 h-4 fill-current shrink-0 text-[#25D366]" viewBox="0 0 24 24">
                <path d="M12.003 21.003c-1.602 0-3.115-.413-4.432-1.135l-.317-.174-3.297.865.88-3.21-.192-.305a9.003 9.003 0 0 1-1.464-4.88c0-4.963 4.04-9.003 9.003-9.003 4.963 0 9.003 4.04 9.003 9.003 0 4.963-4.04 9.003-9.003 9.003zm0-19.003C6.486 2 2 6.486 2 12.003c0 1.83.493 3.548 1.353 5.034L2 22l5.127-1.344a9.96 9.96 0 0 0 4.876 1.347C17.516 22.003 22 17.517 22 12.003 22 6.486 17.516 2 12.003 2z" />
              </svg>
              <span>{language === 'es' ? 'Contacto WhatsApp' : 'WhatsApp Contact'}</span>
            </a>

            {/* Orange Main Booking CTA */}
            <Link
              href="/reservas"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full py-3.5 bg-saveva-orange hover:bg-saveva-orange/95 text-white rounded-xl text-sm font-display font-bold shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-saveva-orange"
            >
              {t('bookNow', 'common')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

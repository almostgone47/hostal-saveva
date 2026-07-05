'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Instagram, ArrowUpRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Presentation */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/saveva-logo-icon.png"
                  alt="Logo SAVEVA"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white">SAVEVA</span>
            </Link>
            <p className="text-sm text-slate-400">
              {t('heroSub', 'home')}
            </p>
            <p className="text-xs text-saveva-celeste font-mono uppercase tracking-wider">
              {t('designedFor', 'common')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              {t('nav', 'common')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-saveva-orange transition-colors flex items-center group">
                  <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {t('home', 'nav')}
                </Link>
              </li>
              <li>
                <Link href="/habitaciones" className="hover:text-saveva-orange transition-colors flex items-center group">
                  <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {t('rooms', 'nav')}
                </Link>
              </li>
              <li>
                <Link href="/apartaestudios" className="hover:text-saveva-orange transition-colors flex items-center group">
                  <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {t('apartments', 'nav')}
                </Link>
              </li>
              <li>
                <Link href="/stay-study" className="hover:text-saveva-orange transition-colors flex items-center group">
                  <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {t('stayStudy', 'nav')}
                </Link>
              </li>
            </ul>
          </div>

          {/* More Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              &nbsp;
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/nosotros" className="hover:text-saveva-orange transition-colors flex items-center group">
                  <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {t('about', 'nav')}
                </Link>
              </li>
              <li>
                <Link href="/experiencias" className="hover:text-saveva-orange transition-colors flex items-center group">
                  <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {t('experiences', 'nav')}
                </Link>
              </li>
              <li>
                <Link href="/reservas" className="hover:text-saveva-orange transition-colors flex items-center group">
                  <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {t('booking', 'nav')}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-saveva-orange transition-colors flex items-center group">
                  <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {t('contact', 'nav')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts Information */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              {t('contactInfo', 'contacto')}
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-saveva-green shrink-0 mt-0.5" />
                <span>Laureles Estadio, Medellín, Colombia</span>
              </li>
              <li>
                <a
                  href="https://wa.me/573332627268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-saveva-orange transition-colors"
                >
                  <Phone className="w-5 h-5 text-saveva-orange shrink-0" />
                  <span>+57 333 2627268</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-saveva-celeste shrink-0" />
                <span className="break-all">fundacion.saveva@gmail.com</span>
              </li>
              <li>
                <a
                  href="https://instagram.com/hostalsaveva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-saveva-orange transition-colors"
                >
                  <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
                  <span>@hostalsaveva</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} SAVEVA Hostal Medellín. {t('allRights', 'common')}
          </div>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/hostalsaveva"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://wa.me/573332627268"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

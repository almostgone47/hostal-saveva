'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useApp } from '@/context/AppContext';
import MainLayout from '@/components/MainLayout';
import { Mail, MapPin, Phone, Instagram, Send, MessageSquare, Sparkles } from 'lucide-react';

// Leaflet depende de `window`, así que el mapa se carga solo en el cliente.
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] rounded-2xl bg-slate-100 dark:bg-slate-900 animate-pulse flex items-center justify-center text-slate-400 text-sm">
      Cargando mapa...
    </div>
  ),
});

export default function ContactoPage() {
  const { t, language } = useApp();

  // State for contact form
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus(language === 'es' ? 'Por favor, ingresa tu mensaje.' : 'Please write a message.');
      return;
    }

    const compiledText = language === 'es'
      ? `¡Hola SAVEVA! 🐦 Tengo una consulta rápida:\n\n✉️ *Email:* ${email || 'No provisto'}\n💬 *Mensaje:* ${message}`
      : `Hi SAVEVA! 🐦 I have a quick inquiry:\n\n✉️ *Email:* ${email || 'Not provided'}\n💬 *Message:* ${message}`;

    const phoneNumber = '573332627268';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(compiledText)}`, '_blank');
    setStatus('');
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setStatus(language === 'es' ? 'Por favor, completa el correo y el mensaje.' : 'Please fill in both email and message fields.');
      return;
    }

    const subject = encodeURIComponent('Consulta Web SAVEVA Hostal');
    const body = encodeURIComponent(`Hola SAVEVA!\n\nConsulta proveniente de: ${email}\n\nMensaje:\n${message}`);
    window.open(`mailto:fundacion.saveva@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setStatus('');
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display font-black text-3xl sm:text-5xl text-saveva-blue dark:text-white tracking-tight mb-4">
            {t('title', 'contacto')}
          </h1>
          <div className="w-16 h-1 bg-saveva-orange mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {t('sub', 'contacto')}
          </p>
        </div>

        {/* Form and Map Splitting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-20">
          
          {/* Left Column: Coordinates & Interactive Form (Span 6) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Contact details list */}
            <div className="bg-white dark:bg-saveva-carddark p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg space-y-4">
              <h2 className="font-display font-black text-lg text-saveva-blue dark:text-white mb-2">
                {t('contactInfo', 'contacto')}
              </h2>
              
              <div className="grid grid-cols-1 gap-4 text-sm">
                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-saveva-green shrink-0 mt-0.5" />
                  <span>Laureles Estadio, Medellín, Colombia</span>
                </div>
                
                <a
                  href="https://wa.me/573332627268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-slate-700 dark:text-slate-300 hover:text-saveva-orange transition-colors"
                >
                  <Phone className="w-5 h-5 text-saveva-orange shrink-0 mt-0.5" />
                  <span className="font-mono font-bold">+57 333 2627268</span>
                </a>

                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <Mail className="w-5 h-5 text-saveva-celeste shrink-0 mt-0.5" />
                  <span className="break-all">fundacion.saveva@gmail.com</span>
                </div>

                <a
                  href="https://instagram.com/hostalsaveva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-slate-700 dark:text-slate-300 hover:text-saveva-orange transition-colors"
                >
                  <Instagram className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                  <span>@hostalsaveva</span>
                </a>
              </div>
            </div>

            {/* Quick message form */}
            <form className="bg-white dark:bg-saveva-carddark p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg space-y-5">
              <h3 className="font-display font-bold text-base text-saveva-blue dark:text-white flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-saveva-orange" />
                <span>{t('formTitle', 'contacto')}</span>
              </h3>

              {status && (
                <div className="bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-400 p-3 rounded-xl border border-amber-100 dark:border-amber-900/30 text-xs">
                  {status}
                </div>
              )}

              {/* Email field */}
              <div className="space-y-1">
                <label htmlFor="contact-email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t('labelEmail', 'contacto')}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-saveva-orange"
                />
              </div>

              {/* Message field */}
              <div className="space-y-1">
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t('labelMessage', 'contacto')} *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('placeholderMessage', 'contacto')}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-saveva-orange resize-none"
                ></textarea>
              </div>

              {/* Dual Submission buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="bg-saveva-orange hover:bg-saveva-orange/95 text-white font-display font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center space-x-1.5 transition-colors shadow-sm focus:outline-none"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>{t('btnWhatsApp', 'contacto')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="border border-saveva-blue hover:bg-saveva-blue/5 text-saveva-blue dark:border-white/20 dark:text-white dark:hover:bg-white/10 font-display font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center space-x-1.5 transition-colors focus:outline-none"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>{t('btnEmail', 'contacto')}</span>
                </button>
              </div>

            </form>

          </div>

          {/* Right Column: Embedded Map of Laureles Estadio, Medellín (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-saveva-carddark p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg space-y-4">
              <h2 className="font-display font-black text-lg text-saveva-blue dark:text-white">
                {t('locationTitle', 'contacto')}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t('locationDesc', 'contacto')}
              </p>

              {/* Mapa interactivo (Leaflet + OpenStreetMap) */}
              <InteractiveMap height={340} />
            </div>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export default function WhatsAppFloatingButton() {
  const pathname = usePathname();
  const { language } = useApp();
  const getWhatsAppLink = () => {
    const phoneNumber = '573332627268';
    let text = '';

    if (language === 'es') {
      switch (pathname) {
        case '/habitaciones':
          text = '¡Hola SAVEVA! 🐦 Me interesa cotizar una de sus habitaciones.';
          break;
        case '/apartaestudios':
          text = '¡Hola SAVEVA! 🐦 Quisiera consultar sobre el alquiler de apartaestudios para grupos.';
          break;
        case '/stay-study':
          text = '¡Hola SAVEVA! 🐦 Me interesa conocer los planes mensuales y semanales de Stay & Study.';
          break;
        case '/experiencias':
          text = '¡Hola SAVEVA! 🐦 Quiero saber más de las actividades y salidas grupales en Medellín.';
          break;
        case '/nosotros':
          text = '¡Hola SAVEVA! 🐦 Me encanta su historia y quiero ponerme en contacto.';
          break;
        case '/reservas':
          text = '¡Hola SAVEVA! 🐦 Estoy en el sitio web y quiero consultar disponibilidad de fechas.';
          break;
        case '/contacto':
          text = '¡Hola SAVEVA! 🐦 Tengo una pregunta rápida sobre el hostal.';
          break;
        default:
          text = '¡Hola SAVEVA! 🐦 Vi su sitio web y quiero información sobre el hostal en Medellín.';
      }
    } else {
      switch (pathname) {
        case '/habitaciones':
          text = "Hi SAVEVA! 🐦 I'm interested in booking one of your rooms.";
          break;
        case '/apartaestudios':
          text = "Hi SAVEVA! 🐦 I'd like to check apartment availability for a group stay.";
          break;
        case '/stay-study':
          text = "Hi SAVEVA! 🐦 I'm interested in the long-term Stay & Study plans.";
          break;
        case '/experiencias':
          text = "Hi SAVEVA! 🐦 I'd love to know more about the neighborhood events and Medellin tours.";
          break;
        case '/nosotros':
          text = "Hi SAVEVA! 🐦 I'd like to get in touch with the hostel team.";
          break;
        case '/reservas':
          text = 'Hi SAVEVA! 🐦 I am on the website and want to check available dates for a booking.';
          break;
        case '/contacto':
          text = 'Hi SAVEVA! 🐦 I have a quick question about the hostel.';
          break;
        default:
          text = 'Hi SAVEVA! 🐦 I saw your website and want to ask some details about the hostel.';
      }
    }

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <a
      id="whatsapp-floating-button"
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
      aria-label="Contact SAVEVA via WhatsApp"
    >
      {/* WhatsApp brand icon (Simple Icons) */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export default function WhatsAppFloatingButton() {
  const pathname = usePathname();
  const { language } = useApp();
  const [visible, setVisible] = useState(false);

  const lastScrollYRef = useRef(0);
  const accumulatedDownRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 300) {
        setVisible(false);
        accumulatedDownRef.current = 0;
      } else {
        const diff = currentScrollY - lastScrollYRef.current;

        if (diff > 0) {
          // Scrolling down
          accumulatedDownRef.current += diff;
          if (accumulatedDownRef.current > 300) {
            setVisible(false);
          }
        } else if (diff < -10) {
          // Scrolling up slightly
          accumulatedDownRef.current = 0;
          setVisible(true);
        }

        // Handle stop scrolling timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          if (window.scrollY >= 300) {
            setVisible(true);
            accumulatedDownRef.current = 0;
          }
        }, 800);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    if (window.scrollY >= 300) {
      Promise.resolve().then(() => {
        setVisible(true);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

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
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg transition-all duration-300 transform group focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 ${
        visible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-75 translate-y-16 pointer-events-none'
      }`}
      aria-label="Contact SAVEVA via WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:animate-none"></span>
      
      {/* Real brand WhatsApp SVG icon */}
      <svg
        className="w-6 h-6 fill-current relative z-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.01 14.122.986 11.998.986 6.562.986 2.14 5.358 2.136 10.79c-.001 1.733.473 3.424 1.371 4.908l-.1.171L2.392 21.3l5.74-1.488.169.1c1.5.892 3.01 1.242 4.346 1.242zm11.367-7.63c-.301-.15-1.781-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.019-.463.13-.612.134-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.3-.8 1.902-.8 4.67 0 2.775 2.025 5.45 2.3 5.825.275.375 3.984 6.083 9.661 8.532 1.35.582 2.402.93 3.22 1.192 1.355.43 2.589.369 3.563.224 1.087-.162 2.781-.137 3.181-1.287.3-.879.3-1.637.2-1.787-.075-.15-.275-.225-.575-.375z" />
      </svg>
    </a>
  );
}

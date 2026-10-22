'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import NatureParticles from './NatureParticles';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-white text-[#2E2E2E] flex flex-col justify-between overflow-x-hidden">
      {/* Nature Particles background effect */}
      <NatureParticles />

      {/* Main Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow pt-24 pb-12 relative z-20">
        {children}
      </main>

      {/* Floating WhatsApp button */}
      <WhatsAppFloatingButton />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

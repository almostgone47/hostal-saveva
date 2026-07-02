'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  type: 'leaf' | 'petal' | 'colibri';
  left: number;
  size: number;
  delay: number;
  duration: number;
  swayDelay: number;
}

export default function NatureParticles() {
  const [particles] = useState<Particle[]>(() => {
    // Generate a fixed, low number of particles to ensure high performance on older devices
    const list: Particle[] = [];
    const types: ('leaf' | 'petal' | 'colibri')[] = ['leaf', 'petal', 'leaf', 'colibri', 'petal', 'leaf', 'leaf', 'petal'];
    
    for (let i = 0; i < 10; i++) {
      list.push({
        id: i,
        type: types[i % types.length],
        left: Math.random() * 90 + 5, // 5% to 95%
        size: Math.random() * 16 + 14, // 14px to 30px
        delay: Math.random() * 8, // 0s to 8s
        duration: Math.random() * 12 + 18, // 18s to 30s
        swayDelay: Math.random() * 5,
      });
    }
    return list;
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 select-none">
      {particles.map((p) => {
        return (
          <div
            key={p.id}
            className="absolute bottom-[-50px] animate-float leaf-particle text-saveva-green/20 dark:text-saveva-green/10"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              transform: 'translate3d(0, 0, 0)', // Force GPU Acceleration
            }}
          >
            {p.type === 'leaf' && (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-saveva-green dark:text-saveva-green/50 opacity-60">
                <path d="M17 8C12 8 8.5 12.5 8 18C10 18.5 15.5 16 17 11C17.5 9.5 17.5 8.5 17 8Z" />
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM13 18C9.5 17.5 7 14 7 11C8.5 11 11.5 12.5 12.5 15.5C13 16.5 13 17.5 13 18Z" />
              </svg>
            )}
            {p.type === 'petal' && (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-saveva-orange dark:text-saveva-orange/40 opacity-40 animate-sway">
                <path d="M12 2C10.5 6.5 6.5 10.5 2 12C6.5 13.5 10.5 17.5 12 22C13.5 17.5 17.5 13.5 22 12C17.5 10.5 13.5 6.5 12 2Z" />
              </svg>
            )}
            {p.type === 'colibri' && (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-saveva-celeste dark:text-saveva-celeste/40 opacity-50 animate-float-reverse">
                <path d="M8 5C7 5 6 6 5 8C4.5 9 4.5 10.5 5 11C6.5 12.5 8 11.5 9.5 9.5C10.5 8 10 6 8 5Z" />
                <path d="M19 7C16 7 14 9.5 12.5 12.5L11 15C10 16.5 9.5 18 10 19C10.5 20 12 19.5 13.5 18L16.5 14.5C19.5 12.5 20 9.5 19 7Z" />
                <path d="M14 6C13.5 4.5 12 4 10.5 4.5C9 5 8.5 6.5 9 8C10.5 8.5 12 8 13.5 7C14 6.5 14 6.2 14 6Z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}

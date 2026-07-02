import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SAVEVA Hostal | Medellín - Conecta, Explora, Vive',
  description: 'Naturaleza, aventura y comunidad en el corazón de Laureles, Medellín. Hostal para aventureros, estudiantes y nómadas digitales.',
  keywords: 'hostal medellin, hostel medellin, stay medellin, laureles hostel, saveva, saveva hostal, stay study medellin, apartaestudios medellin',
  openGraph: {
    title: 'SAVEVA Hostal | Medellín',
    description: 'Naturaleza, aventura y comunidad en el corazón de Laureles, Medellín. Hostal para aventureros, estudiantes y nómadas digitales.',
    url: 'https://wa.me/573332627268',
    siteName: 'SAVEVA Hostal',
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

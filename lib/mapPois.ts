// Puntos de interés para el mapa interactivo de SAVEVA Hostal.
// Coordenadas del hostal y de la Estación Estadio / Estadio Atanasio Girardot
// están verificadas contra fuentes oficiales (Wikipedia/Wikidata).
// Las marcadas como "aproximada" cubren una zona/calle y pueden ajustarse
// con una dirección exacta si la tienes a mano.

export type PoiCategory = 'hostal' | 'transporte' | 'deporte' | 'calle' | 'comercial';

export interface Poi {
  id: string;
  name: string;
  category: PoiCategory;
  lat: number;
  lng: number;
  description: string;
  precision: 'exacta' | 'aproximada';
  /** Si es true, se traza una ruta caminando desde el hostal hasta este punto */
  drawRoute?: boolean;
}

// SAVEVA Hostal — Cl. 48D #68-46, Laureles - Estadio, Medellín
export const HOSTAL: Poi = {
  id: 'hostal-saveva',
  name: 'SAVEVA Hostal',
  category: 'hostal',
  lat: 6.255909,
  lng: -75.594739,
  description: 'Cl. 48D #68-46, Laureles - Estadio, Medellín. Tu casa en el corazón de Laureles.',
  precision: 'exacta',
};

export const POIS: Poi[] = [
  {
    id: 'metro-estadio',
    name: 'Estación Metro Estadio (Línea B)',
    category: 'transporte',
    lat: 6.253611,
    lng: -75.584722,
    description: 'La estación de metro más cercana al hostal. Conecta con toda la ciudad por la Línea B.',
    precision: 'exacta',
    drawRoute: true,
  },
  {
    id: 'unidad-deportiva',
    name: 'Unidad Deportiva Atanasio Girardot',
    category: 'deporte',
    lat: 6.2568,
    lng: -75.590172,
    description: 'Estadio Atanasio Girardot, coliseos y polideportivo. Hogar de Nacional e Independiente Medellín.',
    precision: 'exacta',
    drawRoute: true,
  },
  {
    id: 'calle-70',
    name: 'Carrera 70 — "La Setenta"',
    category: 'calle',
    lat: 6.2503,
    lng: -75.5904,
    description: 'La zona de bares, restaurantes y rumba más famosa de Laureles.',
    precision: 'aproximada',
  },
  {
    id: 'unicentro',
    name: 'C.C. Unicentro Medellín',
    category: 'comercial',
    lat: 6.2418,
    lng: -75.5878,
    description: 'Centro comercial cerca de la UPB, sobre la Av. Bolivariana (Av. 33).',
    precision: 'aproximada',
    drawRoute: true,
  },
];

export const CATEGORY_LABELS: Record<PoiCategory, { es: string; en: string; color: string }> = {
  hostal: { es: 'Hostal', en: 'Hostel', color: '#FF7A00' },
  transporte: { es: 'Transporte', en: 'Transport', color: '#3FA9F5' },
  deporte: { es: 'Deporte', en: 'Sports', color: '#2E7D32' },
  calle: { es: 'Vida nocturna', en: 'Nightlife', color: '#B03A9B' },
  comercial: { es: 'Comercio', en: 'Shopping', color: '#0D2B6B' },
};

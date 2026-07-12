'use client';

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, Home, MapPin, X, LocateFixed, Loader2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { HOSTAL, POIS, CATEGORY_LABELS, PoiCategory } from '@/lib/mapPois';

// ---------- Iconos personalizados (divIcon = HTML/CSS, no requiere imágenes externas) ----------

function houseIcon() {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        width:44px;height:44px;
        display:flex;align-items:center;justify-content:center;
        background:#FF7A00;
        border:3px solid #ffffff;
        border-radius:14px 14px 14px 2px;
        box-shadow:0 4px 10px rgba(0,0,0,0.35);
        transform:rotate(0deg);
        font-size:20px;
      ">🏠</div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 40],
    popupAnchor: [0, -38],
  });
}

function poiIcon(color: string) {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        width:30px;height:30px;
        display:flex;align-items:center;justify-content:center;
        background:${color};
        border:2.5px solid #ffffff;
        border-radius:50% 50% 50% 0;
        transform:rotate(45deg);
        box-shadow:0 3px 8px rgba(0,0,0,0.35);
      "></div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 28],
    popupAnchor: [0, -26],
  });
}

function userIcon() {
  return L.divIcon({
    className: '',
    html: `
      <div style="position:relative;width:22px;height:22px;">
        <div style="
          position:absolute;inset:-10px;
          background:rgba(63,169,245,0.25);
          border-radius:50%;
          animation:saveva-pulse 1.8s ease-out infinite;
        "></div>
        <div style="
          width:22px;height:22px;border-radius:50%;
          background:#3FA9F5;border:3px solid #ffffff;
          box-shadow:0 2px 8px rgba(0,0,0,0.4);
        "></div>
      </div>
      <style>
        @keyframes saveva-pulse {
          0% { transform: scale(0.4); opacity: 0.9; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      </style>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

// ---------- Utilidades de ruteo (OSRM público, caminando) ----------

type LatLng = [number, number];

async function fetchWalkingRoute(from: LatLng, to: LatLng): Promise<LatLng[] | null> {
  try {
    const url = `https://router.project-osrm.org/route/v1/foot/${from[1]},${from[0]};${to[1]},${to[0]}?overview=full&geometries=geojson`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const coords = data?.routes?.[0]?.geometry?.coordinates;
    if (!Array.isArray(coords)) return null;
    // GeoJSON viene como [lng, lat] -> lo invertimos a [lat, lng] para Leaflet
    return coords.map((c: [number, number]) => [c[1], c[0]] as LatLng);
  } catch {
    return null;
  }
}

function RecenterOnUser({ position }: { position: LatLng | null }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 15, { duration: 1.2 });
    }
  }, [position, map]);
  return null;
}

// ---------- Componente principal ----------

export default function InteractiveMap({ height = 480 }: { height?: number }) {
  const { language } = useApp();
  const [activeFilters, setActiveFilters] = useState<Set<PoiCategory>>(
    new Set(['transporte', 'deporte', 'calle', 'comercial'])
  );
  const [userPosition, setUserPosition] = useState<LatLng | null>(null);
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState<string | null>(null);
  const [routes, setRoutes] = useState<Record<string, LatLng[]>>({});

  const hostalPos: LatLng = [HOSTAL.lat, HOSTAL.lng];

  const visiblePois = useMemo(
    () => POIS.filter((p) => activeFilters.has(p.category)),
    [activeFilters]
  );

  const toggleFilter = (cat: PoiCategory) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  // Cargar rutas (a pie) desde el hostal hacia los POIs marcados con drawRoute
  useEffect(() => {
    const toLoad = POIS.filter((p) => p.drawRoute && activeFilters.has(p.category) && !routes[p.id]);
    if (toLoad.length === 0) return;
    toLoad.forEach(async (poi) => {
      const line = await fetchWalkingRoute(hostalPos, [poi.lat, poi.lng]);
      setRoutes((prev) => ({
        ...prev,
        [poi.id]: line ?? [hostalPos, [poi.lat, poi.lng]], // fallback: línea recta si el ruteo falla
      }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters]);

  const handleLocate = useCallback(() => {
    setLocError(null);
    if (!navigator.geolocation) {
      setLocError(language === 'es' ? 'Tu navegador no soporta geolocalización.' : 'Your browser does not support geolocation.');
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPosition([pos.coords.latitude, pos.coords.longitude]);
        setLocating(false);
      },
      () => {
        setLocError(
          language === 'es'
            ? 'No pudimos acceder a tu ubicación. Revisa los permisos del navegador.'
            : "We couldn't access your location. Check your browser permissions."
        );
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, [language]);

  const gmapsDirUrl = (lat: number, lng: number) =>
    `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="space-y-4">
      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(CATEGORY_LABELS) as PoiCategory[])
          .filter((c) => c !== 'hostal')
          .map((cat) => {
            const label = CATEGORY_LABELS[cat];
            const isActive = activeFilters.has(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => toggleFilter(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                  isActive
                    ? 'text-white border-transparent shadow-sm'
                    : 'bg-white dark:bg-saveva-carddark text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800'
                }`}
                style={isActive ? { backgroundColor: label.color } : undefined}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: isActive ? '#fff' : label.color }}
                />
                {label[language]}
              </button>
            );
          })}

        <button
          type="button"
          onClick={handleLocate}
          disabled={locating}
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-saveva-blue dark:bg-white text-white dark:text-saveva-blue border border-transparent shadow-sm hover:opacity-90 transition-all disabled:opacity-60"
        >
          {locating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <LocateFixed className="w-3.5 h-3.5" />}
          {language === 'es' ? 'Mi ubicación' : 'My location'}
        </button>
      </div>

      {locError && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <X className="w-3.5 h-3.5" /> {locError}
        </p>
      )}

      {/* Mapa */}
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-inner border border-slate-100 dark:border-slate-800"
        style={{ height }}
      >
        <MapContainer
          center={hostalPos}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marcador del hostal — la "casita" */}
          <Marker position={hostalPos} icon={houseIcon()}>
            <Popup>
              <div className="text-sm space-y-1 min-w-[180px]">
                <p className="font-black text-saveva-blue flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" /> {HOSTAL.name}
                </p>
                <p className="text-slate-600 text-xs">{HOSTAL.description}</p>
              </div>
            </Popup>
          </Marker>

          {/* POIs filtrados */}
          {visiblePois.map((poi) => (
            <Marker key={poi.id} position={[poi.lat, poi.lng]} icon={poiIcon(CATEGORY_LABELS[poi.category].color)}>
              <Popup>
                <div className="text-sm space-y-1.5 min-w-[190px]">
                  <p className="font-black text-saveva-blue flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {poi.name}
                  </p>
                  <p className="text-slate-600 text-xs">{poi.description}</p>
                  {poi.precision === 'aproximada' && (
                    <p className="text-[10px] text-slate-400 italic">
                      {language === 'es' ? 'Ubicación aproximada' : 'Approximate location'}
                    </p>
                  )}
                  <a
                    href={gmapsDirUrl(poi.lat, poi.lng)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-saveva-orange hover:underline"
                  >
                    <Navigation className="w-3 h-3" />
                    {language === 'es' ? 'Cómo llegar' : 'Get directions'}
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Rutas caminando desde el hostal */}
          {visiblePois
            .filter((p) => p.drawRoute && routes[p.id])
            .map((p) => (
              <Polyline
                key={`route-${p.id}`}
                positions={routes[p.id]}
                pathOptions={{ color: CATEGORY_LABELS[p.category].color, weight: 4, opacity: 0.8, dashArray: '1 8' }}
              />
            ))}

          {/* Ubicación del viajero */}
          {userPosition && (
            <Marker position={userPosition} icon={userIcon()}>
              <Popup>{language === 'es' ? 'Estás aquí' : "You're here"}</Popup>
            </Marker>
          )}
          <RecenterOnUser position={userPosition} />
        </MapContainer>
      </div>

      <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center">
        {language === 'es'
          ? 'Mapa © OpenStreetMap. Rutas caminando calculadas con OSRM.'
          : 'Map © OpenStreetMap. Walking routes calculated with OSRM.'}
      </p>
    </div>
  );
}

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/* ── Fix Leaflet default marker icon missing in bundlers ── */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

/* Custom cyan marker */
const createCustomIcon = (color = '#06b6d4') => {
  return L.divIcon({
    className: 'custom-map-marker',
    html: `
      <div style="
        width: 28px; height: 28px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      "></div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -30],
  });
};

/* ── Auto-fit map bounds to markers ── */
const FitBounds = ({ markers }) => {
  const map = useMap();
  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(m => [m.lat, m.lng]));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 10 });
    }
  }, [markers, map]);
  return null;
};

const InteractiveMap = ({ markers = [], center = [20.5937, 78.9629], zoom = 5, height = '400px' }) => {
  const icon = createCustomIcon('#06b6d4');
  const gemIcon = createCustomIcon('#f97316');

  if (markers.length === 0) {
    return (
      <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height }}>
        <div className="w-full h-full flex items-center justify-center bg-white/5 text-gray-500">
          <p className="text-sm">No map data available for this location</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl" style={{ height }}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <FitBounds markers={markers} />
        {markers.map((marker, idx) => (
          <Marker
            key={`${marker.name}-${idx}`}
            position={[marker.lat, marker.lng]}
            icon={marker.isGem ? gemIcon : icon}
          >
            <Popup>
              <div className="text-center min-w-[140px]">
                <strong className="text-sm block mb-1">{marker.name}</strong>
                {marker.location && (
                  <span className="text-xs text-gray-500 block">{marker.location}</span>
                )}
                {marker.category && (
                  <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 uppercase font-bold">
                    {marker.category}
                  </span>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;

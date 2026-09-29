import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import { Utensils, Tent, MapPin, Landmark } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';

const locations = [
  { id: 1, name: "Puente de Colores", pos: [4.402838, -74.386298], cat: "places", desc: "Puente peatonal emblemático." },
  { id: 2, name: "Monumento al Campesino", pos: [4.403070, -74.387936], cat: "places", desc: "Homenaje a la tradición cafetera de la región." },
  { id: 3, name: "Iglesia María Auxiliadora", pos: [4.403663, -74.387194], cat: "places", desc: "Hermosa arquitectura y vitrales." },
  { id: 4, name: "Coliseo Cubierto", pos: [4.402481, -74.384707], cat: "places", desc: "Escenario deportivo principal." },
  { id: 5, name: "URQU Glamping", pos: [4.383613, -74.418405], cat: "stay", desc: "Hospedaje ecológico en conexión con la naturaleza." },
  { id: 6, name: "Club El Bosque", pos: [4.374073, -74.405447], cat: "places", desc: "Centro de esparcimiento y descanso." },
  { id: 7, name: "Rancho Mi Tenanpa", pos: [4.387854, -74.406223], cat: "food", desc: "Sabores tradicionales y ambiente campestre." },
  { id: 8, name: "Estadio Silvania", pos: [4.387550, -74.401068], cat: "places", desc: "Cancha principal de fútbol municipal." },
  { id: 9, name: "Restaurante Embajada Paisa", pos: [4.403410, -74.383975], cat: "food", desc: "Especialidades de la cocina tradicional paisa." },
  { id: 10, name: "Parque de la Boca", pos: [4.404685, -74.387229], cat: "places", desc: "Lugar de encuentro y descanso." },
  { id: 11, name: "Villa Olímpica", pos: [4.405511, -74.384879], cat: "places", desc: "Complejo deportivo y recreativo." },
  { id: 12, name: "Restaurante Choriloco", pos: [4.408055, -74.386237], cat: "food", desc: "Reconocido por sus deliciosos chorizos y comida rápida." },
  { id: 13, name: "Mirador El Sol", pos: [4.406510, -74.392320], cat: "places", desc: "Mirador panorámico de Silvania." },
  { id: 14, name: "Parque El Progreso", pos: [4.402377, -74.386461], cat: "places", desc: "Parque céntrico ideal para la familia." },
  { id: 15, name: "Coliseo de Ferias", pos: [4.402593, -74.382835], cat: "places", desc: "Lugar principal para ferias y eventos municipales." },
  { id: 16, name: "Mirador El Perezoso", pos: [4.402774, -74.383438], cat: "places", desc: "Punto de observación pintoresco." },
  { id: 17, name: "Iglesia de Los Puentes", pos: [4.399135, -74.383555], cat: "places", desc: "Iglesia emblemática del sector." },
  { id: 18, name: "Posada Bromelias", pos: [4.399039, -74.384121], cat: "stay", desc: "Alojamiento confortable y acogedor." },
  { id: 19, name: "Quebrada Las Lajas", pos: [4.425210, -74.365112], cat: "places", desc: "Atracción natural con aguas cristalinas." },
  { id: 20, name: "Restaurante Castillo Azul", pos: [4.467885, -74.383571], cat: "food", desc: "Experiencia culinaria única en Subia." },
  { id: 21, name: "Iglesia Subia", pos: [4.469385, -74.385275], cat: "places", desc: "Centro religioso del corregimiento de Subia." },
  { id: 22, name: "Lajas de Subia", pos: [4.476619, -74.399063], cat: "places", desc: "Formaciones naturales y paisajes increíbles." }
];

const createCustomIcon = (category) => {
  let iconContent;
  let colorClass = '';

  switch (category) {
    case 'food':
      iconContent = renderToString(<Utensils size={18} color="#fff" />);
      colorClass = 'blip-orange';
      break;
    case 'stay':
      iconContent = renderToString(<Tent size={18} color="#fff" />);
      colorClass = 'blip-blue';
      break;
    case 'places':
    default:
      iconContent = renderToString(<Landmark size={18} color="#fff" />);
      colorClass = 'blip-yellow';
      break;
  }

  const html = `
    <div class="gta-blip ${colorClass}">
      ${iconContent}
    </div>
  `;

  return L.divIcon({
    html,
    className: 'custom-leaflet-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

const MapPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const position = [4.4036, -74.3875]; // Center of Silvania

  const filteredLocations = activeCategory === 'all' ? locations : locations.filter(loc => loc.cat === activeCategory);

  return (
    <div className="page-fade-in map-page">
      <div className="map-page-header">
        <h1 className="section-title">INTERACTIVE MAP</h1>
        <p className="subtitle">Discover stores, restaurants, glampings, and real points of interest.</p>
        
        <div className="map-filters">
          <button className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>ALL</button>
          <button className={`filter-btn ${activeCategory === 'places' ? 'active' : ''}`} onClick={() => setActiveCategory('places')}>PLACES</button>
          <button className={`filter-btn ${activeCategory === 'food' ? 'active' : ''}`} onClick={() => setActiveCategory('food')}>FLAVORS</button>
          <button className={`filter-btn ${activeCategory === 'stay' ? 'active' : ''}`} onClick={() => setActiveCategory('stay')}>GLAMPINGS</button>
        </div>
      </div>

      <div className="full-map-container">
        <MapContainer center={position} zoom={14} scrollWheelZoom={true} className="leaflet-full-map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredLocations.map(loc => (
            <Marker position={loc.pos} key={loc.id} icon={createCustomIcon(loc.cat)}>
              <Popup className="custom-popup">
                <div className="popup-content">
                  <h3>{loc.name}</h3>
                  <p>{loc.desc}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;

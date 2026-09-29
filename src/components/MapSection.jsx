import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapSection.css';

// Fix for Leaflet's default icon missing issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Silvania coordinates
  const position = [4.403, -74.387];

  const locations = [
    { id: 1, name: "Plaza de los Fundadores", pos: [4.404, -74.386], cat: "places" },
    { id: 2, name: "Hacienda El Chocho", pos: [4.410, -74.380], cat: "history" },
    { id: 3, name: "Restaurante Típico 'La Moka'", pos: [4.401, -74.390], cat: "food" },
    { id: 4, name: "Glamping Silvania Eco", pos: [4.390, -74.395], cat: "stay" },
    { id: 5, name: "Los Puentes", pos: [4.408, -74.384], cat: "places" }
  ];

  const filteredLocations = activeCategory === 'all' ? locations : locations.filter(loc => loc.cat === activeCategory);

  return (
    <section className="map-section" id="map">
      <div className="map-header">
        <h2 className="section-title">INTERACTIVE MAP</h2>
        <p className="subtitle">Discover stores, restaurants, glampings, and points of interest.</p>
        
        <div className="map-filters">
          <button className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All</button>
          <button className={`filter-btn ${activeCategory === 'places' ? 'active' : ''}`} onClick={() => setActiveCategory('places')}>Places</button>
          <button className={`filter-btn ${activeCategory === 'food' ? 'active' : ''}`} onClick={() => setActiveCategory('food')}>Flavors</button>
          <button className={`filter-btn ${activeCategory === 'stay' ? 'active' : ''}`} onClick={() => setActiveCategory('stay')}>Glampings</button>
        </div>
      </div>

      <div className="map-container-wrapper">
        <MapContainer center={position} zoom={14} scrollWheelZoom={false} className="leaflet-map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredLocations.map(loc => (
            <Marker position={loc.pos} key={loc.id}>
              <Popup>
                <strong style={{ fontFamily: 'var(--font-heading)' }}>{loc.name}</strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default MapSection;

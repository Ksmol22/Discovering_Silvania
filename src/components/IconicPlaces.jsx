import React, { useState } from 'react';
import { X } from 'lucide-react';
import './IconicPlaces.css';

import imgParque from '../assets/Parque de los fundadores.jpg';
import imgHacienda from '../assets/Hacienda el chocho.jpg';
import imgAlcaldia from '../assets/Alcaldia Municipal.jpg';
import imgPuentes from '../assets/Iglesia los puentes.jpg';
import imgIglesia from '../assets/Iglesia Principal.jpg';
import imgCampesino from '../assets/campesino silvanence.jpeg';
import imgPetroglifos from '../assets/Petroglifos Ancestrales.jpg';
import imgVirgen from '../assets/alto de la virgen.webp';

const places = [
  {
    id: 1,
    number: "01.",
    title: "Parque de los Fundadores",
    desc: "The heart of the town, where history and community meet.",
    img: imgParque
  },
  {
    id: 2,
    number: "02.",
    title: "Hacienda El Chocho",
    desc: "The place where Silvania's story began.",
    img: imgHacienda
  },
  {
    id: 3,
    number: "03.",
    title: "Alcaldía Municipal",
    desc: "Administrative center and municipal heritage.",
    img: imgAlcaldia
  },
  {
    id: 4,
    number: "04.",
    title: "Iglesia Los Puentes",
    desc: "Historic architecture connecting the past with the present.",
    img: imgPuentes
  },
  {
    id: 5,
    number: "05.",
    title: "Iglesia Parroquial",
    desc: "Faith, tradition and identity of the people.",
    img: imgIglesia
  },
  {
    id: 6,
    number: "06.",
    title: "Monumento al Campesino",
    desc: "A tribute to the coffee growers who shaped the region's rural economy.",
    img: imgCampesino
  },
  {
    id: 7,
    number: "07.",
    title: "Petroglifos Ancestrales",
    desc: "Archaeological zone in San José showing ancient indigenous carvings.",
    img: imgPetroglifos
  },
  {
    id: 8,
    number: "08.",
    title: "Alto de la Virgen",
    desc: "A panoramic viewpoint offering breathtaking views of the Sumapaz valley.",
    img: imgVirgen
  }
];

const IconicPlaces = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const openZoom = (place) => {
    setSelectedPlace(place);
  };

  const closeZoom = () => {
    setSelectedPlace(null);
  };

  return (
    <>
      <section className="places-section" id="places">
        <div className="places-header">
          <div className="places-intro">
            <h2 className="section-title">ICONIC PLACES</h2>
            <p>
              Discover the places that tell the story of Silvania, from its foundation to its natural beauty.
            </p>
            <button className="btn-vintage mt-4">
              EXPLORE ALL PLACES &rarr;
            </button>
          </div>
        </div>
        
        <div className="places-grid">
          {places.map(place => (
            <div className="place-card" key={place.id}>
              <div className="place-img-container" onClick={() => place.img && openZoom(place)} style={{ cursor: place.img ? 'zoom-in' : 'default' }}>
                {place.img ? (
                  <img src={place.img} alt={place.title} />
                ) : (
                  <div className="place-placeholder">
                    <span>[ Photo Placeholder ]</span>
                  </div>
                )}
              </div>
              <div className="place-info">
                <span className="place-number">{place.number}</span>
                <h3 className="place-title">{place.title}</h3>
              </div>
              <p className="place-desc">{place.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPlace && (
        <div className="lightbox-overlay" onClick={closeZoom}>
          <button className="lightbox-close" onClick={closeZoom}>
            <X size={32} />
          </button>
          <div className="lightbox-content-card" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPlace.img} alt={selectedPlace.title} className="lightbox-image" />
            <div className="lightbox-details">
              <span className="place-number">{selectedPlace.number}</span>
              <h3 className="place-title">{selectedPlace.title}</h3>
              <p className="place-desc">{selectedPlace.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IconicPlaces;

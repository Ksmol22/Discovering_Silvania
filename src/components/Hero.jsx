import React from 'react';
import './Hero.css';

import fotoAerea from '../assets/Fotografia Aerea.jpg';
import imgCafeRama from '../assets/cafe.png';
import imgTazaCafe from '../assets/taza de cafe.png';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Vertical coffee decorations */}
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-subtitle">
            <span>01</span>
            <span className="line"></span>
            <span>DISCOVER SILVANIA</span>
          </div>
          <h1 className="hero-title">SILVANIA</h1>


          <p className="hero-intro font-heading italic">
            History, culture, landscapes and everyday life in the heart of Cundinamarca.
          </p>

          <div className="hero-description">
            <p>
              Silvania was founded on February 21, 1935 by Ismael Silva and the campesinos of Hacienda El Chocho. It is about 44-45 km from Bogotá and is known as the <strong>"Tierra de Promisión"</strong> (Land of Promise).
            </p>
            <p>
              The municipality is home to a rich natural and cultural heritage, with biodiversity, agriculture, crafts, gastronomy and historic places that make it a unique destination.
            </p>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="vintage-photo-frame">
            <img
              src={fotoAerea}
              alt="Silvania Landscape"
              className="main-hero-image"
            />
          </div>
          <div className="handwritten-note">
            Silvania<br />
            Tierra de<br />
            Promisión
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

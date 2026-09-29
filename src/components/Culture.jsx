import React, { useState } from 'react';
import { Church, TreePine, Coffee, ShoppingBasket, Utensils, X } from 'lucide-react';
import './Culture.css';

import imgMimbre from '../assets/Artesanía mixta.jpg';
import imgCafe from '../assets/Café y agricultura.jpg';
import imgGastro from '../assets/gastronomía regional.jpeg';
import imgFestival from '../assets/festivales y tradiciones.jpg';
import imgSutagao from '../assets/herencia sutagao.jpg';

const Culture = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const cultureItems = [
    { id: 1, src: imgMimbre, title: "Mimbre craftsmanship", desc: "Artisanal work keeping ancient weaving traditions alive." },
    { id: 2, src: imgCafe, title: "Coffee and agriculture", desc: "The engine of Silvania's rural economy and daily life." },
    { id: 3, src: imgGastro, title: "Regional gastronomy", desc: "Authentic flavors rooted in the Cundinamarca countryside." },
    { id: 4, src: imgFestival, title: "Festivals and traditions", desc: "Colorful celebrations honoring the land and its people.", width: "calc(50% - 10px)" },
    { id: 5, src: imgSutagao, title: "Sutagao heritage", desc: "The indigenous roots that shaped the Tierra de Promisión.", width: "calc(50% - 10px)" }
  ];

  const openZoom = (item) => {
    setSelectedImage(item);
  };

  const closeZoom = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="culture-section" id="culture">
        
        {/* Intro Header */}
        <div className="culture-header-center">
          <h2 className="section-title text-center">CULTURE & TRADITIONS</h2>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0' }}>
            <span style={{ width: '60px', height: '1px', background: 'var(--text-main)' }}></span>
          </div>
          <p className="culture-subtitle text-center">A beautiful mosaic honoring our indigenous past and proud campesino heritage.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="culture-bento-grid">
          
          <div className="bento-item bento-text">
            <h3>01. Ancestral Roots</h3>
            <p>
              Originally inhabited by the <strong>Sutagaos</strong> ("Children of the Sun"), this territory served as a strategic bridge between the Muiscas and Panches. Their legacy survives today in ancient petroglyphs and golden <em>tunjos</em> scattered across the region.
            </p>
          </div>
          
          <div className="bento-item bento-img" onClick={() => openZoom(cultureItems[4])}>
            <img src={imgSutagao} alt="Sutagao heritage" />
            <div className="bento-overlay"><span>View Heritage</span></div>
          </div>

          <div className="bento-item bento-img" onClick={() => openZoom(cultureItems[0])}>
            <img src={imgMimbre} alt="Mimbre craftsmanship" />
            <div className="bento-overlay"><span>View Mimbre</span></div>
          </div>

          <div className="bento-item bento-text">
            <h3>02. Daily Life & Flavors</h3>
            <p>
              Local craftsmanship thrives through the weaving of <strong>mimbre</strong>, turning raw materials into exquisite furniture. In the kitchen, ancestral flavors endure through the <em>sancocho silvanense</em> and the daily use of indigenous crops like guatila and balú.
            </p>
          </div>

          <div className="bento-item bento-img wide" onClick={() => openZoom(cultureItems[2])}>
            <img src={imgGastro} alt="Regional gastronomy" />
            <div className="bento-overlay"><span>View Gastronomy</span></div>
          </div>

          <div className="bento-item bento-text">
            <h3>03. The Coffee Soul</h3>
            <p>
              Grown under the shade of the Sumapaz ecosystem, the region's organic specialty coffee is the lifeblood of countless families. The <em>Ruta del Café</em> offers a sensory journey honoring tradition and deep respect for nature.
            </p>
          </div>

          <div className="bento-item bento-img" onClick={() => openZoom(cultureItems[1])}>
            <img src={imgCafe} alt="Coffee and agriculture" />
            <div className="bento-overlay"><span>View Coffee</span></div>
          </div>

          <div className="bento-item bento-img" onClick={() => openZoom(cultureItems[3])}>
            <img src={imgFestival} alt="Festivals and traditions" />
            <div className="bento-overlay"><span>View Festivals</span></div>
          </div>

        </div>

        <div className="culture-bottom-row">
          <div className="quote-column">
            <h3 className="culture-quote">"Where<br/>history,<br/>nature and<br/>everyday<br/>life meet."</h3>
          </div>

          <div className="walkthrough-column" id="local">
            <div className="walkthrough-header">
              <h2 className="walkthrough-title">WALK THROUGH SILVANIA</h2>
              <div className="walkthrough-line"></div>
              <p className="walkthrough-desc">A curated route to experience the true essence of the Tierra de Promisión.</p>
            </div>
            
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-icon-wrap">
                  <Church strokeWidth={1} size={30} />
                </div>
                <h4>Churches & Squares</h4>
                <p>The historic heart</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-icon-wrap">
                  <TreePine strokeWidth={1} size={30} />
                </div>
                <h4>Nature & Trails</h4>
                <p>Sumapaz wilderness</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon-wrap">
                  <Coffee strokeWidth={1} size={30} />
                </div>
                <h4>Coffee Farms</h4>
                <p>Taste the tradition</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon-wrap">
                  <ShoppingBasket strokeWidth={1} size={30} />
                </div>
                <h4>Local Crafts</h4>
                <p>Woven with mimbre</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon-wrap">
                  <Utensils strokeWidth={1} size={30} />
                </div>
                <h4>Rural Flavors</h4>
                <p>Ancestral recipes</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeZoom}>
          <button className="lightbox-close" onClick={closeZoom}>
            <X size={32} />
          </button>
          <div className="lightbox-content-card" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-image" />
            <div className="lightbox-details">
              <h3 className="place-title">{selectedImage.title}</h3>
              <p className="place-desc">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Culture;

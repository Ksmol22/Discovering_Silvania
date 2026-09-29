import React from 'react';
import './History.css';

import imgMonumento from '../assets/Monumento Fundador.jpg';
import imgEscudo from '../assets/EscudoSilvania.png';
import imgSutagaos from '../assets/sutagaos.jpg';
import imgChocho from '../assets/Hacienda el chocho.jpg';
import imgCampesino from '../assets/campesino silvanence.jpeg';

const History = () => {
  return (
    <div className="page-fade-in history-page">
      <div className="history-header">
        <h1 className="section-title">HISTORY & IDENTITY</h1>
        <p className="subtitle">The roots of the "Tierra de Promisión"</p>
      </div>

      <div className="history-editorial">
        
        {/* Block 1: Origins */}
        <div className="editorial-block">
          <div className="editorial-text">
            <h2>01. Origins & The Sutagaos</h2>
            <p>
              Long before the Spanish arrival, the territory where Silvania is located today was inhabited by the indigenous <strong>Sutagaos</strong>. They cultivated the land and maintained trade routes, leaving behind archaeological treasures such as ancient petroglyphs depicting frogs, snakes, and tridents. These sacred stones can still be explored today in veredas like San José and Panamá, narrating the ancestral beliefs of the region's first settlers.
            </p>
          </div>
          <div className="editorial-image">
            <img src={imgSutagaos} alt="Petroglifos Sutagaos" />
            <p className="image-caption">Ancestral heritage of the Sutagaos</p>
          </div>
        </div>

        {/* Block 2: Hacienda El Chocho */}
        <div className="editorial-block reverse">
          <div className="editorial-text">
            <h2>02. Hacienda El Chocho & Revolution</h2>
            <p>
              The town's history is deeply tied to the legendary <strong>Hacienda El Chocho</strong>, an immense estate of over 23,850 fanegadas granted in 1608. By the 1930s, this land became the epicenter of a social awakening. The harsh conditions for tenants provoked the subdivision of the land and the birth of the very first agrarian party in the country: the <em>Unirismo</em> (Unión Nacional Izquierdista Revolucionaria - UNIR), founded by Jorge Eliécer Gaitán.
            </p>
          </div>
          <div className="editorial-image">
            <img src={imgChocho} alt="Hacienda El Chocho" />
            <p className="image-caption">Historic Hacienda El Chocho</p>
          </div>
        </div>

        {/* Block 3: The Foundation */}
        <div className="editorial-block">
          <div className="editorial-text">
            <h2>03. The Foundation (1935)</h2>
            <p>
              Driven by the need for local sovereignty, <strong>Ismael Silva</strong> called the tenants and colonists to found a new town. On <strong>February 21, 1935</strong>, under a steady drizzle and with immense enthusiasm, they began tracing the main plaza and streets. Silva was accompanied by co-founders like Carlos Segura, Sixto Rodríguez, Enrique García, Pablo Caldas, Adán Moreno, and Rosa Herminda Caldas.
            </p>
            <p>
              A year later, on February 10, 1936, the Central Committee officially bestowed the name <strong>"Silvania"</strong> in profound gratitude for Ismael Silva's tireless efforts.
            </p>
          </div>
          <div className="editorial-image">
            <img src={imgMonumento} alt="Monumento Fundador" />
            <p className="image-caption">Monument to Ismael Silva</p>
          </div>
        </div>

        {/* Block 4: Geography and Economy */}
        <div className="editorial-block reverse">
          <div className="editorial-text">
            <h2>04. Geography, Climate & Economy</h2>
            <p>
              Located just 68.9 km from Bogotá via the Pan-American Highway, Silvania sits at an altitude of 1,470 meters above sea level, enjoying a perfect average temperature of 20°C. Its vast rural area (which makes up 95% of the territory) is divided into 13 veredas.
            </p>
            <p>
              Economically, the municipality is a powerhouse of agriculture, thriving on the cultivation of coffee, corn, beans, yucca, plantain, and fruits. It is also famous for its traditional artisanal craftsmanship, particularly the beautiful furniture and basketry woven from <strong>mimbre</strong>.
            </p>
          </div>
          <div className="editorial-image">
            <img src={imgCampesino} alt="Campesino Silvanense" />
            <p className="image-caption">Local campesino and rural economy</p>
          </div>
        </div>

      </div>

      {/* Symbols Section */}
      <div className="symbols-section mt-5">
        <h2 className="text-center mb-4 section-title" style={{ fontSize: '2rem' }}>OUR SYMBOLS</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <span style={{ width: '60px', height: '1px', background: 'var(--text-main)' }}></span>
        </div>
        
        <div className="symbols-grid">
          <div className="symbol-card flag-card">
            <h3>The Flag</h3>
            <div className="flag-graphic">
              <div className="flag-stripe green"></div>
              <div className="flag-stripe white"></div>
              <div className="flag-stripe red"></div>
            </div>
            <p>Adopted in 1951, the flag consists of three stripes: <strong>Green</strong> represents effort and the fields, <strong>White</strong> symbolizes peace, and <strong>Red</strong> represents the hard work of its people.</p>
          </div>

          <div className="symbol-card shield-card">
            <h3>The Shield</h3>
            <div className="shield-graphic-real">
              <img src={imgEscudo} alt="Escudo de Silvania" style={{ width: '100%', height: 'auto' }} />
            </div>
            <p>Features the indigenous <strong>Uzathama</strong> and the iconic <strong>Ceiba</strong> tree. Surrounded by 13 golden stars representing the veredas, bearing the motto <em>"Tierra de Promisión"</em>.</p>
          </div>

          <div className="symbol-card anthem-card">
            <h3>The Anthem</h3>
            <div className="anthem-lyrics-scroll">
              <p className="anthem-lyrics">
                <strong>CORO</strong><br/>
                Silvania tierra laboral.<br/>
                Te llevo en mis entrañas<br/>
                Como "TIERRA DE PROMISIÓN"<br/>
                En tu seno ha crecido mi infancia,<br/>
                En tus campos me he vuelto un señor,<br/>
                En tus calles se ha vuelto mi vida<br/>
                Valerosa para mi nación.<br/><br/>

                <strong>I</strong><br/>
                Pueblo querido y humilde,<br/>
                Que naciste entre tribus de honor,<br/>
                Tan rodeado de hermosas montañas<br/>
                Que nos guardan con su gran amor<br/>
                Y nos llenan de alegría el alma<br/>
                Para ser cada día mejor.<br/>
                De corazón de Uzthamas soy hijo,<br/>
                Soy hijo de una tribu con valor.<br/><br/>

                <strong>II</strong><br/>
                De tierra fértil para trabajar.<br/>
                De gente grata que solo desea<br/>
                El bienestar de su comunidad,<br/>
                Silvania es tierra de nuestra Colombia<br/>
                Se siente patria si en el pueblo estas.<br/>
                Cundinamarca posee aquí un tesoro,<br/>
                Tesoro lleno de prosperidad.<br/><br/>

                <strong>III</strong><br/>
                Tu nombre se lo debemos<br/>
                A Ismael Silva tu gran fundador<br/>
                Y a otros hombres que por ti lucharon<br/>
                Y así ganaron la revolución.<br/>
                La hacienda "EL CHOCHO", donde te poblaron,<br/>
                De Dios un pueblo allí se formó.<br/>
                El caserío necesitaba un hombre<br/>
                Y de ISMAEL SILVA, "SILVANIA" quedo.<br/><br/>

                <strong>IV</strong><br/>
                Silvania tierra laboral<br/>
                Te llevo en mis entrañas<br/>
                Como "TIERRA DE PROMISIÓN".<br/>
                En tu seno a crecido mi infancia,<br/>
                En tus campos me he vuelto en señor,<br/>
                En tus calles se ha vuelto mi vida<br/>
                Valerosa para mi nación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

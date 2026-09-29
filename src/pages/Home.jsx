import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ThermometerSun, Calendar, Users } from 'lucide-react';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="page-fade-in home-page">
      <Hero />
      


      {/* Intro / Welcome Section */}
      <section className="home-intro-section">
        <div className="home-intro-text">
          <h2 className="section-title">WELCOME TO THE<br/>TIERRA DE PROMISIÓN</h2>
          <div className="home-divider"></div>
          <p>
            Nestled in the lush Sumapaz region, Silvania is a municipality where history, nature, and the rich aroma of coffee converge. Just a short drive from Bogotá, it offers an escape into a world of ancestral indigenous heritage, vibrant campesino traditions, and breathtaking landscapes. 
          </p>
          <p>
            Whether you are here to explore the archaeological wonders of the Sutagaos, taste the finest organic coffee, or wander through its historic haciendas, Silvania welcomes you with open arms.
          </p>
        </div>
      </section>

      {/* Explore Teasers */}
      <section className="explore-teasers">
        <h2 className="text-center section-title" style={{ borderBottom: 'none' }}>DISCOVER MORE</h2>
        <div className="explore-cards">
          <Link to="/history" className="explore-card">
            <h3>HISTORY & IDENTITY</h3>
            <p>Uncover the indigenous roots and the founding story.</p>
            <span className="explore-link">Read More &rarr;</span>
          </Link>
          <Link to="/places" className="explore-card">
            <h3>ICONIC PLACES</h3>
            <p>Visit the monuments, churches, and historic haciendas.</p>
            <span className="explore-link">Explore &rarr;</span>
          </Link>
          <Link to="/culture" className="explore-card">
            <h3>CULTURE</h3>
            <p>Experience the coffee route, local flavors, and crafts.</p>
            <span className="explore-link">Discover &rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

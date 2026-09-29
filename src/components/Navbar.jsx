import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import imgMontaña from '../assets/Silueta Monta.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/" className="logo-container">
          <img src={imgMontaña} alt="Silvania Montañas" className="nav-logo-icon" />
          <span>Silvania</span>
        </NavLink>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/history">HISTORY & IDENTITY</NavLink></li>
        <li><NavLink to="/places">PLACES</NavLink></li>
        <li><NavLink to="/culture">CULTURE</NavLink></li>
        <li><NavLink to="/map">INTERACTIVE MAP</NavLink></li>
      </ul>
      <div className="nav-location">
        <MapPin size={18} className="icon" />
        <span>Cundinamarca, Colombia</span>
      </div>
    </nav>
  );
};

export default Navbar;

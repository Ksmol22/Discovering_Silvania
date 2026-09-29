import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CoffeeDecor from './components/CoffeeDecor';
import Home from './pages/Home';
import History from './pages/History';
import Places from './pages/Places';
import Culture from './pages/Culture';
import MapPage from './pages/MapPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <CoffeeDecor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/places" element={<Places />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </main>
        <footer className="main-footer">
          <div className="footer-content">
            <p className="footer-quote">Silvania is more than a place... it's a feeling.</p>
            <p className="footer-copy">© 2026 Discovering Silvania</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

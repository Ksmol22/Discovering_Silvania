import React, { useState } from 'react';
import { Camera, RefreshCw, X } from 'lucide-react';
import './TimeTravelQR.css';

const TimeTravelQR = () => {
  const [scanStatus, setScanStatus] = useState('idle'); // 'idle', 'scanning', 'success'

  const handleScanSimulate = () => {
    setScanStatus('scanning');
    setTimeout(() => {
      setScanStatus('success');
    }, 2000);
  };

  const resetScanner = () => {
    setScanStatus('idle');
  };

  return (
    <section className="time-travel-section" id="timetravel">
      <div className="time-travel-content">
        <div className="tt-info">
          <h2 className="section-title">TIME TRAVEL AR</h2>
          <p className="subtitle mb-4">A window into the past.</p>
          <p className="tt-desc">
            Find the geolocated points in Silvania with our special QR codes. Scan them with your camera to travel back in time and see the exact place as it looked decades ago.
          </p>
          
          <div className="tt-instructions">
            <ol>
              <li>Stand at a marked historic spot.</li>
              <li>Open this scanner.</li>
              <li>Point it at the QR code.</li>
              <li>See history come alive!</li>
            </ol>
          </div>
        </div>

        <div className="tt-scanner-container">
          {scanStatus === 'idle' && (
            <div className="scanner-ui idle">
              <div className="scanner-frame">
                <Camera size={48} color="var(--text-main)" />
                <p>Ready to scan</p>
              </div>
              <button className="btn-vintage" onClick={handleScanSimulate}>
                Simulate Scan at Plaza
              </button>
            </div>
          )}

          {scanStatus === 'scanning' && (
            <div className="scanner-ui scanning">
              <div className="scanner-frame active">
                <div className="scan-line"></div>
                <p>Analyzing location...</p>
              </div>
            </div>
          )}

          {scanStatus === 'success' && (
            <div className="scanner-ui success">
              <div className="vintage-view-container">
                <img 
                  src="https://images.unsplash.com/photo-1542103550-252f507ba915?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Historic view of Plaza" 
                  className="historic-image"
                />
                <div className="ar-overlay">
                  <h4>Plaza de los Fundadores - 1935</h4>
                  <p>The foundation day of Silvania.</p>
                </div>
                <button className="btn-close" onClick={resetScanner}>
                  <X size={24} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimeTravelQR;

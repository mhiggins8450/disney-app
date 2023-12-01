import React from 'react';
import './Hero.css';
import freeImage from '../Images/free.png';
import cyberImage from '../Images/cyber.png';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <img src={freeImage} alt="Free Image" className="hero-image" />
        <div className="hero-text">
          <div className="highlight-background">TODAY ONLY</div>
          <div className="highlight-text">Code: <strong>FREESHIP</strong></div>
          <div className="underline-text">Shop All New</div>
        </div>
      </div>
      <div className="hero">
        <img src={cyberImage} alt="Cyber Image" className="hero-image" />
        <div className="hero-text">
          <div className="highlight-background">ENDS TONIGHT</div>
          <div className="highlight-text">Up to 40% Off</div>
          <div className="highlight-text">Holiday Cheer</div>
          <div className="hero-description">Save on ornaments, home décor and more.</div>
          <div className="underline-text">Shop Now</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

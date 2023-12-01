import React from 'react';
import './free.css';
import freeImage from '../../Images/free.png';

function Free() {
  return (
    <div className="free-container">
      <div className="hero-text">
        <div className="highlight-background">TODAY ONLY</div>
        <div className="highlight-text">Code: <strong>FREESHIP</strong></div>
        <div className="underline-text">Shop All New</div>
      </div>
      <img src={freeImage} alt="Free Image" className="hero-image" />
    </div>
  );
}

export default Free;
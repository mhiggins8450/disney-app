import React from 'react';
import './banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <span className="banner-text">
          Free Shipping on your entire order! Code: FREESHIP
        </span>
        <span className="banner-restrictions">Restrictions Apply.</span>
        <span className="banner-offers">See All Offers</span>
        <span className="banner-close">×</span>
      </div>
    </div>
  );
}

export default Banner;

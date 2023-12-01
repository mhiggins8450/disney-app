import React from 'react';
import './Header.css';
import shopDisneyLogo from '../Images/logo.png'; // Import the logo file

function Header() {
  return (
    <header className="App-header">
      <div className="left-icons">
        <div className="hamburger-menu">&#9776;</div>
        <div className="logo-container">
          <img
            src={shopDisneyLogo}
            alt="shopDisney Logo"
            className="logo"
          />
        </div>
      </div>
      <div className="right-icons">
        <span className="blue-heart">&#9829;</span>
        <span className="shopping-bag">&#128717;</span>
      </div>
    </header>
  );
}

export default Header;

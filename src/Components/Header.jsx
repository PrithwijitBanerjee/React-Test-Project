import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Game X Logo" />
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="login-btn">Log In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
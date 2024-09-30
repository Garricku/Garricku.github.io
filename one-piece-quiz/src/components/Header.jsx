import React from 'react';
import './Header.css';

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <img src="/images/one-piece-crew.jpg" alt="One Piece Crew" className="header-image" />
      <nav className="navbar">
        <ul>
        <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://your-gallery-website-url.com" target="_blank" rel="noopener noreferrer">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-button">Toggle Theme</button>
    </header>
  );
};

export default Header;
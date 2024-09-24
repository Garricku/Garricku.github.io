import React from 'react';
import './Header.css';
import onePieceImage from '../images/one-piece-crew.jpg';

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <img src={ onePieceImage } alt="One Piece Crew" className="header-image" />
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-button">Mode</button>
    </header>
  );
};

export default Header;
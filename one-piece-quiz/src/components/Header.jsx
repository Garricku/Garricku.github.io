import React from 'react';
import './Header.css';
import logo from '../images/one-piece-logo.png';

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <img src={ logo } alt="One Piece Crew" className="header-image" />
      <nav className="navbar">
        <ul>
        <li><a href="#home">Home</a></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-button">Toggle Theme</button>
    </header>
  );
};

export default Header;
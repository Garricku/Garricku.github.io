import React from 'react';
import './Header.css';
import logo from '../images/one-piece-logo.png';

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <div>
        <img src={ logo } alt="One Piece Crew" className="header-image" />
      </div>
      <div className='theme-butt'>
        <button onClick={toggleTheme} className="theme-toggle-button">Toggle Theme</button>
      </div>
    </header>
  );
};

export default Header;
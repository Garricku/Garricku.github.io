import React, { useState } from 'react';
import Quiz from './components/Quiz';
import DonationButton from './components/DonationButton';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'App dark-mode' : 'App light-mode'}>
      <Header toggleTheme={toggleTheme} />
      <h1>Which One Piece Character Are You?</h1>
      <DonationButton />
      <Quiz />
      <Footer />
    </div>
  );
};

export default App;
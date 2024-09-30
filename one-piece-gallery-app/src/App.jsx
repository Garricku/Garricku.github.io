import React, { useState } from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import DonationButton from './components/DonationButton';
import './App.css';

const images = [
  {
    name: 'Luffy',
    images: [
      { id: 3, url: '/images/luffy/luffy1.jpg', name: 'Luffy 1' },
      { id: 4, url: '/images/luffy/luffy2.jpg', name: 'Luffy 2' },
    ],
  },
  {
    name: 'Zoro',
    images: [
      { id: 1, url: '/images/nami/zoro1.jpg', name: 'Zoro 1' },
      { id: 2, url: '/images/nami/zoro2.jpg', name: 'Zoro 2' },
    ],
  },
  {
    name: 'Nami',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Ussop',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Sanji',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Chopper',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Robin',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Frankie',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Brook',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Jinbei',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Ace',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Sabo',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Shanks',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Boa',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Coby',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
  {
    name: 'Law',
    images: [
      { id: 1, url: '/images/nami/nami1.jpg', name: 'Nami 1' },
      { id: 2, url: '/images/nami/nami2.jpg', name: 'Nami 2' },
    ],
  },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'App dark-mode' : 'App light-mode'}>
      <Header toggleTheme={toggleTheme} />
      <h1>One Piece Gallery</h1>
      <DonationButton />
      <Gallery images={images} />
      <DonationButton />
      <Footer />
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import './Gallery.css';

const Gallery = ({ images }) => {
  const [showCategories, setShowCategories] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const openModal = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.flatMap(category => category.images).length;
    setCurrentImage(images.flatMap(category => category.images)[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.flatMap(category => category.images).length) % images.flatMap(category => category.images).length;
    setCurrentImage(images.flatMap(category => category.images)[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery">
      <button onClick={toggleCategories}>
        {showCategories ? 'Show All' : 'Show Categories'}
      </button>
      {showCategories ? (
        images.map((category) => (
          <div key={category.name}>
            <h2>{category.name}</h2>
            <div className="image-grid">
              {category.images.map((image, index) => (
                <ImageCard key={image.id} image={image} onClick={() => openModal(image, index)} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="image-grid">
          {images.flatMap((category) => category.images).map((image, index) => (
            <ImageCard key={image.id} image={image} onClick={() => openModal(image, index)} />
          ))}
        </div>
      )}
      {currentImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={currentImage}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default Gallery;
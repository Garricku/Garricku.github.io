import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={image.url} alt={image.name} />
    </div>
  );
};

export default ImageCard;
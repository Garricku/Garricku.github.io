import React from 'react';
import Modal from 'react-modal';
import { useSwipeable } from 'react-swipeable';
import './ImageModal.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image, onNext, onPrev }) => {
  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="image-modal"
      overlayClassName="image-modal-overlay"
    >
      <div {...handlers} className="image-modal-content">
        <img src={image.url} alt={image.name} />
        <button onClick={onRequestClose} className="close-button">Close</button>
        <a href={image.url} download className="download-button">Download</a>
      </div>
    </Modal>
  );
};

export default ImageModal;
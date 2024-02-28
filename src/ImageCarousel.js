import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentImageIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <div>
        <button onClick={goToPrevious}>&lt;</button>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
};

export default ImageCarousel;

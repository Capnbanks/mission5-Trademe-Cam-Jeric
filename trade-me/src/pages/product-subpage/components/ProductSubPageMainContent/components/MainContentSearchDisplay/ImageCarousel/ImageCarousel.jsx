import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClick = (direction) => {
    direction === 'next' ? goToNext() : goToPrevious();
  };

  return (
    <div className="image-carousel">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        onClick={() => handleClick('next')}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ImageCarousel;
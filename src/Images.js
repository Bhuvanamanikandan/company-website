import React from 'react';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';
import image4 from './image4.jpeg';
import image5 from './image5.jpeg';
import image6 from './image6.jpeg';
import image7 from './image7.jpeg';
import image8 from './image8.jpeg';
import image9 from './image9.jpeg';
import image10 from './image10.jpeg';
import image11 from './image11.jpeg';
import image12 from './image12.jpeg';
import image13 from './image13.jpeg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

function Images() {
  return (
    <div className="product-images">
      {images.map((imgSrc, index) => (
        <img key={index} src={imgSrc} alt={`Product ${index + 1}`} />
      ))}
    </div>
  );
}

export default Images;

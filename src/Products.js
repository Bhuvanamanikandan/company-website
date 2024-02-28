import React, { useState } from 'react';
import './Products.css'; 


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

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9,image10, image11, image12, image13]; 

const Products = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gotoPrevious = () => {
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
    <div className="products-container">
      <div className="image-carousel">
        <button onClick={gotoPrevious}>&lt;</button>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
        <button onClick={goToNext}>&gt;</button>
      </div>
      <div className="manufacturing-products">
        <h2>Manufacturing Products</h2>
        <ul>
          <li>Terminal End Clip 4.8 self lock type(S) - Female (in chain form)</li>
          <li>Terminal End Clip 4.8 Open window type - Female (in chain form)</li>
          <li>Terminal End Clip 4.8 Open window type(S) - Female (in chain form)</li>
          <li>Terminal End Clip 4.8 - Male (in chain form)</li>
          <li>Housings for 4.8 female terminals - PVC(NATURAL) & LDPE</li>
          <li>Housings for 4.8 Male terminals - LDPE</li>
          <li>Housings for 4.8 Male terminals (Long) – LDPE</li>
          <li>Terminal End Clip 6.3 self lock type - Female (in chain form)</li>
          <li>Terminal End Clip 6.3 female window type (in chain form)</li>
          <li>Terminal End Clip 6.3 Male ( in chain form )</li>
          <li>Terminal End Clip 6.3 Male - long ( in chain form )</li>
          <li>Terminal End Clip 6.3 flag- Female ( in chain form )</li>
          <li>Housings for 6.3 female terminals - PVC(NATURAL)</li>
          <li>Housings for 6.3 flag terminal – PVC (NATURAL)</li>
          <li>Neon Lamp indicator Assembly – Red, Blue & Green</li>
          <li>LED Lamp indicator Assembly</li>
          <li>Wiring Harness Assemblies</li>
          <li>Carbon brush Clip – Motor</li>
          <li>PCB Assemblies</li>
        </ul>
      </div>
    </div>
  );
};

export default Products;

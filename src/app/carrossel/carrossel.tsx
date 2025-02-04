import React, { useState, useEffect } from "react";
import "./carrossel.css";

const images = [
  'https://wallpapers.com/images/hd/3840x1080-pictures-mweskuy056nv0cjr.jpg',
  'https://wallpapers.com/images/hd/3840x1080-pictures-mweskuy056nv0cjr.jpg',
  'https://wallpapers.com/images/hd/3840x1080-pictures-mweskuy056nv0cjr.jpg'
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagem ${index + 1}`} className="carousel-image" />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

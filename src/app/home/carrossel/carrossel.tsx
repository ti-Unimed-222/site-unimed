import React, { useState, useEffect } from "react";
import "./carrossel.css";

const images = [
  'https://unimedpalmas.coop.br/public/img/BannerPrincipal/139cabbe01963eb9280bb268a945177b.jpg',
  'https://unimedpalmas.coop.br/public/img/BannerNoticias/234/4591b67c2d2f4d5ae675e54fe82c254d.png',
  'https://unimedpalmas.coop.br/public/img/BannerNoticias/216/d72c2116e43854a6f49102b8f62d850b.jpg'
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <a href="#noticias">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} width={10000} alt={`Imagem ${index + 1}`} className="carousel-image"/>
        ))}
      </div>
      </a>
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div className="slider">
      <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={`Slide ${index}`}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

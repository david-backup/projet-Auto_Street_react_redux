import React, { useState, useEffect, useRef } from "react";

const Slider = ({ slides, arrows }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  return (
    <div className="slider_container">
      <div className="slider">
        <img
          className="slider_img"
          src={slides[currentSlide].picture}
          alt={slides[currentSlide].title}
        />

        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
        <img
          className="arrow arrow_left"
          src={arrows[1].picture}
          alt="Previous"
          onClick={prevSlide}
        />
        <img
          className="arrow arrow_right"
          src={arrows[0].picture}
          alt="Next"
          onClick={nextSlide}
        />
        <div className="dots">
          {slides.map((slide, index) => (
            <span
              key={index}
              className={index === currentSlide ? "dot active" : "dot"}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

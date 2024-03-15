import React, { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];
  const dotSlides = slides.length;

  const updateIndex = (increment) => {
    setCurrentIndex((lastIndex) => {
      let newIndex = lastIndex + increment;

      newIndex =
        newIndex >= dotSlides ? 0 : newIndex < 0 ? dotSlides - 1 : newIndex;
    });
  };

  return (
    <section className="slider">
      <img
        className="slider_slide"
        src={currentSlide}
        alt={`Slide ${currentIndex + 1}`}
      />
      <img
        className="arrow_right"
        src={arrowRight}
        alt="flèche droite de navigation"
        onClick={() => updateIndex(1)}
      />
      <img
        className="arrow_left"
        src={arrowLeft}
        alt="Flèche Gauche de navigation"
        onClick={() => updateIndex(-1)}
      />
      <div className="slider_dot">{dotSlides}</div>
    </section>
  );
};

export default Slider;

import React, { useState } from "react";
import "./ImageSlider.css";
import ImageSliderItem from "./ImageSlideItem";
import ImageSliderControl from "./ImageSliderControl";

const ImageSlider = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  const handlePreviousClick = () => {
    const previous = current - 1;

    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;

    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <div className="image-slider-container">
      <div className="slider" aria-labelledby={headingId}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} className="visuallyhidden">
            {heading}
          </h3>

          {slides.map((slide) => {
            return (
              <ImageSliderItem
                key={slide.index}
                slide={slide}
                current={current}
                handleSlideClick={() => handleSlideClick()}
              />
            );
          })}
        </ul>

        <div className="slider__controls">
          <ImageSliderControl
            type="previous"
            title="Go to previous slide"
            handleClick={() => handlePreviousClick()}
          />

          <ImageSliderControl
            type="next"
            title="Go to next slide"
            handleClick={() => handleNextClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

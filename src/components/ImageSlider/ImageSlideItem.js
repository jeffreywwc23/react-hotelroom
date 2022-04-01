import React, { useState, createRef, useRef } from "react";

const ImageSliderItem = ({ slide, current }) => {
  const { src, button, headline, index } = slide;
  const slideRef = useRef(null);
  let classNames = "slide";

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = (event) => {
    const el = slideRef.current;
    el.style.setProperty("--x", 0);
    el.style.setProperty("--y", 0);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  return (
    <li
      ref={slideRef}
      className={classNames}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button className="slide__action btn">{button}</button>
      </article>
    </li>
  );
};

export default ImageSliderItem;

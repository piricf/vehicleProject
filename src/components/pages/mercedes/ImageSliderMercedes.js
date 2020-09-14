import React from "react";
import "./ImageSliderMercedes.css";

const ImageSliderMercedes = ({ goLeft, goRight, x, sliderArr }) => {
  return (
    <div className="mercedes-slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            className="mercedes-slide"
            key={index}
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ImageSliderMercedes;

import React, { useState } from "react";
import "./ImageSlider.css";
import Cars from "./Cars";
import i1 from "../../../assets/1.jpg";
import i2 from "../../../assets/2.jpg";
import i3 from "../../../assets/3.jpg";
import i4 from "../../../assets/4.jpg";

function ImageSlider() {
  const [x, setX] = useState(0);
  let sliderArr = [
    <Cars src={i1} />,
    <Cars src={i2} />,
    <Cars src={i3} />,
    <Cars src={i4} />,
  ];
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            className="slide"
            key={index}
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default ImageSlider;

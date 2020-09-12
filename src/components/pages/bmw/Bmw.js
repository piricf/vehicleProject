import React, { useState } from "react";
import "./Bmw.css";
import BmwLogo from "./Images/BMW.jpg";
import Button from "../../Button";
import i1 from "./Images/1.jpg";
import i2 from "./Images/2.jpg";
import i3 from "./Images/3.jpg";
import i4 from "./Images/4.jpg";
import Cars from "./Cars";
import useSlider from "../../../hooks/useSlider";
import ImageSliderBmw from "./ImageSliderBmw";
import BmwModels from "./BmwModels";

let sliderArr = [
  <Cars src={i1} />,
  <Cars src={i2} />,
  <Cars src={i3} />,
  <Cars src={i4} />,
];

const Bmw = () => {
  const [showMe, setShowMe] = useState(false);

  const [x, goLeft, goRight] = useSlider(sliderArr);

  const toogleInfo = () => {
    setShowMe(!showMe);
  };

  return (
    <div className="bmw-container">
      <h1 className="bmw-title">BMW</h1>
      <img src={BmwLogo} alt="BmwLogo" className="bmw-logo" />
      <div className="bmw__btn-wrapper">
        <Button
          buttonSize="btn-medium"
          buttonStyle="outline"
          onClick={() => toogleInfo()}
        >
          <span>About BMW</span>
        </Button>
      </div>
      <div className="bmw__info">
        {showMe ? (
          <div>
            <p className="bmw__info-text">
              The special fascination of the BMW Group not only lies in its
              products and technology, but also in the company’s history,
              written by inventors, pioneers and brilliant designers. Today, the
              BMW Group, with its 31 production and assembly facilities in 15
              countries as well as a global sales network, is the world’s
              leading manufacturer of premium automobiles and motorcycles, and
              provider of premium financial and mobility services.
            </p>
          </div>
        ) : null}
      </div>

      <div>
        <ImageSliderBmw
          goLeft={goLeft}
          goRight={goRight}
          x={x}
          sliderArr={sliderArr}
        />
      </div>
      <div>
        <BmwModels />
      </div>
    </div>
  );
};

export default Bmw;

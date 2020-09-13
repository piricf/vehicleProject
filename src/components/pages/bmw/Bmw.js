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
import Bmw3 from "./Bmw3/Bmw3";
import Bmw5 from "./Bmw5/Bmw5";
import Bmw7 from "./Bmw7/Bmw7";

let sliderArr = [
  <Cars src={i1} />,
  <Cars src={i2} />,
  <Cars src={i3} />,
  <Cars src={i4} />,
];

const Bmw = () => {
  const [showMe, setShowMe] = useState(false);
  const [x, goLeft, goRight] = useSlider(sliderArr);

  const [changeBmw3, setChangeBmw3] = useState(true)
  const [changeBmw5, setChangeBmw5] = useState(true)
  const [changeBmw7, setChangeBmw7] = useState(true)

  const toogleInfo = () => {
    setShowMe(!showMe);
  };

  const toogleImageBmw3 = () => {
    setChangeBmw3(!changeBmw3)
  }

  const toogleImageBmw5 = () => {
    setChangeBmw5(!changeBmw5)
  }

  const toogleImageBmw7 = () => {
    setChangeBmw7(!changeBmw7)
  }

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
      <div>
        <Bmw3 toogleImageBmw3={toogleImageBmw3} changeBmw3={changeBmw3} />
      </div>
      <div>
        <Bmw5 toogleImageBmw5={toogleImageBmw5} changeBmw5={changeBmw5} />
      </div>
      <div>
        <Bmw7 toogleImageBmw7={toogleImageBmw7} changeBmw7={changeBmw7} />
      </div>
    </div>
  );
};

export default Bmw;

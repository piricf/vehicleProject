import React, { useState } from "react";
import MercedesLogo from "./Images/Mercedes.jpg";
import useSlider from "../../../hooks/useSlider";
import Button from "../../Button";
import ImageSliderMercedes from "./ImageSliderMercedes";
import i1 from "./Images/1.jpg";
import i2 from "./Images/2.jpg";
import i3 from "./Images/3.jpg";
import i4 from "./Images/4.jpg";
import Cars from "../bmw/Cars";
import "./Mercedes.css";
import MercedesModels from "./MercedesModels";
import AClass from "./AClass/AClass";
import ClsClass from "./CLSClass/ClsClass";
import SClass from "./SClass/SClass";

let sliderArr = [
  <Cars src={i1} />,
  <Cars src={i2} />,
  <Cars src={i3} />,
  <Cars src={i4} />,
];

const Mercedes = () => {
  const [showMe, setShowMe] = useState(false);
  const [x, goLeft, goRight] = useSlider(sliderArr);

  const [changeAClass, setChangeAClass] = useState(false);
  const [changeCls, setChangeCls] = useState(false);
  const [changeS, setChangeS] = useState(false);

  const toogleInfo = () => {
    setShowMe(!showMe);
  };

  const toogleImageAClass = () => {
    setChangeAClass(!changeAClass);
  };

  const toogleImageCls = () => {
    setChangeCls(!changeCls);
  };

  const toogleImageS = () => {
    setChangeS(!changeS);
  };

  return (
    <div className="mercedes-container">
      <h1 className="mercedes-title">Mercedes</h1>
      <img src={MercedesLogo} alt="MercedesLogo" className="mercedes-logo" />
      <div className="mercedes__btn-wrapper">
        <Button
          buttonSize="btn-medium"
          buttonStyle="btn-outline"
          onClick={() => toogleInfo()}
        >
          <span>About Mercedes</span>
        </Button>
      </div>
      <div className="mercedes__info">
        {showMe ? (
          <div>
            <p className="mercedes__info-text">
              Mercedes-Benz AG is one of the largest manufacturers of premium
              passenger cars. In 2019 it sold nearly 2.4 million cars and more
              than 438,000 vans. In its two business divisions, Mercedes-Benz AG
              is continually expanding its worldwide production network with
              over 40 production sites on four continents, while aligning itself
              to meet the requirements of electric mobility. At the same time,
              the company is developing its global battery production network on
              three continents. Sustainable actions play a decisive role in both
              business divisions.
            </p>
          </div>
        ) : null}
      </div>
      <div>
        <ImageSliderMercedes
          goLeft={goLeft}
          goRight={goRight}
          x={x}
          sliderArr={sliderArr}
        />
      </div>
      <div>
        <MercedesModels />
      </div>
      <div>
        <AClass
          toogleImageAClass={toogleImageAClass}
          changeAClass={changeAClass}
        />
      </div>
      <div>
        <ClsClass toogleImageCls={toogleImageCls} changeCls={changeCls} />
      </div>
      <div>
        <SClass toogleImageS={toogleImageS} changeS={changeS} />
      </div>
    </div>
  );
};

export default Mercedes;

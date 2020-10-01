import React, { useState } from "react";
import AudiLogo from "./Images/Audi.jpg";
import AudiModels from "./AudiModels";
import AudiA3 from "./AudiA3/AudiA3";
import ImageSlider from "./ImageSlider";
import "./Audi.css";
import { Button } from "../../Button";
import i1 from "./Images/1.jpg";
import i2 from "./Images/2.jpg";
import i3 from "./Images/3.jpg";
import i4 from "./Images/4.jpg";
import Cars from "./Cars";
import useSlider from "../../../hooks/useSlider";
import AudiA5 from "./AudiA5/AudiA5";
import AudiA6 from "./AudiA6/AudiA6";

let sliderArr = [
  <Cars src={i1} />,
  <Cars src={i2} />,
  <Cars src={i3} />,
  <Cars src={i4} />,
];

const Audi = () => {
  const [showMe, setShowMe] = useState(false);
  const [x, goLeft, goRight] = useSlider(sliderArr);
  
  const [changeA3, setChangeA3] = useState(true);
  const [changeA5, setChangeA5] = useState(true);
  const [changeA6, setChangeA6] = useState(true);

  const toggleInfo = () => {
    setShowMe(!showMe);
  };

  const toogleImageA3 = () => {
    setChangeA3(!changeA3);
  };

  const toogleImageA5 = () => {
    setChangeA5(!changeA5)
  }

  const toogleImageA6 = () => {
    setChangeA6(!changeA6)
  }


  return (
    <div className="audi-container">
      <h1 className="audi-tittle">Audi</h1>
      <img src={AudiLogo} alt="AudiLogo" className="audi-logo" />
      <div className="audi__btn-wrapper"> 
      <Button
        buttonSize="btn-medium"
        buttonStyle="btn-outline"
        onClick={() => toggleInfo()}
      >
        <span> About Audi</span>
      </Button>
      </div>
      <div className="audi__info">
        {showMe ? (
          <div>
            <p className="audi__info-text">
              Audi Sport has stood behind the successful motor racing
              involvement of AUDI AG for 40 years.Nowadays, the Ingolstadt
              manufacturer markets its most sporty Audi models and accessories
              under the label Audi Sport. The first motor racing activities of
              the Audi brand began in the late 1970s under the tagline Audi
              Motorsport. With its entry into the World Rally Championship in
              1980, the brand changed the name of its motorsport department to
              Audi Sport. Even then, works-run motorsport at Audi was part of
              the Technical Development (TE) department. This close connection
              guarantees the technology transfer between motorsport and series
              production. Traditionally, this is a decisive reason for Audi
              taking on top-level motorsport.
            </p>
          </div>
        ) : null}
      </div>
      <div>
        <ImageSlider
          goLeft={goLeft}
          goRight={goRight}
          x={x}
          sliderArr={sliderArr}
        />
      </div>
      <div>
        <AudiModels />
      </div>
      <div>
        <AudiA3 toggleImageA3={toogleImageA3} changeA3={changeA3} />
      </div>
      <div>
        <AudiA5  toggleImageA5={toogleImageA5} changeA5={changeA5} />
      </div> 
      <div>
        <AudiA6 toggleImageA6={toogleImageA6} changeA6={changeA6} />
      </div>
    </div>
  );
};

export default Audi;

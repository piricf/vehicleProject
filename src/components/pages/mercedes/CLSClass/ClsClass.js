import React from "react";
import Button from "../../../Button";
import "./ClsClass.css";

const imagesPath = {
  grey:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-cls-class-1591735006.jpg?crop=0.708xw:0.531xh;0.0737xw,0.353xh&resize=1200:*",
  black: "https://cdn.carbuzz.com/gallery-images/1600/590000/400/590487.jpg",
};

const ClsClass = ({ toogleImageCls, changeCls }) => {
  const { grey, black } = imagesPath;
  return (
    <div className="container">
      <div className="row mercedesCls__cls-row">
        <div className="column">
          <div className="mercedesCls__cls-text-wrapper">
            <h3>More about Mercedes CLS-Class</h3>
            <p className="mercedesCls__cls-text-info">
              Mercedes has never knowingly left a niche unplugged (how else
              would you explain the G-Wagen Landaulet?). It was with the
              first-generation CLS that Mercedes claims to have pioneered the
              concept of a car that “combines the elegance and dynamism of a
              coupé with the comfort and functionality of a saloon”. In other
              words, a swoopier alternative to a traditional saloon, or a
              marginally more practical alternative to a two-door coupe.
            </p>
          </div>
          <Button onClick={toogleImageCls} buttonSize="btn-medium">
            Click to change color of CLS-Class
          </Button>
        </div>
        <div className="column">
          <div className="mercedesCls__cls-img-wrapper">
            <img
              src={changeCls ? grey : black}
              className="mercedesCls__img"
              alt="ImageName"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClsClass;

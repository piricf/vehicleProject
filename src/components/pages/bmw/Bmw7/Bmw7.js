import React from "react";
import Button from "../../../Button";
import "./Bmw7.css";

const imagesPath = {
  metalic:
    "https://cnet4.cbsistatic.com/img/1i2HtaEnotZsPaes9eqbhBCiLvA=/756x425/2019/04/02/faf2e652-4d9d-4c8e-93ee-b9fd1c39f898/2020-bmw-750li-xdrive-1.jpg",
  black:
    "https://besthqwallpapers.com/Uploads/5-12-2019/114155/thumb2-bmw-7-2020-g12-745le-xdrive-front-view.jpg",
};

const Bmw7 = ({ toogleImageBmw7, changeBmw7 }) => {
  const { metalic, black } = imagesPath;

  return (
    <div className="container">
      <div className="row bmw7__series7-row">
        <div className="column">
          <div className="bmw7__series7-text-wrapper">
            <h3>More about BMW Series 7</h3>
            <p className="bmw7__series7-text-info">
              There may be a bigger BMW now and one with a higher model number,
              but the 2020 BMW 7 Series still reigns supreme over its brand
              mates as the long-running flagship sedan. Nearly every
              technological, engineering and performance trick up BMW's sleeve
              can be found in this car, making it one of the most sophisticated
              and advanced vehicles on the road today.
            </p>
          </div>
          <Button onClick={toogleImageBmw7} buttonSize="btn-medium">
            Click to change color of BMW 7
          </Button>
        </div>
        <div className="column">
          <div className="bmw7__series7-img-wrapper">
            <img
              src={changeBmw7 ? metalic : black}
              className="bmw7__img"
              alt="ImageName"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmw7;

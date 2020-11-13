import React from "react";
import Button from "../../../Button";
// import "./Bmw5.css";
import "../../VehicleModels.css"

const imagesPath = {
  blue: "https://i.ytimg.com/vi/Jzi_NYZcNS4/maxresdefault.jpg",
  white:
    "https://www.automobili.ba/wp-content/uploads/2020/05/bmw-serija-5-10-696x464.jpg",
};

const Bmw5 = ({ toogleImageBmw5, changeBmw5 }) => {
  const { blue, white } = imagesPath;

  return (
    <div className="container">
      <div className="row vehicle-row">
        <div className="column">
          <div className="vehicle-text-wrapper">
            <h3>More about BMW Series 5</h3>
            <p className="vehicle-text-info">
              The new BMW 5 Series, which is like saying the new VW Golf or the
              new Mini. Even though it has almost all new parts, we all know
              exactly what it’s going to be: a fine-driving, well-built, refined
              luxury car, with an options list that crosses the whole dealer
              forecourt. The new parts, by the way, are based on the floorpan
              and chassis of the new 7-Series. The body is impressively light
              thanks to aluminium all over the skin, but the 5 doesn’t have the
              fancy carbonfibre structural members of the more expensive 7.
            </p>
          </div>
          <Button onClick={toogleImageBmw5} buttonSize="btn-medium">
            Click to change color of BMW 5
          </Button>
        </div>
        <div className="column">
          <div className="vehicle-img-wrapper">
            <img
              src={changeBmw5 ? blue : white}
              className="vehicle__img"
              alt="ImageName"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmw5;

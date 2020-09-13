import React from "react";
import Button from "../../../Button";
import "./Bmw3.css";

const imagesPath = {
  red:
    "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/bmw-3-series-2015.jpg?itok=R3QE6fGH",
  blue: "https://autoportal.hr/wp-content/uploads/2019/11/image_100449.jpg",
};

const Bmw3 = ({ toogleImageBmw3, changeBmw3 }) => {
  const { red, blue } = imagesPath;

  return (
    <div className="container">
      <div className="row bmw3__series3-row">
        <div className="column">
          <div className="bmw3__series3-text-wrapper">
            <h3>More about BMW Series 3</h3>
            <p className="bmw3__series3-text-info">
              The BMW 3 Series is a compact executive car manufactured by the
              German automaker BMW since May 1975. It is the successor to the 02
              Series and has been produced in seven different generations. The
              first generation of the 3 Series was only available as a 2-door
              sedan (saloon), however the model range has since expanded to
              include a 4-door sedan, 2-door convertible, 2-door coupé, 5-door
              station wagon, 5-door liftback ("Gran Turismo") and 3-door
              hatchback body styles. Since 2013, the coupé and convertible
              models have been marketed as the 4 Series, therefore the 3 Series
              range no longer includes these body styles.
            </p>
          </div>
          <Button onClick={toogleImageBmw3} buttonSize="btn-medium">
            Click to change color of BMW 3
          </Button>
        </div>
        <div className="column">
          <div className="bmw3__series3-img-wrapper">
            <img
              src={changeBmw3 ? red : blue}
              className="bmw3__img"
              alt="ImageName"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmw3;

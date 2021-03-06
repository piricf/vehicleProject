import React from "react";
import Button from "../../../Button";
import "../../VehicleModels.css"

const imagesPath = {
  white:
    "https://www.motortrend.com/uploads/sites/5/2018/05/2019-Audi-A6-88-1.jpg",
  grey: "https://images.hgmsites.net/hug/audi-a6_100726069_h.jpg",
};

const AudiA6 = ({ toggleImageA6, changeA6 }) => {
  const { white, grey } = imagesPath;

  return (
    <div className="container">
      <div className="row vehicle-row">
        <div className="column">
          <div className="vehicle-text-wrapper">
            <h3>More about Audi A6</h3>
            <p className="vehicle-text-info">
              The Audi A6 is an executive car made by the German automaker Audi.
              Now in its fifth generation, the successor to the Audi 100 is
              manufactured in Neckarsulm, Germany, and is available in saloon
              and estate configurations, the latter marketed by Audi as the
              Avant. Audi's internal numbering treats the A6 as a continuation
              of the Audi 100 lineage, with the initial A6 designated as a
              member of the C4-series, followed by the C5, C6, C7, and the C8.
            </p>
          </div>
          <Button onClick={toggleImageA6} buttonSize="btn-medium">
            Click to change color of Audi A6
          </Button>
        </div>
        <div className="column">
          <div className="vehicle-img-wrapper">
            <img
              src={changeA6 ? white : grey}
              className="vehicle__img"
              alt="ImageName"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudiA6;

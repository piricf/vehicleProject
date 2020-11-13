import React from "react";
import Button from "../../../Button";
// import "./AudiA5.css";
import "../../VehicleModels.css"

const imagesPath = {
  green:
    "https://media.ed.edmunds-media.com/audi/a5/2020/oem/2020_audi_a5_coupe_prestige-45-tfsi-quattro_fq_oem_5_1600.jpg",
  metalic:
    "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2020-Audi-A5-1001x565%20%281%29.jpg",
};

const AudiA5 = ({ toggleImageA5, changeA5 }) => {
  const { green, metalic } = imagesPath;

  return (
    <div className="container">
      <div className="row vehicle-row">
        <div className="column">
          <div className="vehicle-text-wrapper">
            <h3>More about Audi A5</h3>
            <p className="vehicle-text-info">
              he Audi A5 offers impressive elegance, advanced technology and
              exhilarating driving dynamics. Experience sporty, elegant driving
              in the A5 Coupé and the A5 Sportback, an emotional tour in the A5
              Cabriolet, sheer dynamism in any of the Audi S5 models, or an
              innovative drive type with the A5 Sportback g-tron.
            </p>
          </div>
          <Button onClick={toggleImageA5} buttonSize="btn-medium">
            Click to change color of Audi A5
          </Button>
        </div>
        <div className="column">
          <div className="vehicle-img-wrapper">
            <img
              src={changeA5 ? green : metalic}
              className="vehicle__img"
              alt="ImageName"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudiA5;

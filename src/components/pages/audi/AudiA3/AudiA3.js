import React from "react";
// import "./AudiA3.css";
import "../../VehicleModels.css"
import Button from "../../../Button";

const imagesPath = {
  red:
    "https://www.carscoops.com/wp-content/uploads/2020/03/2020-Audi-A3-Sportback-00.jpg",
  blue:
    "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-audi-a3-sportback-tdi-2020-fd-hero-front.jpg",
};

export const AudiA3 = ({ toggleImageA3, changeA3 }) => {
  const { red, blue } = imagesPath;

  return (
    <div className="container">
      <div className="row vehicle-row">
        <div className="column"> 
          <div className="vehicle-text-wrapper">
          <h3>More about Audi A3</h3>
          <p className="vehicle-text-info">
            Where once there was “Dear Mr. Smith” now there is “Alexa”, where
            once we had DVD rentals now we have streaming platforms – our world
            is changing ever more rapidly. The Audi A3 is the perfect companion
            for the challenges of the 21st century. With its progressive design,
            modern operating concept and optional Audi connect. The Audi A3 is a
            statement: a statement for the future.
          </p>
          </div>
        <Button onClick={toggleImageA3} buttonSize="btn-medium"  >
          Click to change color of Audi A3
        </Button>
        
        </div>
        <div className="column"> 
        <div className="vehicle-img-wrapper"> 
        <img src={changeA3 ? red : blue} className="vehicle__img" alt="ImageName" />  
        </div>
        </div>
      </div>
      </div>
    
  );
};

export default AudiA3;

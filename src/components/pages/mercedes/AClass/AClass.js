import React from "react";
import Button from "../../../Button";
import "./AClass.css";

const imagesPath = {
  metalic:
    "https://www.motortrend.com/uploads/sites/5/2019/11/2019-Mercedes-Benz-A-220-5.jpg?fit=around%7C875:492",
  red:
    "https://cdn1.buyacar.co.uk/sites/buyacar/files/mercedes_a-class_amg-line_front.jpg",
};

const AClass = ({toogleImageAClass, changeAClass}) => {
  const { metalic, red } = imagesPath;
  return (
    <div className="container">
      <div className="row mercedesA__aClass-row">
        <div className="column">
          <div className="mercedesA__aClass-text-wrapper">
            <h3>More about Mercedes A-Class</h3>
            <p className="mercedesA__aClass-text-info">
              Entry-level models provide shoppers with an affordably priced way
              into a luxury carmaker's lineup, and the A-class fills this role
              in the Mercedes-Benz product range. This subcompact sedan is the
              smallest car in automaker's selection of vehicles; it's also the
              least expensive. With a long list of standard features, a
              premium-looking cabin, and relatively accessible pricing, the 2020
              Mercedes-Benz A-class offers good value. 
            </p>
          </div>
          <Button onClick={toogleImageAClass} buttonSize="btn-medium">
              Click to change color of A-Class
          </Button>
        </div>
        <div className="column">
            <div className="mercedesA__aClass-img-wrapper">
                <img src={changeAClass ? metalic : red} className="mercedesA__img" alt="ImageName" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AClass;

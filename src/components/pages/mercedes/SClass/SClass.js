import React from "react";
import Button from "../../../Button";
import "./SClass.css"

const imagesPath = {
  black:
    "https://images.summitmedia-digital.com/topgear/images/2020/04/06/2020-mercedes-benz-s-class-08-1586161731.jpg",
  white:
    "https://www.carscoops.com/wp-content/uploads/2019/12/2021-mercedes-s-class-latest-render-2.jpg",
};

const SClass = ({toogleImageS, changeS}) => {
  const { black, white } = imagesPath;
  return (
    <div className="container">
      <div className="row mercedesS__sClass-row">
        <div className="column">
          <div className="mercedesS__sClass-text-wrapper">
            <h3>More about Mercedes S-Class</h3>
            <p className="mercedesS__sClass-text-info">
              oasting spectacular levels of luxury and state-of-the-art
              technology, the 2021 Mercedes-Benz S-class sedan is the German
              company's flagship and a rolling statement of success. Although
              its storied history is partly responsible for that prestige, the
              latest generation looks to improve on its impressive predecessor
              in every way. The new S-class has grander proportions, an even
              richer interior, innovative safety equipment, and some seriously
              futuristic features.
            </p>
          </div>
          <Button onClick={toogleImageS} buttonSize="btn-medium">
              Click to change color of S-Class
          </Button>
        </div>
        <div className="column">
            <div className="mercedesS__sClass-img-wrapper">
                <img src={changeS ? black : white} className="mercedesS__img" alt="ImageName" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SClass;

import React from "react";
import "./AudiA3.css";

const imagesPath = {
  red:
    "https://www.carscoops.com/wp-content/uploads/2020/03/2020-Audi-A3-Sportback-00.jpg",
  blue:
    "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-audi-a3-sportback-tdi-2020-fd-hero-front.jpg",
};

export const AudiA3 = ({ toggleImage, open }) => {
  const { red, blue } = imagesPath;

  return (
    <div className="wrapper">
      <div>
        <button onClick={toggleImage} className="button-color">
          Click to change color of Audi A3
        </button>
        <img src={open ? red : blue} className="audia3-color" alt="ImageName" />
      </div>
      <div className="about">
        <div className="about__info">
          <h3>More about Audi A3</h3>
          <p>
            Where once there was “Dear Mr. Smith” now there is “Alexa”, where
            once we had DVD rentals now we have streaming platforms – our world
            is changing ever more rapidly. The Audi A3 is the perfect companion
            for the challenges of the 21st century. With its progressive design,
            modern operating concept and optional Audi connect. The Audi A3 is a
            statement: a statement for the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudiA3;

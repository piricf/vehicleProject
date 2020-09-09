import React, { useState } from "react";
import Spec from "./Spec";
import "./AudiModels.css";

export const AudiModels = () => {
  const [specs, setSpecs] = useState([
    {
      about: "Audi A3 Sportback 2020",
      specifications:
        "Average fuel consumption: 5,6-5,8l /100km, CO2 emissions, combined: 146-150g/km",
      open: false,
    },
    {
      about: "Audi A5 Sportback 2020",
      specifications:
        "Average fuel consumption: 3,7-5,4l /100km, CO2 emissions, combined: 98-143g/km",
      open: false,
    },
    {
      about: "Audi A6 Limousine 2020",
      specifications:
        "Average fuel consumption: 5,6-5,8l /100km, CO2 emissions, combined: 146-150g/km",
      open: false,
    },
  ]);

  const toggleSpec = (index) => {
    setSpecs(
      specs.map((spec, i) => {
        if (i === index) {
          spec.open = !spec.open;
        } else {
          spec.open = false;
        }

        return spec;
      })
    );
  };

  return (
    <div className="audi__models">
      <div className="specs">
        {specs.map((spec, i) => (
          <Spec spec={spec} key={i} index={i} toggleSpec={toggleSpec} />
        ))}
      </div>
    </div>
  );
};

export default AudiModels;

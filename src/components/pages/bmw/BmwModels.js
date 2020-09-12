import React, { useState } from "react";
import SpecBmw from "./SpecBmw";
import "./BmwModels.css";

const BmwModels = () => {
  const [cons, setCons] = useState([
    {
      info: "Bmw 3 Series 2020",
      conditions:
        "Power: 147-365 bhp, 0-100km/h - 4.3- 8.1 secs, Fuel Economy - 34 - 217.3 mpg",
      show: false,
    },
    {
      info: "Bmw 5 Series 2020",
      conditions:
        "Max Power (bhp@rpm) 261.49bhp@4000rpm, Average fuel consumption:  3,7-5,4l /100km, CO2 emissions, combined: 98-143g/km",
      show: false,
    },
    {
      info: "Bmw 7 Series 2020",
      conditions:
        "Average fuel consumption: 5,6-5,8l /100km, CO2 emissions, combined: 146-150g/km",
      show: false,
    },
  ]);

  const toogleCon = (index) => {
    setCons(
      cons.map((con, i) => {
        if (i === index) {
          con.show = !con.show;
        } else {
          con.show = false;
        }
        return con;
      })
    );
  };

  return (
    <div className="bmw__models">
      <div className="cons">
        {cons.map((con, i) => (
          <SpecBmw con={con} key={i} index={i} toogleCon={toogleCon} />
        ))}
      </div>
    </div>
  );
};

export default BmwModels;

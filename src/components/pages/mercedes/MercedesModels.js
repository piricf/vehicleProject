import React, { useState } from "react";
import SpecMercedes from "./SpecMercedes";
import "./MercedesModels.css";

const MercedesModels = () => {
  const [stats, setStats] = useState([
    {
      info: "Mercedes A-Class 2020",
      statements:
        "Power: 114 - 301 bhp, 0-100km/h - 	4.5 - 10.3 secs, Fuel Economy - 33.2 - 256.8 mpg",
      show: false,
    },
    {
      info: "Mercedes CLS-Class 2020",
      statements:
        "Power: 241-428 bhp, 0-100km/h - 4.4- 6.2 secs, Fuel Economy - 30.1 - 45.6 mpg, Max Power(bhp@rpm) 241.3bhp@4200rpm",
      show: false,
    },
    {
      info: "Mercedes S-Class 2020",
      statements:
        "Power: 147-365 bhp, 0-100km/h - 4.6 secs, Engine Type Handcrafted 6.0L V12 biturbo, Max Power(bhp@rpm) 630bhp@5000rpm",
      show: false,
    },
  ]);

  const toogleStat = (index) => {
    setStats(
      stats.map((stat, i) => {
        if (i === index) {
          stat.show = !stat.show;
        } else {
          stat.show = false;
        }
        return stat;
      })
    );
  };

  return (
    <div className="mercedes__models">
      <div className="stats">
        {stats.map((stat, i) => (
          <SpecMercedes stat={stat} key={i} index={i} toogleStat={toogleStat} />
        ))}
      </div>
    </div>
  );
};

export default MercedesModels;

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="footer__tittle">Filip Pirić</h3>

      <ul>
        <li className="footer__text">
          Fakultet elektrotehnike, računarstva i infomacijskih tehnologija
          Osijek
        </li>
        <li className="footer__text">Osijek, Croatia</li>
        <li className="footer__text">piricf9@gmail.com</li>
      </ul>
    </div>
  );
}

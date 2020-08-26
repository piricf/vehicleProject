import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>VEHICLES</h1>
      <Link className="link" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="link" to="/Audi">
        Audi
      </Link>{" "}
      |{" "}
      <Link className="link" to="/Bmw">
        BMW
      </Link>{" "}
      |{" "}
      <Link className="link" to="/Mercedes">
        Mercedes
      </Link>
    </div>
  );
}

export default Header;

import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { useSelector } from "react-redux";



const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDescription,
  headline,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  const user = useSelector((state) => state.authReducer.user)

  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div className="row home__hero-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading-dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDescription
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/sign-up">
                  {user ? null : <Button buttonSize="btn-wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>}
                  
                </Link>
              </div>
            </div>
            <div className="col ">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

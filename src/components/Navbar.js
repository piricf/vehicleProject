import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";
import { Button } from "./Button";
import "./Button.css";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userActions";
import firebase from "../firebase/Config";

const Navbar = () => {
  //TODO: promijeni naming da se lakse snalazim
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [userState, setUserState] = useState(null);
  const signinSelector = useSelector((state) => state.signin);
  const loginSelector = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const logoutUserAction = () => dispatch(logoutUser());

  useEffect(() => {
    firebase.getUserState().then((user) => {
      setUserState(user);
    });
  });

  const logout = async () => {
    console.log("Logout User");
    alert("User is logged out");
    setUserState(null);
    await logoutUserAction();
    //props.history.replace("/")
  };

  let navButtons;
  if (
    (signinSelector.user && signinSelector.user.hasOwnProperty("user")) ||
    (loginSelector.user && loginSelector.user.hasOwnProperty("user")) ||
    userState != null
  ) {
    navButtons = (
      <Button
        buttonStyle="btn-outline"
        buttonColor="red"
        buttonSize="btn-medium"
        onClick={logout}
      >
        Log Out
      </Button>
    );
  } else {
    navButtons = <Link to="/sign-up">Sign Up</Link>;
  }

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton); //resize-aj buttone(makni ih kad se smanjuje ekran)

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <AiOutlineCar className="navbar-icon" />
            VEHICLES
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/audi" className="nav-links" onClick={closeMobileMenu}>
                Audi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bmw" className="nav-links" onClick={closeMobileMenu}>
                BMW
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/mercedes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Mercedes
              </Link>
            </li>
            {/* probaj na jednostavniji nacin */}
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button
                    buttonStyle="btn-outline"
                    buttonColor="red"
                    buttonSize="btn-medium"
                  >
                    {navButtons}
                  </Button>
                </Link>
              ) : (
                <Link
                  to="/sign-up"
                  className="btn-link"
                  onClick={closeMobileMenu}
                >
                  <Button buttonStyle="btn-outline">{navButtons}</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import firebase from "../firebase/Config";
import { logoutUser } from "../redux/actions/LogoutAction";
import Button from "./Button";
import "./Nav.css";

const Nav = (props) => {
  const signInSelector = useSelector((state) => state.signIn);
  const logInSelector = useSelector((state) => state.logIn);
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const logoutUserAction = () => dispatch(logoutUser());

  
  useEffect(() => {
    firebase.getUserState().then(user => {
     setUserState(user);
    });
  })

  const logout = async() => {
    console.log("logout user");
    setUserState(null);
    await logoutUserAction();
    props.history.replace("/")
  }

  let buttons;
  if (
    (logInSelector.user && logInSelector.user.hasOwnProperty("user")) ||
    (signInSelector.user && signInSelector.user.hasOwnProperty("user")) ||
    userState != null
  ) {
    buttons = (
      <>
        <div>
          <Button className="logout" onClick={logout}>
            Log Out
          </Button>
        </div>
      </>
    );
  } else {
    buttons = (
      <div className="nav-container">
        <div className="navigation-item">
          <Link to="/sign-in" className="navigation-link">
            <Button buttonSize="btn-medium" buttonStyle="btn-outline">
              Sign Up
            </Button>
          </Link>{" "}
        </div>
        <div className="navigation-item">
          {" "}
          <Link to="/log-in" className="navigation-link">
            <Button buttonSize="btn-medium" buttonStyle="btn-outline">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="navigation-container">
      <div>
        <Link to="/" className="navigation__header-link">
          <Button buttonSize="btn-medium" buttonStyle="btn-outline">
            {" "}
            Get started{" "}
          </Button>{" "}
        </Link>
      </div>

      {buttons}
    </div>
  );
};

export default withRouter(Nav);

import React, { useEffect, useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import firebase from "../firebase/Config";
import {logoutUser} from "../redux/actions/LogoutAction";


const Nav = (props) => {
  const signInSelector = useSelector((state) => state.signIn);
  const logInSelector = useSelector((state) => state.logIn);
  const [userState, setUserState] = useState(null);

  const dispatch = useDispatch();
  const logoutUserAction = () => dispatch(logoutUser());

  useEffect(() => {
    firebase.getUserState().then((user) => {
      setUserState(user);
    });
  });

  const logout = async () => {
    console.log("logout user");
    setUserState(null);
    await logoutUserAction();
    props.history.replace("/");
  };

  let buttons;
  if (
    (logInSelector.user && logInSelector.user.hasOwnProperty("user")) ||
    (signInSelector.user && signInSelector.user.hasOwnProperty("user")) ||
    userState != null
  ) {
    buttons = (
      <>
        <li>
          <button className="logout" onClick={logout}>
            Log Out
          </button>
        </li>
      </>
    );
  } else {
    buttons = (
      <>
        <li>
          <Link to="/sign-in"  className="nav-link">
            Sign In
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/log-in"  className="nav-link">
            Log In
          </Link>
        </li>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Get started </Link>
        </li>
      </ul>
      {buttons}
    </nav>
  );
};

export default withRouter(Nav);

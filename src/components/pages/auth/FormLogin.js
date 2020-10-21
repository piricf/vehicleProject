import React, { useState, useEffect } from "react";
import validate from "./validateInfo";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  loginUser,
  logoutUser,
} from "../../../redux/authentication/userActions";
import firebase from "../../../firebase/Config";


const FormLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    submitted: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [routeRedirect, setRedirect] = useState("");
  const dispatch = useDispatch();
  const loginUserAction = (email, password) =>
    dispatch(loginUser(email, password));

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setSubmitted({ submitted: true });
    if (values.email !== "" && values.password !== "") {
      await loginUserAction(values.email, values.password);
      setRedirect(true);
    } else {
      console.log("need to fill the credentials");
      setErrors(validate(values));
    }
  };


  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   if (email !== "" && password !== "") {
  //     //nece redirectat kada radim na ovaj nacin
  //     // let user = await loginUserAction(email, password);
  //     // if (user) {
  //     //   setRedirect(true);
  //     // }

  //     await loginUserAction(email, password);
  //     console.log("login user in");
  //     setRedirect(true);
  //   } else {
  //     console.log("need to fill the credentials");
  //     setErrors(validate(values));
  //   }
  // };

  const logout = () => {
    dispatch(logoutUser());
    console.log("Logout User");
    // alert("User is logged out");
    //props.history.replace("/")
  };

  const [userState, setUserState] = useState(null);
  const authState = useSelector((state) => state.authReducer);
  
  useEffect(() => {
    console.log("Initial State: ", authState);
    firebase.getUserState().then((user) => {
      setUserState(user);
    });
  }, [authState]);

  let loginPageButton;
  if (
    (authState.user && authState.user.hasOwnProperty("user")) ||
    userState != null
  ) {
    const redirectTo = routeRedirect;
    if (redirectTo) {
      return <Redirect to="/" />;
    }
    loginPageButton = (
      <button className="form-input-btn" onClick={logout}>
        Log Out
      </button>
    );
  } else {
    loginPageButton = (
      <button className="form-input-btn" type="submit">
        Log In
      </button>
    );
  }

  // const redirectTo = routeRedirect;
  // if (redirectTo) {
  //   return <Redirect to="/" />;
  // }


  return (
    <div className="form-container">
      <div className="form-content-left">
        <img
          className="form-img"
          src="https://acad.xlri.ac.in/evening/images/login.svg"
          alt="login-img"
        />
      </div>
      <div className="form-content-right">
        <form onSubmit={handleLoginSubmit} className="form" noValidate>
          <h1>Welcome back!</h1>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleLoginChange}
            />
            {/* {submitted && !values.email && errors.email && (
              <p>{errors.email}</p>
            )} */}
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handleLoginChange}
            />
            {/* {submitted && !values.email && errors.password && (
              <p>{errors.password}</p>
            )} */}
            {errors.password && <p>{errors.password}</p>}
          </div>
          {loginPageButton}
          {/* // <button className="form-input-btn" type="submit">
          //   Log in
          // </button> */}
        </form>
      </div>
    </div>
  );
};

export default FormLogin;

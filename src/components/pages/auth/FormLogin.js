import React, { useState } from "react";
import validate from "./validateInfo";
import "./Form.css";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../../redux/userActions";

const FormLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [routeRedirect, setRedirect] = useState("");
  const dispatch = useDispatch();
  const loginUserAction = (email, password) =>
    dispatch(loginUser(email, password));

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      console.log("login user in");
      //nece redirectat kada radim na ovaj nacin
      // let user = await loginUserAction(email, password);
      // if (user) {
      //   setRedirect(true);
      // }
      await loginUserAction(email,password)
      setRedirect(true)
    } else {
      console.log("need to fill the credentials");
      setErrors(validate(values));
    }
  };

  const redirectTo = routeRedirect;
  if (redirectTo) {
    return <Redirect to="/" />;
  }

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;

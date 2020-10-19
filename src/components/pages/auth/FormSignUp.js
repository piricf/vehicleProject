import React, { useState } from "react";
import validate from "./validateInfo";
import "./Form.css";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/authentication/userActions";

const FormSignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [routeRedirect, setRedirect] = useState("");
  const dispatch = useDispatch();
  const createUserAction = (email, password) =>
    dispatch(createUser(email, password));

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      password2 !== "" &&
      password2 === password
    ) {
      console.log("creating user");
      await createUserAction(email, password);
      setRedirect(true);
    } else {
      console.log("need to fill the credentials");
      setErrors(validate(values));
    }
  };

  const redirectTo = routeRedirect;
  if (redirectTo) {
    return <Redirect to="/log-in" />;
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
        <form onSubmit={handleSignUpSubmit} className="form">
          <h1>
            Get started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
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
          <div className="form-inputs">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
          <span className="form-input-login">
            Already have an account? Login{" "}
            <Link to="/log-in">
              <span>here</span>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
export default FormSignUp;

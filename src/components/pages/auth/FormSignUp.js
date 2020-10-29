import React, { useState, useEffect } from "react";
import validate from "./validateInfo";
import "./Form.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/authentication/userActions";
import { SpinningCircles } from "svg-loaders-react";

const FormSignUp = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // const error = useSelector((state) => state.authReducer.error);
  // const loading = useSelector((state) => state.authReducer.loading);
  // const user = useSelector((state) => state.authReducer.user);
  const { error, loading, user } = useSelector((state) => state.authReducer);

  const history = useHistory();

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (
      values.username !== "" &&
      values.password2 !== "" &&
      values.password2 === values.password
    ) {
      dispatch(createUser(values.email, values.password));
    } else {
      setErrors(validate(values));
    }
  };

  useEffect(() => {
    if (user) {
      history.push("/log-in");
    }
  }, [user, history]);

  useEffect(() => {
    console.log(error);
  }, [error]);

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
              value={values.username}
              onChange={handleSignUpChange}
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
              value={values.email}
              onChange={handleSignUpChange}
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
              value={values.password}
              onChange={handleSignUpChange}
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
              value={values.password2}
              onChange={handleSignUpChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          {error ? <p className="error">{error}</p> : null}
          <button className="form-input-btn" type="submit">
            Sign up
          </button>        
          <span className="form-input-login">
            Already have an account? Login{" "}
            <Link to="/log-in" > 
              <span>here</span>
            </Link>
          </span>
          {loading ? (
            <p className="laoding">
              <SpinningCircles />
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};
export default FormSignUp;

import React, { useState, useEffect } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/authentication/userActions";
import { useHistory } from "react-router-dom";
import { SpinningCircles  } from 'svg-loaders-react'

const FormLogin = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const {user, loading, error} = useSelector((state) => state.authReducer)


  useEffect(() => {
    if (user) {
    history.push("/");
    }
  }, [user, history]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(values.email, values.password));
  };

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
        <form onSubmit={handleLoginSubmit} className="form" noValidate >
          <h1>Welcome back!</h1>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleLoginChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleLoginChange}
            />
          </div>
          {error ? <p className="error">{error}</p> : null}
          <button className="form-input-btn" type="submit">
            Log In
          </button>
          {loading ? <p className="loading"><SpinningCircles  /></p> : null}
        </form>
      </div>
    </div>
  );
};

export default FormLogin;

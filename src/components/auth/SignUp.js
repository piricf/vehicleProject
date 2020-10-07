import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { createUser } from "../../redux/actions/SignUpAction";
import Button from "../Button";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const createUserAction = (email, password) =>
    dispatch(createUser(email, password));
  

  const signInHandler = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "" && username !== "") {
      console.log("creating user");
      await createUserAction(email, password);
      setRedirect(true);
    }  else {
      alert("need to fill the credentials");
      console.log("need to fill the credentials");
    }
  };

  const redirectTo = redirect;
  if (redirectTo) {
    return <Redirect to="/log-in" />;
  }

  return (
    <div className="signIn">
      <form onSubmit={signInHandler} className="signIn__form">
        <h1 className="signIn__form__title">Sign Up</h1>
        <h3>
          Get started with us today! Create your account by filling out the
          information below.
        </h3>

        <div className="input__field">
          <label className="signIn__form__label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input__field">
          <label htmlFor="email" className="signIn__form__label">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input__field">
          <label htmlFor="password" className="signIn__form__label">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input__field">
          <Button className="signIn__form__btn" type="submit">
            Sign up
          </Button>
          <span className="input__btn">
            Already have an account? Login
            <Link to="/log-in">
              <span className="here__btn">here </span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { logInUser } from "../../redux/actions/LogInAction";
import Button from "../Button";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const logInUserAction = (email, password) => {
    dispatch(logInUser(email, password));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      console.log("login user in");
      await logInUserAction(email, password);
      setRedirect(true);
      alert("you are logged in");
    } else {
      console.log("need to fill the credentials");
      alert("Something went wrong");
    }
  };

  const redirectTo = redirect;
  if (redirectTo) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <form onSubmit={loginHandler}>
        <p>Welcome back</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" value="Login">
          {" "}
          Log In
        </Button>
      </form>
    </>
  );
};

export default LogIn;

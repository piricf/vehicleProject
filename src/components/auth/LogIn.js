import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
//action
import { logInUser } from "../../redux/actions/LogInAction";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [routeRedirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const logInUserAction = (email, password) => {
    dispatch(logInUser(email, password));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      let user = await logInUserAction(email, password);
      console.log(user);
      if (user) {
        setRedirect(true);
      } else {
        console.log("something went wrong");
      }
    }
  };

  const rediretTo = routeRedirect;
  if (rediretTo) {
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

        <button type="submit" value="Login">
          {" "}
          Log In
        </button>
      </form>
    </>
  );
};

export default LogIn;

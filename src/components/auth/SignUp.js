import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
//action
import { createUser } from "../../redux/actions/SignUpAction";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [routeRedirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const createUserAction = (email, password) =>
    dispatch(createUser(email, password));

  const signInHandler = async (e) => {
    e.preventDefault();
    console.log("user created");

    if (email !== "" && password !== "") {
      let user = await createUserAction(email, password);
      if (user) {
        setRedirect(true);
        console.log("now you have an account");
      } else {
        console.log("somethnig went wrong");
      }
    }
  };
  const redirectTo = routeRedirect;
  if (redirectTo) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signIn">
      <form onSubmit={signInHandler} className="signIn__form">
        <h3 className="signIn__form__title">Sign Up</h3>

        <div className="input__field">
          <label htmlFor="email" className="signIn__form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input__field">
          <label htmlFor="password" className="signIn__form__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input__field">
          <button className="signIn__form__btn" type="submit">
            Sign up
          </button>
          <span className="input__btn">
            Already have an account? Login
            <Link to="/log-in" >
              here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

import { combineReducers } from "redux";

import createUser from "./SignUpReducers";
import logInUser from "./LogInReducers";
import logoutUser from "./LogoutReducers"

const Reducers = combineReducers({
  signIn: createUser,
  logIn: logInUser,
  logout: logoutUser
});

export default Reducers;

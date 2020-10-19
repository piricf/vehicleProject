import { combineReducers } from "redux";
import { authReducer } from "./authentication/userReducer";

const rootReducers = combineReducers({
  authReducer: authReducer,
});

export default rootReducers;

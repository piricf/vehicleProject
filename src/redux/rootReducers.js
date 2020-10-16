import { combineReducers } from "redux";
import { authReducer } from "../redux/userReducer";

const rootReducers = combineReducers({
  authReducer: authReducer,
});

export default rootReducers;

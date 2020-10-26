import { combineReducers } from "redux";
import { authReducer } from "./authentication/userReducer";
import {persistReducer} from "redux-persist" 
import storage from "redux-persist/lib/storage" 

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["authReducer"]
}

const rootReducers = combineReducers({
  authReducer: authReducer,
});


export default persistReducer(persistConfig, rootReducers) 

import { combineReducers } from "redux";
import { authReducer } from "./authentication/userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { postReducer } from "./posts/postReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer", "postReducer"],
};

const rootReducers = combineReducers({
  authReducer: authReducer,
  postReducer: postReducer,
});

export default persistReducer(persistConfig, rootReducers);

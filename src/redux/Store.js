import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import RootReducers from "./rootReducers"

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;

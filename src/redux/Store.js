import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import RootReducers from "./rootReducers"

const middleWare = applyMiddleware(thunk);
const store = createStore(RootReducers, middleWare);

export default store;

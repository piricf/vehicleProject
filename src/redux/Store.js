import { applyMiddleware, createStore } from "redux";
import Reducers from "./reducers/Reducers";
import thunk from "redux-thunk";

const middleWare = applyMiddleware(thunk);
const store = createStore(Reducers, middleWare);

export default store;

import { applyMiddleware, createStore } from "redux";
import Reducers from "./reducers/Reducers";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);
const Store = createStore(Reducers, middleware);

export default Store;

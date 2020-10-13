import {combineReducers} from "redux"
import {createUser, logoutUser} from "../redux/userReducer"
import {loginUser} from "../redux/userReducer"

const rootReducers = combineReducers({
    signin: createUser,
    login: loginUser,
    logout: logoutUser
})

export default rootReducers
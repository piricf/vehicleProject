import firebase from "../firebase/Config"

export const createUser = (email, password) => {
    return async function(dispatch) {
        await firebase
        .signin(email,password)
        .then(user => {
            if(!user){
                return dispatch({type: "CREATE_USER", payload: user})
            }
        })
        .catch((err) => dispatch({type: "CREATE_ERROR", payload: "Sign Up Error"}))
    }
}

export const loginUser = (email, password) => {
    return async function(dispatch) {
        await firebase
        .login(email, password)
        .then(user => {
            if(!user){
                return dispatch({type: "LOGIN_USER", payload: user})
            }
        })
        .catch((err) => dispatch({type: "LOGIN_ERROR", payload: "Log In Error"}))
    }
}

export const logoutUser = () => {
    return async function(dispatch) {
        await firebase.logout().then(() => dispatch({type: "LOGOUT_USER"}))
        .catch((err) => dispatch({type: "LOGOUT_ERROR", payload: "Logout Error"}))
    }
}


// export const logoutUser = () => {
//     return async function(dispatch){
//         await firebase.logout().then(() => dispatch({type: "LOGOUT_USER"}))
//         .catch((err) => dispatch({type: "LOGOUT_ERROR", payload: "Logout Error"}))
//     }
// }
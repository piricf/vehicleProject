import firebase from "../../firebase/Config"


export const logoutUser = () => {
    return async function(dispatch) {
        await firebase.logout()
        dispatch({type: "LOGOUT_USER", payload: {}})
        dispatch({type: "CREATE_USER", payload: {}})
    }
}

export default logoutUser
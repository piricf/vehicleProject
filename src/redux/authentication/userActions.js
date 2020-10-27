import firebase from "@firebase/app";
require("firebase/auth");

export const createUser = (email, password) => {
  return (dispatch) => {
    dispatch({type: "LOADING"})
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((user) => {dispatch({type: "CREATE_USER", payload: user})})
    .catch((error) => {dispatch({type: "ERROR", payload: error.message})})
  }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => dispatch({ type: "LOGIN_USER", payload: user }))
      .catch((error) => dispatch({ type: "ERROR", payload: error.message }));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "LOGOUT_USER" }))
      .catch((error) => dispatch({ type: "ERROR", payload: error.message }));
  };
};



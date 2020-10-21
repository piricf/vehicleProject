import firebase from "../../firebase/Config";


export const createUser = (email, password) => {
  return function (dispatch) {
    dispatch({ type: "LOADING" });
    return firebase
      .signin(email, password)
      .then((user) => {
        if (!user) {
          return dispatch({ type: "CREATE_USER", payload: user });
        }
      })
      .catch((err) => dispatch({ type: "ERROR", payload: "Sign Up Error" }));
  };
};


export const loginUser = (email, password) => {
  return dispatch => {
    dispatch(request({email}))
    firebase.login(email, password)
    .then(
      user => {
        dispatch(success(user))
      },
      error => {
        dispatch(failure(error.toString()))
      }
    )
  }
  function request(user) { return { type: "LOGIN_USER", payload: user}}
  function success(user) { return {type: "LOGIN_SUCCESS", payload: user}}
  function failure(error) { return { type: "LOGIN_FAILURE", payload: error}}
}

// export const loginUser = (email, password) => {
//   return function (dispatch) {
//     dispatch({ type: "LOADING" });
//     return firebase
//       .login(email, password)
//       .then((user) => {
//         // if (!user) {
//         //   dispatch({ type: "ERROR", payload: "Failed getting user" });
//         //   return;
//         // }
//         dispatch({ type: "LOGIN_USER", payload: user });
//       })
//       .catch((err) => dispatch({ type: "ERROR", payload: err }));
//   };
// };

export const logoutUser = () => {
  return function (dispatch) {
    firebase
      .logout()
      .then(() => dispatch({ type: "LOGOUT_USER" }))
      .catch((err) => dispatch({ type: "ERROR", payload: "Logout Error" }));
  };
};

export const showLoader = () =>{ 
  return function(dispatch) {
    dispatch({type: "SHOW_LOADER"})
  }
}

export const hideLoader = () => {
  return function(dispatch) {
    dispatch({type: "HIDE_LOADER"})
  }
}

//-----------------------------------------------------------------------------------
// export const createUser = async (email, password) => {
//   return async function (dispatch) {
//     try {
//       console.log("vasdklfmasl");
//       const user = await firebase.signin(email, password);
//       console.log(user);
//       dispatch({ type: "CREATE_USER", payload: user });
//     } catch (error) {
//       console.log(error, "heeeey");
//       dispatch({ type: "CREATE_USER", payload: "Sign Up Error" });
//     }
//   };
// };

// export const createUser = (email, password) => {
//   return async function (dispatch) {
//     return await firebase
//       .signin(email, password)
//       .then((user) => {
//         if (!user) {
//           return dispatch({ type: "CREATE_USER", payload: user });
//         }
//       })
//       .catch((err) =>
//         dispatch({ type: "CREATE_ERROR", payload: "Sign Up Error" })
//       );
//   };
// };

// import firebase from "../firebase/Config"

// export const createUser = (email, password) => {
//     return async function(dispatch) {
//         await firebase
//         .signUp(email,password)
//         .then(user => {
//             if(!user){
//                 return dispatch({type: "CREATE_USER", payload: user})
//             }
//         })
//         .catch((err) => dispatch({type: "CREATE_ERROR", payload: "Sign Up Error"}))
//     }
// }
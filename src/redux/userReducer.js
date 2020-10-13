export const createUser = (
  state = {
    user: "user",
    error: undefined,
  },
  action
) => {
  if (action.type === "CREATE_USER") {
    state = { ...state, user: action.payload };
  }
  if (action.type === "CREATE_ERROR") {
    state = { ...state, error:  action.payload };
  }
  return state;
};

export const loginUser = (
  state = {
    user: "user",
    error: undefined
  }, action
) => {
  if(action.type === "LOGIN_USER"){
    state = {...state, user: action.payload}
  }
  if(action.type === "LOGIN_ERROR"){
    state = {...state, error: action.payload}
  }
  return state
}

export const logoutUser = (
  state = {
    user: "user",
    error: undefined
  }, action 
) => {
  if(action.type === "LOGOUT_USER") {
    state = {...state, user: action.payload}
  }
  if(action.type === "LOGOUT_ERROR") {
    state = {...state, error: action.payload}
  }
  return state
}


// export const loginUser = (
//     state = {
//         user: "user",
//         error: undefined
//     },action
// ) => {
//     if(action.type === "LOGIN_USER"){
//         state = {...state, user: action.payload}
//     }
//     if(action.type === "LOGOUT_USER"){
//         state = {...state, user: undefined}
//     }
//     if(action.type === "LOGIN_ERROR"){
//         state = {...state, error: action.payload}
//     }
// }

// IINITAL_STATE = {
//   user: undefined,
//   error: undefined,
//   loading: false
// }

export const authReducer = (
  state = {
    user: undefined,
    error: undefined,
    loading: false,
  },
  action
) => {
  if (action.type === "CREATE_USER") {
    state = {
      ...state,
      user: action.payload,
      loading: false,
      error: undefined,
    };
  }
  if (action.type === "LOADING") {
    state = { ...state, loading: true };
  }
  if (action.type === "ERROR") {
    state = { ...state, error: action.payload, loading: false };
  }
  if (action.type === "LOGIN_USER") {
    state = { ...state, user: action.payloa, loading: false, error: undefined };
  }
  if (action.type === "LOGOUT_USER") {
    state = { ...state, user: undefined, loading: false, error: undefined };
  }
  return state;
};

// export const createUser = (
//   state = {
//     user: "user",
//     error: undefined,
//   },
//   action
// ) => {
//   if (action.type === "CREATE_USER") {
//     state = { ...state, user: action.payload };
//   }
//   if (action.type === "CREATE_ERROR") {
//     state = { ...state, error: action.payload };
//   }
//   return state;
// };

// export const loginUser = (
//   state = {
//     user: "user",
//     error: undefined,
//   },
//   action
// ) => {
//   if (action.type === "LOGIN_USER") {
//     state = { ...state, user: action.payload };
//   }
//   if (action.type === "LOGIN_ERROR") {
//     state = { ...state, error: action.payload };
//   }
//   return state;
// };

// export const logoutUser = (
//   state = {
//     user: "user",
//     error: undefined,
//   },
//   action
// ) => {
//   if (action.type === "LOGOUT_USER") {
//     state = { ...state, user: action.payload };
//   }
//   if (action.type === "LOGOUT_ERROR") {
//     state = { ...state, error: action.payload };
//   }
//   return state;
// };

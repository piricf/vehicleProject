const INITIAL_STATE = {
  user: undefined,
  error: undefined,
  loading: false,
}

export const authReducer = (
  state = INITIAL_STATE , action
) => {
  switch(action.type) {
    case "CREATE_USER":
      //jel mogu return-at arreyeve??????????[pitaj mateja]
      return [
       state = {
         ...state,
         user: action.payload,
         loading: false,
         error: undefined,
       }
      ]
    case "LOADING":  
      return [
        state = {
          ...state,
          loading: true,
        }
      ]
    case "LOGIN_USER":
      return [
        state = {
          ...state,
          user: action.payload,
          loading: false,
          error: undefined,
        }
      ]
    case "LOGOUT_USER":
      return [
        state = {
          ...state,
          user: undefined,
          loading: false,
          error: undefined,
        }
      ]
      case "ERROR":
        return [
          state = {
            ...state,
            error: action.payload,
            loading: false,
          }
        ]
        default:
          return state || INITIAL_STATE
  }
}

//---------------------------------------------------------------
// export const authReducer = (
//   state = {
//     user: undefined,
//     error: undefined,
//     loading: false,
//   },
//   action
// ) => {
//   if (action.type === "CREATE_USER") {
//     state = {
//       ...state,
//       user: action.payload,
//       loading: false,
//       error: undefined,
//     };
//   }
//   if (action.type === "LOADING") {
//     state = { ...state, loading: true };
//   }
//   if (action.type === "ERROR") {
//     state = { ...state, error: action.payload, loading: false };
//   }
//   if (action.type === "LOGIN_USER") {
//     state = { ...state, user: action.payload, loading: false, error: undefined };
//   }
//   if (action.type === "LOGOUT_USER") {
//     state = { ...state, user: undefined, loading: false, error: undefined };
//   }
//   return state;
// };


//----------------------------------------------------------------------------

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

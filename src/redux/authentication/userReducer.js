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
      return{  
         ...state,
         user: action.payload,
         loading: false,
         error: undefined,
       }
     
    case "LOADING":  
      return {
          ...state,
          loading: true,
        } 
  
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
      }  
      
    case "LOGOUT_USER":
      return {
          ...state,
          user: undefined,
          loading: false,
          error: undefined,
        }
    case "ERROR":
        return  {
            ...state,
            error: action.payload,
            loading: false,
          }
        default:
          return state || INITIAL_STATE
  }
}



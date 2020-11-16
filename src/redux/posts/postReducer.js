const INITIAL_STATE = {
  posts: [],
  error: undefined,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        error: undefined,
      };
    
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
        error: undefined,
      };
    
    case "DELETE_POSTS":
      return {
        ...state,
        error: undefined,
      }
    // case "UPDATE_POST":
    //   return {
    //     ...state,
    //     posts: action.payload,
    //     error: undefined,
    //   }    
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state || INITIAL_STATE;
  }
};

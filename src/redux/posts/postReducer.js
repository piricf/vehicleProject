const INITIAL_STATE = 
  {
    posts: {},
    error: undefined
  }


export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return {
        ...state,
        post: action.payload
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state || INITIAL_STATE;
  }
};

// userReducer.js
const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_USER_DETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };

    case "SET_CURRENT_USER_DATA":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

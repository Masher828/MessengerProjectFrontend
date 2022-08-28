import * as ActionConstants from "./action_constants";

const initState = { isLoading: false, isError: false, data: {} };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionConstants.LOGIN_USER:
      return { ...state, isLoading: true, isError: false };
    case ActionConstants.LOGIN_USER_SUCCESS:
      return { ...state, isLoading: false, data: action.data };
    case ActionConstants.LOGIN_USER_FAILURE:
      return { ...state, isLoading: false, isError: action.error };
    case ActionConstants.SIGNUP_USER:
      return { ...state, isLoading: true, isError: false };
    case ActionConstants.SIGNUP_USER_SUCCESS:
      return { ...state, isLoading: false, data: action.data };
    case ActionConstants.SIGNUP_USER_FAILURE:
      return { ...state, isLoading: false, isError: action.error };
    default:
      return state;
  }
};

export default authReducer;

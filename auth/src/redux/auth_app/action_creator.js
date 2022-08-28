import * as ActionConstants from "./action_constants";

const loginUser = () => {
  return {
    type: ActionConstants.LOGIN_USER,
  };
};

const loginUserSuccess = (data) => {
  return {
    type: ActionConstants.LOGIN_USER_SUCCESS,
    data: data,
  };
};

const loginUserFailure = (error) => {
  return {
    type: ActionConstants.LOGIN_USER_FAILURE,
    error: error,
  };
};

export const LoginUser = (data) => (dispatch) => {
  dispatch(loginUser());
  setTimeout(() => {
    dispatch(loginUserSuccess());
  }, 3000);
};

const signupUser = () => {
  return {
    type: ActionConstants.SIGNUP_USER,
  };
};

const signupUserSuccess = (data) => {
  return {
    type: ActionConstants.SIGNUP_USER_SUCCESS,
    data: data,
  };
};

const signupUserFailure = (error) => {
  return {
    type: ActionConstants.SIGNUP_USER_FAILURE,
    error: error,
  };
};

export const SignupUser = (data) => (dispatch) => {
  dispatch(signupUser());
  setTimeout(() => {
    dispatch(signupUserSuccess());
  }, 3000);
};

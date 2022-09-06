import * as ActionConstants from "./action_constants";

const getStatusRequest = () => {
  return {
    type: ActionConstants.GET_STATUS_REQUEST,
  };
};

const getStatusRequestSuccess = (data) => {
  return {
    type: ActionConstants.GET_STATUS_REQUEST_SUCCESS,
    data: data,
  };
};

const getStatusRequestFailure = (error) => {
  return {
    type: ActionConstants.GET_STATUS_REQUEST_FAILURE,
    error: error,
  };
};

export const GetStatus = (userId) => (dispatch) => {
  dispatch(getStatusRequest());
  var statusList = [
    { id: "1", name: "available" },
    { id: "2", name: "offline" },
    { id: "3", name: "away" },
    { id: "4", name: "busy" },
  ];
  dispatch(getStatusRequestSuccess(statusList));
};

const updateStatusRequest = () => {
  return {
    type: ActionConstants.UPDATE_STATUS_REQUEST,
  };
};

const updateStatusRequestSuccess = () => {
  return {
    type: ActionConstants.UPDATE_PROFILE_REQUEST_SUCCESS,
    data: data,
  };
};

const updateStatusRequestFailure = (error) => {
  return {
    type: ActionConstants.UPDATE_PROFILE_REQUEST_FAILURE,
    error: error,
  };
};

export const UpdateStatus = (userId, status) => (dispatch) => {
  dispatch(updateStatusRequest());
  dispatch(updateStatusRequestSuccess());
};

const getProfileRequest = () => {
  return {
    type: ActionConstants.GET_PROFILE_REQUEST,
  };
};

const getProfileRequestSuccess = (data) => {
  return {
    type: ActionConstants.GET_PROFILE_REQUEST_SUCCESS,
    data: data,
  };
};

const getProfileRequestFailure = (error) => {
  return {
    type: ActionConstants.GET_PROFILE_REQUEST_FAILURE,
    error: error,
  };
};

export const GetProfile = (id) => (dispatch) => {
  dispatch(getProfileRequest());
  var data = {
    firstName: "Manish",
    lastName: "Sharma",
    email: "manish@gmail.com",
  };
  dispatch(getProfileRequestSuccess(data));
};

const updateProfileRequest = () => {
  return {
    type: ActionConstants.UPDATE_PROFILE_REQUEST,
  };
};

const updateProfileRequestSuccess = (data) => {
  return {
    type: ActionConstants.UPDATE_PROFILE_REQUEST_SUCCESS,
    data: data,
  };
};

const updateProfileRequestFailure = (error) => {
  return {
    type: ActionConstants.UPDATE_PROFILE_REQUEST_FAILURE,
    error: error,
  };
};

export const UpdateProfile = (data) => (dispatch) => {
  dispatch(updateStatusRequest());
  dispatch(updateProfileRequestSuccess(data));
};

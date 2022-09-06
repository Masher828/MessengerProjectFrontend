import * as ActionConstants from "./action_constants";

const initState = {
  isStatusLoading: false,
  isStatusError: null,
  statusList: [],
  isProfileLoading: false,
  isProfileError: null,
  profile: {},
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionConstants.GET_STATUS_REQUEST:
      return {
        ...state,
        isStatusLoading: true,
        isStatusError: null,
      };
    case ActionConstants.GET_STATUS_REQUEST_SUCCESS:
      return {
        ...state,
        isStatusLoading: false,
        statusList: action.data,
      };
    case ActionConstants.GET_STATUS_REQUEST_FAILURE:
      return {
        ...state,
        isStatusLoading: false,
        isStatusError: action.error,
      };
    case ActionConstants.UPDATE_STATUS_REQUEST:
      return {
        ...state,
        isStatusLoading: true,
        isStatusError: null,
      };
    case ActionConstants.UPDATE_STATUS_REQUEST_SUCCESS:
      return {
        ...state,
        isStatusLoading: false,
      };
    case ActionConstants.UPDATE_STATUS_REQUEST_FAILURE:
      return {
        ...state,
        isStatusLoading: false,
        isStatusError: action.error,
      };
    case ActionConstants.GET_PROFILE_REQUEST:
      return {
        ...state,
        isProfileLoading: true,
        isProfileError: null,
      };
    case ActionConstants.GET_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        isProfileLoading: false,
        profile: action.data,
      };
    case ActionConstants.GET_PROFILE_REQUEST_FAILURE:
      return {
        ...state,
        isProfileLoading: false,
        isProfileError: action.error,
      };
    case ActionConstants.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isProfileLoading: true,
        isProfileError: null,
      };
    case ActionConstants.UPDATE_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        isProfileLoading: false,
      };
    case ActionConstants.UPDATE_PROFILE_REQUEST_FAILURE:
      return {
        ...state,
        isProfileLoading: true,
        isProfileError: action.error,
      };
    default:
      return state;
  }
};

export default profileReducer;

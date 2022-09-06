import * as ActionConstants from "./action_constants";

const initState = {
  isLoading: false,
  isError: null,
  messages: [],
};

const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionConstants.GET_MESSAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case ActionConstants.GET_MESSAGES_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: action.data,
      };
    case ActionConstants.GET_MESSAGES_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.error,
      };
    default:
      return state;
  }
};

export default messagesReducer;

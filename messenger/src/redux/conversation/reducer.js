import * as ActionConstants from "./action_constants";

const initState = {
  isLoading: false,
  isError: null,
  conversations: [],
};

const conversationReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionConstants.GET_CONVERSATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        conversation: [],
      };
    case ActionConstants.GET_CONVERSATION_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        conversation: action.data,
      };
    case ActionConstants.GET_CONVERSATION_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.error,
      };
    case ActionConstants.SEARCH_CONVERSATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        conversation: [],
      };
    case ActionConstants.SEARCH_CONVERSATION_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        conversation: action.data,
      };
    case ActionConstants.SEARCH_CONVERSATION_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.error,
      };
    default:
      return state;
  }
};

export default conversationReducer;

import * as ActionConstants from "./action_constants";

const getConversationRequest = () => {
  return {
    type: ActionConstants.GET_CONVERSATION_REQUEST,
  };
};

const getConversationRequestSuccess = (data) => {
  return {
    type: ActionConstants.GET_CONVERSATION_REQUEST_SUCCESS,
    data: data,
  };
};

const getConversationRequestFailure = (error) => {
  return {
    type: ActionConstants.GET_CONVERSATION_REQUEST_FAILURE,
    error: error,
  };
};

export const GetConversation = (body) => (dispatch) => {
  dispatch(getConversationRequest());

  setTimeout(() => {
    dispatch(getConversationRequestSuccess(body));
  }, 3000);
};

const searchConversationRequest = () => {
  return {
    type: ActionConstants.SEARCH_CONVERSATION_REQUEST,
  };
};

const searchConversationRequestSuccess = (data) => {
  return {
    type: ActionConstants.GET_CONVERSATION_REQUEST_SUCCESS,
    data: data,
  };
};

const searchConversationRequestFailure = (error) => {
  return {
    type: ActionConstants.GET_CONVERSATION_REQUEST_FAILURE,
    error: error,
  };
};

export const SearchConversation = (searchQuery) => (dispatch) => {
  dispatch(searchConversationRequest());
  var data = [];
  dispatch(searchConversationRequestSuccess(data));
};

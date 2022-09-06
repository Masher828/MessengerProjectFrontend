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

import * as ActionConstants from "./action_constants";

const data = [
  {
    conversationId: "1",
    name: "Manish Sharma",
    lastMessage: "Hey How are you !!!",
    timeStamp: 1661669387,
    unreadCount: 2,
    messages: [
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hello How are you ?",
        time: "time",
      },
    ],
  },
  {
    conversationId: "2",
    name: "Masher Kumar",
    lastMessage: "Hey ",
    timeStamp: 1661669387,
    unreadCount: 2,
    messages: [
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
      {
        id: "1",
        senderId: "2",
        recentMessage: "Hi There ?",
        time: "time",
      },
      {
        id: "2",
        senderId: "10",
        recentMessage: "Bye ?",
        time: "time",
      },
    ],
  },
  {
    conversationId: "3",
    name: "Ramesh Kumar",
    lastMessage: "Hello How are you !!!",
    timeStamp: 1661669387,
    unreadCount: 2,
  },
  {
    conversationId: "4",
    name: "Raj",
    lastMessage: "Hi",
    timeStamp: 1661669387,
    unreadCount: 2,
  },
  {
    conversationId: "5",
    name: "Rakesh Sharma",
    lastMessage: "OKAY",
    timeStamp: 1661669387,
    unreadCount: 2,
  },
  {
    conversationId: "6",
    name: "Samay Sharma",
    lastMessage: "GTG",
    timeStamp: 1661669387,
    unreadCount: 2,
  },
  {
    conversationId: "7",
    name: "Rohit Chopra",
    lastMessage: "Take Care",
    timeStamp: 1661669387,
    unreadCount: 2,
  },
  {
    conversationId: "8",
    name: "Keshav Kohli",
    lastMessage: "Bye",
    timeStamp: 1661669387,
    status: "delivered",
  },
  {
    conversationId: "9",
    name: "Sandeep Ahuja",
    lastMessage: "Got it !",
    timeStamp: 1661669387,
    status: "pending",
  },
];

const getMessageRequest = () => {
  return {
    type: ActionConstants.GET_MESSAGES_REQUEST,
  };
};

const getMessageRequestSuccess = (data) => {
  return {
    type: ActionConstants.GET_MESSAGES_REQUEST_SUCCESS,
    data: data,
  };
};

const getMessageRequestFailure = (error) => {
  return {
    type: ActionConstants.GET_MESSAGES_REQUEST_FAILURE,
    error: error,
  };
};

export const GetMessages = (conversationId) => (dispatch) => {
  dispatch(getMessageRequest());

  const conversation = data
    .filter((conversation) => conversation.conversationId == conversationId)
    .map((conversation) => {
      return conversation;
    });

  dispatch(getMessageRequestSuccess(conversation[0]));
};

const searchMessageRequest = () => {
  return {
    type: ActionConstants.SEARCH_MESSAGES_REQUEST,
  };
};

const searchMessageRequestSuccess = (data) => {
  return {
    type: ActionConstants.SEARCH_MESSAGES_REQUEST_SUCCESS,
    data: data,
  };
};

const searchMessageRequestFailure = (error) => {
  return {
    type: ActionConstants.SEARCH_MESSAGES_REQUEST_FAILURE,
    error: error,
  };
};

export const SearchInConversation = (conversationId) => (dispatch) => {
  dispatch(searchMessageRequest());

  const conversation = data
    .filter((conversation) => conversation.conversationId == conversationId)
    .map((conversation) => {
      return conversation;
    });

  dispatch(searchMessageRequestSuccess(conversation[0]));
};

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import messagesReducer from "./messages/reducer";
import conversationReducer from "./conversation/reducer";
import profileReducer from "./profile/reducer";

const rootReducer = combineReducers({
  conversation: conversationReducer,
  messages: messagesReducer,
  profile: profileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

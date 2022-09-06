import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import CurrentUserData from "../components/current_user_data";
import SearchBox from "../components/search_box";
import Conversation from "../components/conversation";

const Conversations = () => {
  const conversations = [
    {
      conversationId: "1",
      name: "Manish Sharma",
      lastMessage: "Hey How are you !!!",
      timeStamp: 1661669387,
      unreadCount: 2,
    },
    {
      conversationId: "2",
      name: "Masher Kumar",
      lastMessage: "Hey ",
      timeStamp: 1661669387,
      unreadCount: 2,
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

  return (
    <Box p={7} className="wrapper">
      <CurrentUserData />
      <SearchBox />
      <Box as="div" className="content">
        {conversations.map((conversation) => {
          return (
            <Conversation
              key={conversation.conversationId}
              conversationId={conversation.conversationId}
              name={conversation.name}
              lastMessage={conversation.lastMessage}
              timeStamp={conversation.timeStamp}
              unreadCount={conversation.unreadCount}
              status={conversation.status}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Conversations;

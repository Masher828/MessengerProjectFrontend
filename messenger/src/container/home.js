import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Flex } from "@chakra-ui/react";
import Conversations from "./conversation_screen";
import ChatScreen from "./chat_screen";
import { GetConversation } from "../redux/conversation/action_creator";

const Home = () => {
  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(GetConversation("data"));
  }, []);
  return (
    <Box>
      <Flex direction={"row"} alignItems="wrap" height="calc(100vh)">
        <Box width={"25%"} bg="gray.100">
          <Conversations />
        </Box>
        <Box width={"75%"}>
          <ChatScreen />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;

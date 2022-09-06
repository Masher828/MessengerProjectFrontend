import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  GridItem,
  SimpleGrid,
  VStack,
  SlideFade,
} from "@chakra-ui/react";
import ChatHeader from "../components/chat_header";
import Chats from "../components/chats";
import MessageBox from "../components/message_box";
import UserInfo from "../components/user_info";
import { useSelector } from "react-redux";

const ChatScreen = () => {
  const [showUserDetails, toggleUserDetails] = useState(false);

  const messageData = useSelector((state) => state.messages);

  useEffect(() => {
    console.log(messageData);
  });

  return (
    <>
      {messageData.messages.messages && !messageData.isLoading ? (
        <SimpleGrid columns={3} className="wrapper">
          <GridItem colSpan={showUserDetails ? 2 : 3}>
            <VStack direction={"column"} align="left">
              <ChatHeader
                name={messageData.messages.name}
                openUserDetails={toggleUserDetails}
              />
              <Divider />
              <Chats
                className="content"
                messages={messageData.messages.messages}
              />

              <MessageBox
                idName={
                  showUserDetails
                    ? "messageBoxUserInfoOpened"
                    : "messageBoxUserInfoClosed"
                }
              />
            </VStack>
          </GridItem>
          {showUserDetails ? (
            <SlideFade in={showUserDetails} offsetY="20px">
              <UserInfo openUserDetails={toggleUserDetails} />
            </SlideFade>
          ) : null}
        </SimpleGrid>
      ) : null}
    </>
  );
};

export default ChatScreen;

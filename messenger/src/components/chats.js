import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const Chats = ({ messages }) => {
  const loggedInUserId = "10";

  return (
    <Box className="content1" style={{ maxHeight: "800px" }}>
      <List>
        {messages
          ? messages.map((message) => {
              return (
                <ListItem key={message.id}>
                  {message.senderId != loggedInUserId ? (
                    <Flex dir={"column"} justifyContent={"flex-start"}>
                      <Box
                        bg={"blue.300"}
                        pl={2}
                        pr={2}
                        ml={2}
                        borderRadius="lg"
                        fontSize={20}>
                        {message.recentMessage}
                        <br></br>
                        <Text fontSize={13} float={"right"} color="gray.600">
                          {message.time}
                        </Text>
                      </Box>
                    </Flex>
                  ) : (
                    <Flex dir={"column"} justifyContent={"flex-end"}>
                      <Box
                        as="p"
                        bg={"gray.100"}
                        p={3}
                        mr={2}
                        borderRadius="lg">
                        {message.recentMessage}
                      </Box>
                    </Flex>
                  )}
                </ListItem>
              );
            })
          : null}
      </List>
    </Box>
  );
};

export default Chats;

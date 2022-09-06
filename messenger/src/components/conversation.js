import React from "react";

import {
  Box,
  WrapItem,
  Avatar,
  VStack,
  Heading,
  Text,
  AvatarGroup,
  SimpleGrid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { BsCheck2, BsCheck2All, BsFillCheckCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { GetMessages } from "../redux/messages/action_creator";

const Conversation = ({
  conversationId,
  name,
  timeStamp,
  unreadCount,
  lastMessage,
  status,
}) => {
  const dispatch = useDispatch(conversationId);

  const getMessages = () => {
    dispatch(GetMessages(conversationId));
  };

  return (
    <Box
      onClick={() => getMessages(conversationId)}
      columnGap={4}
      p={1}
      mb={2}
      _hover={{ bg: "gray.200", borderRadius: 10, boxShadow: "md" }}>
      <SimpleGrid columns={5}>
        <GridItem colSpan={1}>
          <WrapItem>
            <Avatar
              size={"lg"}
              name={name}
              src="https://bit.ly/dan-abramov"></Avatar>
          </WrapItem>
        </GridItem>
        <GridItem colStart={2} colEnd={6}>
          <VStack alignItems={"left"}>
            <SimpleGrid columns={5}>
              <GridItem colSpan={4}>
                <Heading fontSize={15} color="blue.300">
                  {name}
                </Heading>
              </GridItem>
              <GridItem>
                <Text fontSize={10} color="gray">
                  {new Date(timeStamp * 1000).toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </Text>
              </GridItem>
            </SimpleGrid>

            <SimpleGrid columns={6}>
              <GridItem colSpan={5}>
                <Text>{lastMessage}</Text>
              </GridItem>
              <GridItem justifyContent="flex-end">
                {unreadCount ? (
                  <AvatarGroup float={"right"} spacing="1rem">
                    <Avatar
                      bg="blue.300"
                      size={"xs"}
                      icon={
                        <Text color="white" fontSize={15}>
                          {unreadCount}
                        </Text>
                      }
                    />
                  </AvatarGroup>
                ) : status == "delivered" ? (
                  <Icon as={BsCheck2All} float={"right"} />
                ) : status == "read" ? (
                  <Icon as={BsFillCheckCircleFill} float={"right"} />
                ) : status == "pending" ? (
                  <Icon as={BsCheck2} float={"right"} />
                ) : null}
              </GridItem>
            </SimpleGrid>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Conversation;

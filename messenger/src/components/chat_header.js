import { Avatar, Flex, Heading, Icon, Spacer, Box } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const ChatHeader = ({ name, openUserDetails }) => {
  return (
    <Flex
      direction={"row"}
      p={2}
      backgroundColor={"blue.300"}
      borderRadius="md">
      <Flex
        direction={"row"}
        columnGap={5}
        p={2}
        borderRadius={"lg"}
        _hover={{ cursor: "pointer", backgroundColor: "gray.200" }}
        onClick={() => openUserDetails(true)}>
        <Avatar name={name} src="https://bit.ly/dan-abramov"></Avatar>
        <Heading>{name}</Heading>
      </Flex>
      <Spacer />
      <Icon
        sizebox={10}
        as={BsSearch}
        boxSize={12}
        p={2}
        mt={1}
        borderRadius={"lg"}
        _hover={{ cursor: "pointer", backgroundColor: "gray.200" }}
      />
    </Flex>
  );
};

export default ChatHeader;

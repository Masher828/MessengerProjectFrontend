import {
  Avatar,
  Flex,
  Heading,
  Icon,
  Spacer,
  Box,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { SearchInConversation } from "../redux/messages/action_creator";

const ChatHeader = ({ name, openUserDetails }) => {
  const [search, toggleSearch] = useState(false);

  const dispatch = useDispatch();

  const searchInConversation = (e) => {
    if (e.target.value.length > 2) {
      dispatch(SearchInConversation("1"));
    }
  };

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
        onClick={() => openUserDetails(true)}>
        <Avatar name={name} src="https://bit.ly/dan-abramov"></Avatar>
        <Heading>{name}</Heading>
      </Flex>
      <Spacer />
      {search ? (
        <Input
          width={"20%"}
          type="text"
          p={2}
          mt={2}
          mr={2}
          onChange={searchInConversation}
          borderColor="gray.300"
          _hover={{ borderColor: "gray.300" }}
        />
      ) : null}

      <Icon
        sizebox={10}
        as={BsSearch}
        boxSize={12}
        p={2}
        mt={1}
        borderRadius={"lg"}
        onClick={() => toggleSearch(!search)}
        _hover={{ cursor: "pointer", backgroundColor: "gray.200" }}
      />
    </Flex>
  );
};

export default ChatHeader;

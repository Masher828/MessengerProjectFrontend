import React from "react";

import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Spacer,
  Divider,
} from "@chakra-ui/react";

import { MdAttachFile } from "react-icons/md";
import { BsEmojiLaughing } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
const MessageBox = ({ idName }) => {
  return (
    <Box id={idName}>
      <Divider mb={3} />
      <InputGroup>
        <InputLeftElement
          _hover={{ bg: "gray.100", borderRadius: "20" }}
          children={<Icon as={BsEmojiLaughing} />}
        />
        <InputRightElement
          pointerEvents="none"
          children={
            <>
              <Icon as={MdAttachFile} mr={5} />
              <Spacer />
              <Text as={"a"} mt={1}>
                <Icon boxSize={10} _hover={{ bg: "gray.100" }} as={IoMdSend} />
              </Text>
            </>
          }
        />
        <Input borderRadius={20} placeholder="Write Something" />
      </InputGroup>
    </Box>
  );
};

export default MessageBox;

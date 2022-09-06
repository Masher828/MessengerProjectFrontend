import React from "react";

import {
  Flex,
  WrapItem,
  Avatar,
  AvatarBadge,
  Heading,
  useDisclosure,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { BsPencil } from "react-icons/bs";
import Profile from "./profile";
import StatusModal from "./status_modal";
const CurrentUserData = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileManager = useDisclosure();

  const currentUserData = { id: "1", name: "Manish Sharma", statusId: "1" };

  return (
    <Flex dir="row">
      <Flex columnGap={4} mb={3}>
        <WrapItem>
          <Avatar
            size={"md"}
            name="Manish Sharma"
            src="https://bit.ly/dan-abramov">
            <AvatarBadge
              boxSize="1em"
              bg="green.500"
              _hover={{ cursor: "pointer" }}
              onClick={onOpen}
            />
          </Avatar>
        </WrapItem>
        <Heading fontSize={20} color="blue.300">
          {currentUserData.name}
        </Heading>
      </Flex>
      <Spacer />
      <Icon
        as={BsPencil}
        _hover={{ cursor: "pointer" }}
        onClick={profileManager.onOpen}
      />
      <StatusModal
        isOpen={isOpen}
        onClose={onClose}
        statusId={currentUserData.statusId}
      />
      <Profile
        isOpen={profileManager.isOpen}
        onClose={profileManager.onClose}
      />
    </Flex>
  );
};

export default CurrentUserData;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormControl,
  Input,
  Button,
  ModalFooter,
  FormLabel,
  SimpleGrid,
  GridItem,
  FormErrorMessage,
  useEditable,
} from "@chakra-ui/react";

import {
  GetProfile,
  UpdateProfile as UpdateProfileAction,
} from "../redux/profile/action_creator";

const Profile = ({ isOpen, onClose }) => {
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(GetProfile(12));
  }, []);

  useEffect(() => {
    setFormData({
      fname: profile.firstName,
      lname: profile.lastName,
      email: profile.email,
    });
  }, [profile.firstName]);

  const [formData, setFormData] = useState({
    fname: profile.firstName,
    lname: profile.lastName,
    email: profile.email,
  });

  const UpdateProfile = () => {
    if (formData.fname == null || formData.fname.length == 0) {
      setError("First Name should not be empty");
      return;
    }
    dispatch(
      UpdateProfileAction({
        fname: formData.fname,
        lname: formData.lname,
        email: profile.email,
      })
    );
    onClose();
  };
  const updateValue = (e) => {
    if (e.target.name == "fname") {
      setError(null);
      setFormData({ ...formData, fname: e.target.value });
    } else if (e.target.name == "lname") {
      setFormData({ ...formData, lname: e.target.value });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <SimpleGrid
            alignItems={"center"}
            columns={2}
            columnGap={5}
            rowGap={3}>
            <GridItem>
              <FormControl isRequired isInvalid={error}>
                <FormLabel>First Name</FormLabel>
                <Input
                  type={"text"}
                  name="fname"
                  value={formData.fname}
                  onChange={updateValue}
                />
                {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type={"text"}
                  name="lname"
                  value={formData.lname}
                  onChange={updateValue}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  isDisabled
                  type={"email"}
                  name="email"
                  value={formData.email}
                  onChange={updateValue}
                />
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            _hover={{ background: "blue.300" }}
            onClick={UpdateProfile}>
            Update
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Profile;

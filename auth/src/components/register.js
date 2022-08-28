import {
  Container,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  FormErrorMessage,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupUser } from "../redux/auth_app/action_creator";

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (formData.fname.length < 2) {
      setErrorFor("fname");
      setError("Please enter valid First Name");
    } else if (formData.email.length < 4) {
      setErrorFor("email");
      setError("Please enter valid Email");
    } else if (formData.password.length < 8) {
      setErrorFor("password");
      setError("minimum length 8");
    } else if (formData.cpassword != formData.password) {
      setErrorFor("cpassword");
      setError("password doesn't match");
    } else {
      setErrorFor("");
      setError("");
    }

    dispatch(SignupUser(formData));
  };

  const [error, setError] = useState("");
  const [errorFor, setErrorFor] = useState("");

  const authState = useSelector((state) => state.auth);

  const updateValue = (e) => {
    if (e.target.name == "fname") {
      setFormData({ ...formData, fname: e.target.value });
    } else if (e.target.name == "lname") {
      setFormData({ ...formData, lname: e.target.value });
    } else if (e.target.name == "email") {
      setFormData({ ...formData, email: e.target.value });
    } else if (e.target.name == "password") {
      setFormData({ ...formData, password: e.target.value });
    } else if (e.target.name == "cpassword") {
      setFormData({ ...formData, cpassword: e.target.value });
    }
  };
  return (
    <Container>
      <Heading textAlign={"center"}>Register</Heading>
      <SimpleGrid alignItems={"center"} columns={2} columnGap={5} rowGap={3}>
        <GridItem>
          <FormControl isInvalid={errorFor == "fname"} isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type={"text"}
              name="fname"
              value={formData.fname}
              onChange={updateValue}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={errorFor == "lname"}>
            <FormLabel>Last Name</FormLabel>
            <Input
              type={"text"}
              name="lname"
              value={formData.lname}
              onChange={updateValue}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isInvalid={errorFor == "email"} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type={"email"}
              name="email"
              value={formData.email}
              onChange={updateValue}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={errorFor == "password"} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type={"password"}
              name="password"
              value={formData.password}
              onChange={updateValue}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={errorFor == "cpassword"} isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type={"password"}
              name="cpassword"
              value={formData.cpassword}
              onChange={updateValue}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          {authState.isLoading ? (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.300"
                color="blue.500"
                size="xl"
                mt={3}
              />
            </Center>
          ) : (
            <FormControl isInvalid={true}>
              {errorFor == "" && <FormErrorMessage>{error}</FormErrorMessage>}

              <Button
                mt={3}
                size={"lg"}
                width={"full"}
                _hover={{ background: "blue.300" }}
                onClick={handleSubmit}>
                Resgister
              </Button>
            </FormControl>
          )}
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default Register;

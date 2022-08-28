import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FormControl,
  Input,
  FormLabel,
  Container,
  FormErrorMessage,
  Heading,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { LoginUser } from "../redux/auth_app/action_creator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const handleSubmit = () => {
    if (email.length < 4 || password.length < 8) {
      setError("invalid email id & password");
    } else {
      const data = { email: email, password: password };
      setError("");
      dispatch(LoginUser(data));
    }
  };

  useEffect(() => {
    if (authState.isError != "") {
      setError(authState.isError);
    }
  }, [authState.isError]);

  return (
    <Container>
      <Heading textAlign={"center"}>Login</Heading>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormErrorMessage>Hello</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
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
          <FormErrorMessage>{error}</FormErrorMessage>
          <Button
            mt={3}
            size={"lg"}
            width={"full"}
            _hover={{ background: "blue.300" }}
            onClick={handleSubmit}>
            Login
          </Button>
        </FormControl>
      )}
    </Container>
  );
};
export default Login;

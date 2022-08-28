import { Text, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

const Auth = () => {
  const [showLogin, toggleShowLogin] = useState(false);

  const toggle = () => {
    toggleShowLogin(!showLogin);
  };

  return (
    <>
      {showLogin ? (
        <>
          <Login />
          <Text mt={4} textAlign={"center"}>
            New Around here ?{" "}
            <Link color={"blue.500"} onClick={toggle}>
              Register
            </Link>
          </Text>
        </>
      ) : (
        <>
          <Register />
          <Text mt={4} textAlign={"center"}>
            Already have an account ?{" "}
            <Link color={"blue.500"} onClick={toggle}>
              Login
            </Link>
          </Text>
        </>
      )}
      <Text></Text>
    </>
  );
};

export default Auth;

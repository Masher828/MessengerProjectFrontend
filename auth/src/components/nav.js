import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const style = {
    background: "blue.100",
    // color: "teal.500",
  };
  const navItemsName = ["Home", "About Us", "Contact Us", "Login"];
  const navItemsLink = ["/", "/aboutus", "/contactus", "/login"];
  return (
    <Box p={3} bg="blue.200">
      <Breadcrumb separator="">
        {navItemsName.map((item, i) => {
          return (
            <BreadcrumbItem key={item}>
              <BreadcrumbLink
                as={Link}
                to={navItemsLink[i]}
                fontSize={25}
                _hover={style}
                rounded={"md"}
                p={1}>
                {item}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Box>
  );
};

export default Nav;

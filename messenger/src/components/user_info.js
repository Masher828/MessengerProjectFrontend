import React from "react";
import {
  GridItem,
  Grid,
  Box,
  Avatar,
  Center,
  Heading,
  CloseButton,
  Fade,
} from "@chakra-ui/react";

const UserInfo = ({ openUserDetails }) => {
  return (
    <>
      <Box bg={"gray.100"} height="calc(100vh)">
        <CloseButton
          size="lg"
          float={"right"}
          onClick={() => openUserDetails(false)}
        />
        <Box pt={10}>
          <Center>
            <Grid columns={1} rowGap={3}>
              <GridItem>
                <Center>
                  <Avatar
                    name={"Manish Sharma"}
                    src="https://bit.ly/dan-abramov"
                    boxSize={40}
                  />
                </Center>
              </GridItem>

              <GridItem>
                <Heading fontSize={40}>Manish Sharma</Heading>
              </GridItem>
            </Grid>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;

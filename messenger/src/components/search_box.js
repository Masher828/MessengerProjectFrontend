import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const SearchBox = () => {
  return (
    <InputGroup mb={10} mt={5}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input bg={"white"} borderRadius={20} />
    </InputGroup>
  );
};

export default SearchBox;

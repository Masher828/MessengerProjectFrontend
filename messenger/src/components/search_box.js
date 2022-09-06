import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { SearchConversation } from "../redux/conversation/action_creator";
const SearchBox = () => {
  const dispatch = useDispatch();

  const searchConversation = (e) => {
    if (e.target.value.length > 2) {
      dispatch(SearchConversation(e.target.value));
    }
  };
  return (
    <InputGroup mb={10} mt={5}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input bg={"white"} borderRadius={20} onChange={searchConversation} />
    </InputGroup>
  );
};

export default SearchBox;

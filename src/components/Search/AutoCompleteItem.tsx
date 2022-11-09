import React from "react";
import styled from "styled-components";

const AutoCompleteItem = ({ item, isSelected }: { item: string[]; isSelected: boolean }) => {
  console.log(isSelected);
  const [str1, key, str2] = item;
  return (
    <StyledAutoItem isSelected={isSelected}>
      <p>
        {str1}
        <b>{key}</b>
        {str2}
      </p>
    </StyledAutoItem>
  );
};

export default AutoCompleteItem;
const StyledAutoItem = styled.li<{ isSelected: boolean }>`
  all: unset;
  color: ${({ isSelected }) => (isSelected ? "blue" : "gray")};
`;

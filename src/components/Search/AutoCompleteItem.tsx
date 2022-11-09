import React from "react";
import styled from "styled-components";

type AutoCompleteItemProps = {
  item: string[];
  isSelected: boolean;
};
const AutoCompleteItem = ({ item, isSelected }: AutoCompleteItemProps) => {
  const [splitedStrLeft, key, splitedStrRight] = item;
  return (
    <StyledAutoItem isSelected={isSelected}>
      <p>
        {splitedStrLeft}
        <b>{key}</b>
        {splitedStrRight}
      </p>
    </StyledAutoItem>
  );
};

const StyledAutoItem = styled.li<{ isSelected: boolean }>`
  padding: 0 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? "#e6e7e792" : "#fff")};
`;

export default React.memo(AutoCompleteItem);

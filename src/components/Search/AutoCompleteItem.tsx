import React from "react";
import styled from "styled-components";

type AutoCompleteItemProps = {
  item: string[];
  isSelected: boolean;
};
const AutoCompleteItem = ({ item, isSelected }: AutoCompleteItemProps) => {
  const [splitedLeftText, boldText, splitedRightText] = item;
  return (
    <StyledAutoItem isSelected={isSelected}>
      <p>
        {splitedLeftText}
        <b>{boldText}</b>
        {splitedRightText}
      </p>
    </StyledAutoItem>
  );
};

const StyledAutoItem = styled.li<{ isSelected: boolean }>`
  padding: 0 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? "#e6e7e792" : "#fff")};
`;

export default React.memo(AutoCompleteItem);

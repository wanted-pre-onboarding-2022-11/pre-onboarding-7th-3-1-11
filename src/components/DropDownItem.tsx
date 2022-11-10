import React from "react";
import { BiSearch } from "react-icons/bi";
import { formatListItem } from "@/lib/util/formatListItem";
import styled from "styled-components";

interface DropDownItemProps {
  inputValue: string;
  sickNm: string;
  className: string;
}

const DropDownItem = ({ sickNm, inputValue, className }: DropDownItemProps) => {
  const formatSickNm = formatListItem(sickNm, inputValue);
  return (
    <DropDownItemStyled className={className}>
      <BiSearch />
      {formatSickNm}
    </DropDownItemStyled>
  );
};

const DropDownItemStyled = styled.li`
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  overflow-wrap: break-word;
  &.selected {
    background-color: lightgray;
  }
  & > svg {
    font-size: 1.2rem;
    margin-right: 10px;
    color: ${({ theme }) => theme.color.gray};
  }
  & > strong {
    font-weight: 700;
  }
`;

export default DropDownItem;

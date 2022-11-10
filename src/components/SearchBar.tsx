import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchValue } from "@/lib/states/searchValue";
import { selectedIndex } from "@/lib/states/selectedIndex";
import { searchResults } from "@/lib/states/searchResults";

const SearchBar = () => {
  const [inputValue, setInputValue] = useRecoilState(searchValue);
  const [selected, setSelected] = useRecoilState(selectedIndex);
  const searchResultsList = useRecoilValue(searchResults);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSelected(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "ArrowUp" && selected > -1) {
      setSelected((prev) => prev - 1);
    }
    if (event.key === "ArrowDown" && selected < searchResultsList.length - 1) {
      setSelected((prev) => prev + 1);
    }
    if (event.key === "Enter" && selected >= 0) {
      setInputValue(searchResultsList[selected].sickNm);
      setSelected(-1);
    }
  };

  return (
    <SearchFormStyled onSubmit={(event) => event.preventDefault()}>
      <SearchIcon />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="질환명을 입력해 주세요"
      />
      <ButtonStyled type="submit">검색</ButtonStyled>
    </SearchFormStyled>
  );
};

export default SearchBar;

const SearchFormStyled = styled.form`
  width: 40rem;
  height: 3rem;
  position: relative;
  & > input {
    width: 100%;
    height: 100%;
    padding: 12px;
    padding-left: 45px;
    padding-right: 75px;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 42px;
    border: 1px solid ${({ theme }) => theme.color.skyblue};
    &:focus {
      outline: none;
    }
  }
`;

const SearchIcon = styled(BiSearch)`
  font-size: 1.3rem;
  position: absolute;
  top: 13px;
  left: 16px;
  color: ${({ theme }) => theme.color.gray};
`;

const ButtonStyled = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 3rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  border: 0;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;
  padding: 12px 20px;
`;

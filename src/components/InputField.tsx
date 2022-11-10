import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { InputProps } from "@/types";

const InputField = ({
  isSearchMode,
  handleSearchMode,
  handleKeyArrow,
  inputData,
  handleChangeKeyword,
}: InputProps): React.ReactElement => {
  return (
    <InputFieldContainer>
      {!isSearchMode && (
        <InputDescription>
          <BsSearch />
          <div>질환명을 입력해 주세요.</div>
        </InputDescription>
      )}
      <InputData
        value={inputData}
        onChange={handleChangeKeyword}
        onKeyDown={handleKeyArrow}
        onFocus={() => handleSearchMode("Focus")}
        onBlur={() => handleSearchMode("Blur")}
      />
      <SearchButton>검색</SearchButton>
    </InputFieldContainer>
  );
};

const InputFieldContainer = styled.div`
  position: relative;
  width: 500px;
  height: 70px;
  border-radius: 50px;
  border: 1px solid #eee;
  padding: 15px 20px;
`;

const InputDescription = styled.div`
  color: #555;
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;

  > div {
    margin-left: 20px;
  }
`;

const InputData = styled.input`
  width: 370px;
  height: 40px;
  border: none;
  outline: none;
  background: none;
  z-index: 1;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 1px;
  border-radius: 0 50px 50px 0;
  height: 68px;
  width: 100px;
  border: none;
  outline: none;
  color: #fff;
  background: #007be9;
  cursor: pointer;

  &:hover {
    background: #118cfa;
  }
`;

export default InputField;

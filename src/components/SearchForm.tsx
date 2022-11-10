import React, { useState, useRef, ChangeEvent } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import ResultField from "./ResultField";
import { useDispatch } from "react-redux";
import { getList } from "@/store/cacheSlice";
import { AppDispatch } from "@/store/store";

const SearchForm = () => {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [inputData, setInputData] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const autoRef = useRef<HTMLUListElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value;
    setInputData(target);
    dispatch(getList(target));
  };

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        setCurrentIndex(currentIndex + 1);
        if (autoRef.current?.childElementCount === currentIndex + 1) setCurrentIndex(0);
        break;
      case "ArrowUp":
        setCurrentIndex(currentIndex - 1);
        if (currentIndex === 0) setCurrentIndex(0);

        break;
      case "Enter":
        // TODO: 엔터시 자동완성 기능 완성하기
        console.log(autoRef.current);
        setInputData("Test");
        break;
    }
  };

  const handleSearchMode = (mode: string) => {
    if (inputData.length !== 0) setIsSearchMode(true);
    else setIsSearchMode((prev) => !prev);

    if (mode === "Blur") {
      setCurrentIndex(-1);
    }
  };

  const handleClickItem = (target: string) => {
    setInputData(target);
  };

  return (
    <SearchFormContainer>
      <div>
        <InputField
          isSearchMode={isSearchMode}
          handleSearchMode={handleSearchMode}
          handleKeyArrow={handleKeyArrow}
          inputData={inputData}
          handleChangeKeyword={handleChangeKeyword}
        ></InputField>
        <ResultField
          autoRef={autoRef}
          currentIndex={currentIndex}
          inputData={inputData}
          handleClickItem={handleClickItem}
        />
      </div>
    </SearchFormContainer>
  );
};

const SearchFormContainer = styled.div`
  position: relative;
`;

export default SearchForm;

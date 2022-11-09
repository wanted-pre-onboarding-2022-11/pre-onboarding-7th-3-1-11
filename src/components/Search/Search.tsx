import { getKeyWordResponse } from "@/api/SearchAPI";
import { searchAPI } from "@/App";
import { useDebounce } from "@/hooks/useDebounce";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import AutoCompleteList from "./AutoCompleList";

const Search = () => {
  const [autoCompleteItems, setAutoCompleteItems] = useState<getKeyWordResponse[]>([]);
  const [diseaseName, setDiseaseName] = useState("");
  const debounceValue = useDebounce(diseaseName, 300);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiseaseName(e.currentTarget.value);
  };

  useEffect(() => {
    const fetchAutoComplete = async (keyword: string) => {
      const { data } = await searchAPI.getKeyword(keyword);
      console.log(data);
      setAutoCompleteItems(data);
    };

    if (debounceValue) {
      fetchAutoComplete(debounceValue);
    }
  }, [debounceValue]);

  return (
    <S.SearchSection>
      <h3>국내 모든 임상시험 검색하고 온라인으로 참여하기</h3>
      <S.SearchContainer>
        <input placeholder="질환명을 입력해 주세요." value={diseaseName} onChange={onChangeInput} />
      </S.SearchContainer>
      <AutoCompleteList autoCompleteItems={autoCompleteItems} debounceValue={debounceValue} />
    </S.SearchSection>
  );
};

const S = {
  SearchSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(202 233 255);
    height: 500px;
  `,
  SearchContainer: styled.div`
    width: 100%;
    max-width: 320px;
    input {
      box-sizing: border-box;
      width: 100%;
      border-radius: 42px;
      border: 0;
      border-color: #c2c8ce;
      background-color: #ffffff;
      padding: 12px 20px;
      box-shadow: 0px 2px 4px rgb(30 32 37 / 10%);
    }
  `,
};

export default Search;

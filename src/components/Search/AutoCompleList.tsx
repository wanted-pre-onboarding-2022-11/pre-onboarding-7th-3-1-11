import { KeyWordTypes } from "@/types";
import { formatToBold } from "@/utils/format";
import React, { useEffect } from "react";
import styled from "styled-components";
import AutoCompleteItem from "./AutoCompleteItem";

type AutoCompleteItemProps = {
  autoCompleteItems: KeyWordTypes[];
  debounceValue: string;
  handleKeyTabIndex: (e: KeyboardEvent) => void;
  tabIndex: number;
};
const AutoCompleteList = ({
  tabIndex,
  handleKeyTabIndex,
  autoCompleteItems,
  debounceValue,
}: AutoCompleteItemProps) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyTabIndex);
    return () => window.removeEventListener("keydown", handleKeyTabIndex);
  });

  return (
    <S.Container>
      <h5>추천검색어</h5>
      <S.AutoCompleteContainer>
        {autoCompleteItems.length > 0 ? (
          formatToBold({ list: autoCompleteItems, key: debounceValue }).map((item, index) => {
            return <AutoCompleteItem key={index} item={item} isSelected={tabIndex === index} />;
          })
        ) : (
          <p>"추천 검색어가 없습니다"</p>
        )}
      </S.AutoCompleteContainer>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    background-color: #fff;
    border-radius: 20px;
    padding: 0 1rem;
  `,
  AutoCompleteContainer: styled.ul`
    display: flex;
    flex-direction: column;
  `,
};
export default AutoCompleteList;

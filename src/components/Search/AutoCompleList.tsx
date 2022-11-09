import { getKeyWordResponse } from "@/api/SearchAPI";
import { useTagIndex } from "@/hooks/useTabIndex";
import { formatToBold } from "@/utils/format";
import React from "react";
import styled from "styled-components";
import AutoCompleteItem from "./AutoCompleteItem";

type AutoCompleteItemProps = {
  autoCompleteItems: getKeyWordResponse[];
  debounceValue: string;
};
const AutoCompleteList = ({ autoCompleteItems, debounceValue }: AutoCompleteItemProps) => {
  const { tabIndex } = useTagIndex(autoCompleteItems.length);

  return (
    <div>
      <h5>추천검색어</h5>
      <S.AutoCompleteContainer>
        {formatToBold({ list: autoCompleteItems, key: debounceValue }).map((item, index) => {
          return <AutoCompleteItem key={index} item={item} isSelected={tabIndex === index} />;
        })}
      </S.AutoCompleteContainer>
    </div>
  );
};

const S = {
  AutoCompleteContainer: styled.ul`
    display: flex;
    flex-direction: column;
  `,
};
export default AutoCompleteList;

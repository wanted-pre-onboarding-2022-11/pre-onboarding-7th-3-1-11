import { getAutoCompletedList } from "@/apis";
import SearchBar from "@/components/SearchBar";
import AutoCompletedList, { AutoCompletedItem } from "@/components/AutoCompletedList";
import useSearch from "@/hooks/useSearch";
import { ChangeEvent } from "react";
import styled from "styled-components";

const SearchPage = () => {
  const { searchKeyword, saveKeyword, searchResult } =
    useSearch<AutoCompletedItem>(getAutoCompletedList);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    saveKeyword(target.value);
  };

  return (
    <S.Container>
      <SearchBar onChange={handleInputChange} />
      <AutoCompletedList keyword={searchKeyword || ""} autoCompletedList={searchResult} />
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
};

export default SearchPage;

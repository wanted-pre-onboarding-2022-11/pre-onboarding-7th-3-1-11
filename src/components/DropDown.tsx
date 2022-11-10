import React from "react";
import styled from "styled-components";
import useGetSearshList from "../lib/hooks/useGetSearshList";
import { useRecoilValue } from "recoil";
import { selectedIndex } from "@/lib/states/selectedIndex";
import DropDownItem from "./DropDownItem";

const DropDown = () => {
  const { inputValue, searchResultsList } = useGetSearshList();
  const selected = useRecoilValue(selectedIndex);
  const DESCRIPTION = searchResultsList.length ? "추천 검색어" : "검색어 없음";

  return inputValue ? (
    <Container>
      <p>{DESCRIPTION}</p>
      {searchResultsList.map(({ sickCd, sickNm }, idx) => (
        <DropDownItem
          key={sickCd}
          className={selected === idx ? "selected" : ""}
          sickNm={sickNm}
          inputValue={inputValue}
        />
      ))}
    </Container>
  ) : null;
};

export default DropDown;

const Container = styled.ul`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.white};
  width: 40rem;
  margin-top: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  & > p {
    font-size: 0.8rem;
    padding-left: 1rem;
    color: ${({ theme }) => theme.color.gray};
    margin-bottom: 5px;
  }
`;

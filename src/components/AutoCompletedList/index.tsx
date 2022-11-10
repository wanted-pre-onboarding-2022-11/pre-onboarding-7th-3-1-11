import styled from "styled-components";
import AutoCompletedItem from "./AutocompletedItem";

export interface AutoCompletedItem {
  sickCd: string;
  sickNm: string;
}

interface AutoCompletedListProps {
  keyword: string;
  autoCompletedList: AutoCompletedItem[];
}

const AutoCompletedList = ({ keyword, autoCompletedList }: AutoCompletedListProps) => (
  <S.List>
    {autoCompletedList &&
      autoCompletedList.map((value) => (
        <AutoCompletedItem key={value.sickCd} keyword={keyword} completedWord={value.sickNm} />
      ))}
  </S.List>
);

const S = {
  List: styled.ul`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  `,
  Item: styled.li`
    cursor: pointer;
  `,
};

export default AutoCompletedList;

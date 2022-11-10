import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { ResultProps } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { CacheType } from "@/store/cacheSlice";

const ResultField = ({
  autoRef,
  currentIndex,
  handleClickItem,
}: // inputData,
ResultProps): React.ReactElement => {
  const searchList = useSelector<RootState, CacheType[]>((state) => state.cache.datas);

  return (
    <ResultFieldContainer>
      <ResultFieldTitle>추천 검색어</ResultFieldTitle>
      <ResultContentWrap ref={autoRef}>
        {searchList[searchList.length - 1].data.map((e, i) => (
          <ResultFieldContent
            key={e.sickCd}
            isFocus={currentIndex === i}
            name={e.sickNm}
            onClick={() => handleClickItem(e.sickNm)}
          >
            <BsSearch />
            <span>{e.sickNm}</span>
          </ResultFieldContent>
        ))}
      </ResultContentWrap>
    </ResultFieldContainer>
  );
};

const ResultFieldContainer = styled.div`
  position: absolute;
  width: 500px;
  top: 100px;
  left: 0;
  border: 1px solid #eee;
  border-radius: 20px;
`;

const ResultFieldTitle = styled.div`
  font-size: 12px;
  color: #555;
  padding: 20px 20px 0 20px;
  margin-bottom: 10px;
`;

const ResultContentWrap = styled.ul`
  > li:last-child {
    margin-bottom: 20px;
  }
`;

const ResultFieldContent = styled.li<{ isFocus: boolean; name: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  background: ${(props) => (props.isFocus ? "#eee" : "none")};

  &:hover {
    background: #eee;
  }

  > span {
    margin-left: 13px;
  }
`;

export default ResultField;

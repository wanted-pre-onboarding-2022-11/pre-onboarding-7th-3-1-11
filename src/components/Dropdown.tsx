import React from "react";
import { Sick } from "@/app/slices/sickSlice";
import { boldQuery } from "@/utils/boldQuery";
import styled from "styled-components";

interface IProps {
  searchQuery: string;
  data: Sick[];
}

const Dropdown = ({ searchQuery, data }: IProps) => {
  return (
    <S.Dropdown>
      {!searchQuery && !data.length && <span>질환명을 입력해 주세요.</span>}

      {searchQuery && data.length !== 0 && (
        <>
          <h6>추천 검색어</h6>
          <ul>
            {data.map((item) => (
              <li key={item.sickCd}>🔎 {boldQuery(item.sickNm, searchQuery)}</li>
            ))}
          </ul>
        </>
      )}

      {searchQuery && !data.length && <span>결과가 없습니다.</span>}
    </S.Dropdown>
  );
};

const S = {
  Dropdown: styled.div`
    position: absolute;
    top: 350px;

    width: 490px;
    max-height: 490px;
    padding: 24px 0;
    background-color: #fff;

    overflow-y: overlay;
    &::-webkit-scrollbar {
      display: none;
    }

    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    ul > li {
      min-height: 41px;
      padding: 0 24px;
      line-height: 41px;

      &:hover {
        background-color: #f8f9fa;
      }
    }

    > span {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    > h6 {
      padding: 0 0 10px 24px;
      font-size: 14px;
    }
  `,
};

export default Dropdown;

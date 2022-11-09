import { SickResult } from "@/types";
import React from "react";
import BoldText from "./BoldText";

interface SearchResultsProps {
  keyword: string;
  cursor: number;
  sickResults: SickResult[];
}

const SearchResults = ({ keyword, cursor, sickResults }: SearchResultsProps) => {
  if (sickResults.length === 0) {
    return <div>검색어 없음</div>;
  }

  return (
    <ul>
      {sickResults.map((sickResult, index) => (
        <li className={cursor === index ? "selected" : ""} key={sickResult.sickCd}>
          <BoldText text={sickResult.sickNm} keyword={keyword} />
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;

import sickApi from "@/api";
import { SickResult } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import BoldText from "./BoldText";

interface SearchResultsProps {
  keyword: string;
}

const SearchResults = ({ keyword }: SearchResultsProps) => {
  const [sickResults, setSickResults] = useState<SickResult[]>([]);

  const searchKeyword = useCallback(async (keyword: string) => {
    const searchedSickResults = await sickApi.search(keyword);
    setSickResults(searchedSickResults);
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => searchKeyword(keyword), 200);

    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <>
      <div>현재 키워드 : {keyword}</div>
      {sickResults.length === 0 ? (
        <ul>검색어 없음</ul>
      ) : (
        <ul>
          {sickResults.map((sickResult) => (
            <li key={sickResult.sickCd}>
              <BoldText text={sickResult.sickNm} keyword={keyword} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchResults;
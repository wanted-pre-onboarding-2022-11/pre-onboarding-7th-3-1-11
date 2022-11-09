import sickApi from "@/api";
import { useKeyword } from "@/contexts/keyword";
import cacheStore from "@/store";
import { SickResult } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import BoldText from "./BoldText";

const SearchResults = () => {
  const { keyword } = useKeyword();
  const [sickResults, setSickResults] = useState<SickResult[]>([]);

  const searchKeyword = useCallback(async (keyword: string) => {
    if (!cacheStore.isCached(keyword)) {
      const searchedSickResults = await sickApi.search(keyword);
      setSickResults(searchedSickResults);
      cacheStore.setData(keyword, searchedSickResults);
      return;
    }
    setSickResults(cacheStore.getData(keyword));
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => searchKeyword(keyword), 200);

    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  if (sickResults.length === 0) {
    return <div>검색어 없음</div>;
  }

  return (
    <ul>
      {sickResults.map((sickResult) => (
        <li key={sickResult.sickCd}>
          <BoldText text={sickResult.sickNm} keyword={keyword} />
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;

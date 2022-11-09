import React, { useCallback, useEffect, useState } from "react";
import sickApi from "./api";
import SearchResults from "./components/SearchResults";
import cacheStore from "./store";
import { SickResult } from "./types";

function App() {
  const [keyword, setKeyword] = useState("");
  const [cursor, setCursor] = useState(-1);
  const [sickResults, setSickResults] = useState<SickResult[]>([]);

  const handleChangeKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    setCursor(-1);
  }, []);

  const handleKeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      const nextCursor = cursor + 1;
      setCursor(nextCursor > sickResults.length - 1 ? 0 : nextCursor);
      return;
    }

    if (e.key === "ArrowUp") {
      const nextCursor = cursor - 1;
      setCursor(nextCursor < 0 ? sickResults.length - 1 : nextCursor);
      return;
    }
  };

  const searchKeyword = useCallback(async (keyword: string) => {
    if (!keyword) {
      setSickResults([]);
      return;
    }
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

  return (
    <>
      <h1>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      <input
        name="keyword"
        placeholder="질환명을 입력해 주세요."
        value={keyword}
        onChange={handleChangeKeyword}
        onKeyUp={handleKeyup}
        autoComplete="off"
      />
      {keyword && <SearchResults keyword={keyword} cursor={cursor} sickResults={sickResults} />}
    </>
  );
}

export default App;

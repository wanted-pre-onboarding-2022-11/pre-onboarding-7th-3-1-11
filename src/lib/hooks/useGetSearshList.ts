import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getSearchResultsService } from "../api";
import { searchValue } from "../states/searchValue";
import { searchResults } from "../states/searchResults";
import { inputValidation } from "../util/inputValidation";
import { ICache } from "../../types/types";

const useGetSearshList = () => {
  const inputValue = useRecoilValue(searchValue);
  const [searchResultsList, setSearchResultsList] = useRecoilState(searchResults);
  const [cache, setCache] = useState<ICache>({});

  useEffect(() => {
    if (inputValidation(inputValue)) {
      getSearchResults(inputValue);
    }
  }, [inputValue]);

  const getSearchResults = async (value: string) => {
    // 캐시에 없으면 api 요청해서 상태 업데이트
    if (!cache[value]) {
      const data = await getSearchResultsService.search(value);
      setSearchResultsList(data);
      setCache((prev) => ({ ...prev, [value]: data }));
    }
    // 캐시에 있으면 있는걸로 상태 업데이트
    if (cache[value]) {
      setSearchResultsList(cache[value]);
    }
  };

  return { inputValue, searchResultsList };
};

export default useGetSearshList;

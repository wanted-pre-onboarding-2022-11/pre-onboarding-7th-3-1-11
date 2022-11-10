import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

import debounce from "@/utils/debounce";

type FetchResult<T> = Promise<AxiosResponse<T[]> | { keyword: string; data: T[] }>;

const useSearch = <T>(search: (keyword: string) => FetchResult<T>) => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchResult, setSearchResult] = useState<T[]>([]);

  const DELAY_TIME = 300;

  const saveKeyword = debounce<string, void>(
    (keyword: string) => setSearchKeyword(keyword),
    DELAY_TIME,
  );

  useEffect(() => {
    if (!searchKeyword) {
      setSearchResult([]);
      return;
    }

    search(searchKeyword)
      .then((response) => {
        setSearchResult(response?.data || []);
      })
      .catch((e) => console.log(e));
  }, [searchKeyword]);

  return { searchKeyword, saveKeyword, searchResult };
};

export default useSearch;

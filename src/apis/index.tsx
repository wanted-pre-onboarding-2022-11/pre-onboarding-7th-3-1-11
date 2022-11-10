import axios from "axios";

import { cacheData, getCacheData } from "@/utils/cache";
import { AutoCompletedItem } from "@/components/AutoCompletedList";

const BASE_URL = "http://localhost:4000/sick";

export const getAutoCompletedList = (keyword: string) =>
  getCacheData<AutoCompletedItem[]>(keyword)
    ?.then((cacheData) => {
      console.info("get cache data");
      return cacheData;
    })
    .catch(() => fetchAutoCompletedList(keyword));

const fetchAutoCompletedList = (keyword: string) =>
  axios
    .get(`${BASE_URL}`, {
      params: {
        sickNm_like: keyword,
      },
    })
    .then((response) => {
      cacheData({ keyword, data: response?.data || [] });
      console.info("calling api");
      return response;
    });

import { SickInfoTypes } from "@/types";
import { AxiosRequestConfig } from "axios";
import { Cache } from "./Cache";
import { createInstance } from "./createInstance";

const initialConfig = { timeout: 3000 };

export class SearchAPI {
  private baseURL;
  private instance;
  private cache;

  constructor(url: string, cache: Cache) {
    this.baseURL = url;
    this.cache = cache;
    this.instance = createInstance({ url, config: initialConfig });
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.info("calling api");
        return config;
      },
      (error) => Promise.reject(error.message),
    );
  }

  async getKeyword(keyword: string) {
    if (this.cache.getCache(keyword)) {
      const data = this.cache.getCache(keyword);
      return data;
    } else {
      const { data } = await this.instance.get<SickInfoTypes[]>("/sick", {
        params: {
          sickNm_like: keyword,
        },
      });
      this.cache.setCache(keyword, data);
      return data;
    }
  }
}

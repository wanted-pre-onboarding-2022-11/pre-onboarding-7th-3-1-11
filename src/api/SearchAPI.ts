import { KeyWordTypes } from "@/types";
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
    this.instance = createInstance({ url, config: initialConfig });
    this.cache = cache;
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.info("calling api");
        return config;
      },
      (error) => Promise.reject(error.message),
    );
  }

  // setCache(key: string, value: KeyWordTypes[]) {
  //   this.cache.set(key, value);
  // }
  // getCache(key: string) {
  //   if (this.cache.has(key)) return this.cache.get(key);
  // }

  async getKeyword(keyword: string) {
    const data = this.cache.getCache(keyword)
      ? this.cache.getCache(keyword)
      : (
          await this.instance.get<KeyWordTypes[]>("/sick", {
            params: {
              q: keyword,
            },
          })
        ).data;
    if (data) this.cache.setCache(keyword, data);
    console.log(data);
    return data;
  }
}

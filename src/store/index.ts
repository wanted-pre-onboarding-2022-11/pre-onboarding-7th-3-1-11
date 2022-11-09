import { SickResult } from "@/types";

class CacheStore {
  cachedKeyword: { [key: string]: SickResult[] } = {};

  isCached(keyword: string) {
    return keyword in this.cachedKeyword;
  }

  getData(keyword: string) {
    return this.cachedKeyword[keyword] || [];
  }

  setData(keyword: string, results: SickResult[]) {
    this.cachedKeyword[keyword] = [...results];
  }
}

const cacheStore = new CacheStore();

export default cacheStore;

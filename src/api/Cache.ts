//key 가 있느지 확인

import type { KeyWordTypes } from "@/types";

// key가 없으면 set해주는함수
// key를 get
export class Cache {
  private cache;
  constructor() {
    this.cache = new Map<string, KeyWordTypes[]>();
  }

  setCache(key: string, value: KeyWordTypes[]) {
    this.cache.set(key, value);
  }
  getCache(key: string) {
    return this.cache.get(key);
  }
}

import type { SickInfoTypes } from "@/types";

export class Cache {
  private cache;
  constructor() {
    this.cache = new Map<string, SickInfoTypes[]>();
  }

  setCache(key: string, value: SickInfoTypes[]) {
    this.cache.set(key, value);
  }
  getCache(key: string) {
    return this.cache.get(key);
  }
}

export interface IDisease {
  sickCd: string;
  sickNm: string;
}

export type SearchResponse = Promise<IDisease[]>;

export interface ICache {
  [key: string]: IDisease[];
}

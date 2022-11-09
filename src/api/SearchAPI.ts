import { createInstance } from "./createInstance";

export type getKeyWordResponse = {
  sickCd: string;
  sickNm: string;
};

const initialConfig = { timeout: 3000 };
export class SearchAPI {
  private baseURL;
  private instance;

  constructor(url: string) {
    this.baseURL = url;
    this.instance = createInstance({ url, config: initialConfig });
  }

  async getKeyword(keyword: string) {
    console.info("calling api");
    return await this.instance.get<getKeyWordResponse[]>("/sick", {
      params: {
        q: keyword,
      },
    });
  }
}

import { SearchResponse } from "@/types/types";
import { AxiosError } from "axios";
import { HttpClient } from "./HttpClient";

interface SearchService {
  search(keyword: string): SearchResponse;
}

export class SearchServiceImpl implements SearchService {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  async search(keyword: string) {
    try {
      const { data } = await this.httpClient.request(`sick?q=${keyword}`);
      console.info("calling api");
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error("에러 발생");
      }
    }
  }
}

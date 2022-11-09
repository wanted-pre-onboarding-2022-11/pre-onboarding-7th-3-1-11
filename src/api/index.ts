import { SickResult } from "@/types";

class Api {
  private API_END_POINT = "http://localhost:4000";

  protected async request(url: string, options?: RequestInit) {
    if (url[0] !== "/") {
      throw new Error("please '/' fill in api url");
    }
    try {
      const response = await fetch(`${this.API_END_POINT}${url}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      console.info("calling api");
      return response.json();
    } catch (e) {
      throw new Error("fetch response error");
    }
  }
}

class SickApi extends Api {
  search(keyword: string): Promise<SickResult[]> {
    return this.request(`/sick?q=${keyword}`);
  }
}

const sickApi = new SickApi();

export default sickApi;

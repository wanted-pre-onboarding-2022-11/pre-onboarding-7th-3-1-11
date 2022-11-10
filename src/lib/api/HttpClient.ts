import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private api: AxiosInstance;
  constructor(baseURL: string) {
    this.api = axios.create({ baseURL });
  }
  async request(endPoint: string) {
    return await this.api(endPoint);
  }
}

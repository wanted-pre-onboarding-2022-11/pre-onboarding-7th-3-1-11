import axios, { AxiosRequestConfig } from "axios";

export const createInstance = ({ url, config }: { url: string; config?: AxiosRequestConfig }) =>
  axios.create({
    baseURL: url,
    ...config,
  });

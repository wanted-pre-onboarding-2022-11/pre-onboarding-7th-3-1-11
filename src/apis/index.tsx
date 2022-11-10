import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:4000/sick",
});

export const getData = async (target: string) => {
  const res = await instance.get(`?sickNm_like=${target}`);
  console.info("calling api");

  const result = {
    keyword: target,
    data: res.data,
  };

  return result;
};

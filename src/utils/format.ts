import { getKeyWordResponse } from "@/api/SearchAPI";

export const boldMaker = ({ key, item }: { key: string; item: string }) => {
  return item.replace(key, `<flag>${key}<flag>`);
};

export const formatToBold = ({ list, key }: { list: getKeyWordResponse[]; key: string }) => {
  const boldList = list.map((item) => boldMaker({ key, item: item.sickNm }));
  return boldList.map((boldStr) => {
    return boldStr.split("<flag>", 3);
  });
};

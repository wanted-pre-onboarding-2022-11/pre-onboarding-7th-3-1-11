import { KeyWordTypes } from "@/types";

export const boldMaker = ({ key, item }: { key: string; item: string }) => {
  return item.replace(new RegExp(key, "i"), `<flag>${key}<flag>`);
};

export const formatToBold = ({ list, key }: { list: KeyWordTypes[]; key: string }) => {
  const boldList = list.map((item) => boldMaker({ key, item: item.sickNm }));
  return boldList.map((boldStr) => {
    return boldStr.split("<flag>", 3);
  });
};

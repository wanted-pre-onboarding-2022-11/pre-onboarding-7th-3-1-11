import { SickInfoTypes } from "@/types";

const SPLIT_FLAG = "<flag>";

export const boldFlagMaker = ({ key, item }: { key: string; item: string }) => {
  return item.replace(new RegExp(key, "i"), `${SPLIT_FLAG}${key}${SPLIT_FLAG}`);
};

export const formatToBold = ({ list, key }: { list: SickInfoTypes[]; key: string }) => {
  const boldList = list.map((item) => boldFlagMaker({ key, item: item.sickNm }));
  return boldList.map((boldStr) => {
    return boldStr.split(SPLIT_FLAG, 3);
  });
};

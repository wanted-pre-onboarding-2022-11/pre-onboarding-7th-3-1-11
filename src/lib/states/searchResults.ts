import { atom } from "recoil";
import { IDisease } from "../../types/types";

export const searchResults = atom<IDisease[]>({
  key: "searchResults",
  default: [],
});

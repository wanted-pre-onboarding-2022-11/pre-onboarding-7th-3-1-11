import { getData } from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface SickResult {
  sickCd: string;
  sickNm: string;
}

export interface CacheType {
  keyword: string;
  data: SickResult[];
}

export const getList = createAsyncThunk<CacheType, string>(
  "trendDataSlice/getList",
  async (target: string) => {
    if (target.length === 0)
      return { keyword: "", data: [{ sickCd: "", sickNm: "" }] } as CacheType;
    const res = await getData(target);

    return res as CacheType;
  },
);

const cacheSlice = createSlice({
  name: "cache",
  initialState: {
    datas: [
      {
        keyword: "",
        data: [{ sickCd: "", sickNm: "" }],
      },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.datas.push(action.payload);

      return state;
    });
  },
});

export default cacheSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sickAPI } from "@/apis/api";

export type Sick = { sickCd: string; sickNm: string };

export interface SickState {
  data: Sick[];
  cache: any;
  error: null | string;
}

const initialState: SickState = {
  data: [],
  cache: {},
  error: null,
};

export const __getSickList = createAsyncThunk("/getSickList", async (value: string, thunkAPI) => {
  try {
    const { data } = await sickAPI.getSick(value);
    console.info("calling api");
    return thunkAPI.fulfillWithValue({ data, query: value });
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const sickSlice = createSlice({
  name: "sick",
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = initialState.data;
    },
    getCache: (state, action) => {
      state.data = state.cache[action.payload] || [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getSickList.fulfilled, (state: any, action: any) => {
      state.data = action.payload.data;
      state.cache = { ...state.cache, [action.payload.query]: action.payload.data };
    });
    builder.addCase(__getSickList.rejected, (state: any, action) => {
      state.error = action.payload;
    });
  },
});

export const { clearData, getCache } = sickSlice.actions;

export default sickSlice.reducer;

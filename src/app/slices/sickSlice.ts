import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sickAPI } from "@/apis/api";
import axios from "axios";

export type Sick = { sickCd: string; sickNm: string };

export interface SickState {
  data: Sick[];
  cache: { [query: string]: Sick[] };
  error: unknown;
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
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message);
    }
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
    // eslint-disable-next-line
    builder.addCase(__getSickList.fulfilled, (state: SickState, action: any) => {
      state.data = action.payload.data;
      state.cache = { ...state.cache, [action.payload.query]: action.payload.data };
    });
    builder.addCase(__getSickList.rejected, (state: SickState, action) => {
      state.error = action.payload;
    });
  },
});

export const { clearData, getCache } = sickSlice.actions;

export default sickSlice.reducer;

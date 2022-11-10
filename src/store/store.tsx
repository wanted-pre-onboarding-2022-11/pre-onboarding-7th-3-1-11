import { configureStore } from "@reduxjs/toolkit";
import cacheSlice from "./cacheSlice";

const store = configureStore({
  reducer: {
    cache: cacheSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;

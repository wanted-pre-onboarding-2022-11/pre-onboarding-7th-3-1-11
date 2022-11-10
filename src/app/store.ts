import { configureStore } from "@reduxjs/toolkit";
import sick from "@/app/slices/sickSlice";

export const store = configureStore({
  reducer: {
    sick,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

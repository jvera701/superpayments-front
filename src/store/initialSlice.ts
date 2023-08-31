import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialStore from "./initialState";
import type { UserInfo } from "./initialState";

export const storeSlice = createSlice({
  name: "store",
  initialState: initialStore,
  reducers: {
    updateStore: (_state, action: PayloadAction<UserInfo>) => {
      return action.payload;
    },
  },
});

export const { updateStore } = storeSlice.actions;
export default storeSlice.reducer;

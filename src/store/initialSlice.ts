import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialStore from "./initialState";
import { ModuleInfo } from "../interfaces";

export const storeSlice = createSlice({
  name: "store",
  initialState: initialStore,
  reducers: {
    updateStore: (_state, action: PayloadAction<ModuleInfo>) => {
      return action.payload;
    },
  },
});

export const { updateStore } = storeSlice.actions;
export default storeSlice.reducer;

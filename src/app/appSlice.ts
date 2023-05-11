import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AppState {
  name: string;
  orderId: number | null;
}

const initialState: AppState = {
  name: "",
  orderId: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOrderName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setOrderId: (state, action: PayloadAction<number>) => {
      state.orderId = action.payload;
    },
  },
});

export const { setOrderName, setOrderId } = appSlice.actions;
export const appReducer = appSlice.reducer;
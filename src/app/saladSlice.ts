import {
  PayloadAction,
  ThunkAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { Topping } from "../models/topping.model";
import { fetchToppings } from "../services/saladService";
import { AppThunk, RootState } from "./store";

export interface SaladState {
  allToppings: Topping[];
  chosenToppings: Topping[];
  dressing: string;
  price: number;
  loading: boolean;
}

const initialState: SaladState = {
  allToppings: [],
  chosenToppings: [],
  dressing: "",
  price: 3.99,
  loading: false,
};

export const loadToppings = createAsyncThunk("salad/loadToppings", async () => {
  const toppings = await fetchToppings();
  return toppings;
});

export const saladSlice = createSlice({
  name: "salad",
  initialState,
  reducers: {
    setToppings: (state, action: PayloadAction<Topping[]>) => {
      state.allToppings = [...action.payload];
    },
    chooseTopping: (state, action: PayloadAction<Topping>) => {
      state.chosenToppings = [...state.chosenToppings, action.payload];
      state.price += action.payload.price;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadToppings.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadToppings.fulfilled, (state, action) => {
        state.loading = false;
        state.allToppings = action.payload;
      })
      .addCase(loadToppings.rejected, (state) => {
        state.loading = false;
        console.error("Error loading toppings");
      });
  },
});

export const loadToppingsV2 =
  (): AppThunk<void> => async (dispatch, getState) => {
    const toppings = await fetchToppings();
    // if (toppings.length > 0) {
    //   dispatch(setToppings(toppings));
    // }
    dispatch(setToppings(toppings));
  };

export const { setToppings, chooseTopping } = saladSlice.actions;
export const saladReducer = saladSlice.reducer;

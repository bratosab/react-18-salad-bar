import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import { appReducer } from "./appSlice";
import { saladReducer } from "./saladSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appReducer,
    salad: saladReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
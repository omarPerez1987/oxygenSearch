import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../../api/callApi";

const initialState = {
  images: [],
};



export const searcSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

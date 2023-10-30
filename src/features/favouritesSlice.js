import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      return state.concat(action.payload);
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
export const favoritesData = (state) => state.favorites;

export default favoritesSlice.reducer;

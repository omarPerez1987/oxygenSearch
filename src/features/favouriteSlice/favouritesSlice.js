import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      return state.concat(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter((photo) => photo.id !== action.payload);
    },
    updateDescription: (state, action) => {
      const index = state.findIndex((data) => data.id === action.payload.id);
      if (index !== -1) {
        const updatedData = { ...state[index] };

        if (action.payload.newDescription.width) {
          updatedData.description = action.payload.newDescription.title;
        }
        if (action.payload.newDescription.width) {
          updatedData.width = action.payload.newDescription.width;
        }
        if (action.payload.newDescription.height) {
          updatedData.height = action.payload.newDescription.height;
        }
        if (action.payload.newDescription.likes) {
          updatedData.likes = action.payload.newDescription.likes;
        }
        if (action.payload.newDescription.date) {
          updatedData.date = action.payload.newDescription.date;
        }

        state[index] = updatedData;
      }
    },
  },
});

export const { addFavorite, removeFavorite, updateDescription } =
  favoritesSlice.actions;
export const favoritesData = (state) => state.favorites;

export default favoritesSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice/searchSlice.js';
import favoritesReducer from '../features/favouriteSlice/favouritesSlice.js'

const store = configureStore({
  reducer: {
    search: searchReducer,
    favorites: favoritesReducer,
  },
});

export default store;
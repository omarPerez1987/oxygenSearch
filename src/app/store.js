import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import favoritesReducer from '../features/favouritesSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    favorites: favoritesReducer,
  },
});

export default store;
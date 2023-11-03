import { createSlice } from '@reduxjs/toolkit';
import {fetchPhotosThunk} from '../searchThunk/searchThunk.js'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    photos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotosThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchPhotosThunk.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.photos = action.payload;
      })
      .addCase(fetchPhotosThunk.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
    },
});

export const fetchPhotosData = (state) => state.search.photos;
export const fetchPhotosStatus = (state) => state.search.status;
export const fetchPhotosError = (state) => state.search.error;

export default searchSlice.reducer;

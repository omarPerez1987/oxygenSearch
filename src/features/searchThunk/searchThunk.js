import { createAsyncThunk } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchPhotosThunk = createAsyncThunk(
  "search/fetchPhotosThunk",
  async (searchQuery = "") => {
    let apiUrl;

    if (searchQuery === "") {
      apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=10`;
    } else {
      apiUrl = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${apiKey}`;
    }

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("No se pudieron cargar las fotos.");
      }

      const data = await response.json();

      if (apiUrl === `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=10`) {
        return data;
      } else {
        return data.results;
      }
    } catch (error) {
      throw new Error("No se pudieron cargar las fotos.");
    }
  }
);

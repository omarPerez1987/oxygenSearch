import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  favoritesData,
} from "../features/favouriteSlice/favouritesSlice.js";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../components/logo/Logo";
import "./pageFavourites.css";
import CardFavourite from "../components/cardfavourite/CardFavourite";

const PageFavourites = () => {
  const dispatch = useDispatch();
  const favoritePhotos = useSelector(favoritesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedPhotos, setSortedPhotos] = useState([]);

  const loadLocalStorage = () => {
    const localData = localStorage.getItem("favoritePhotos");
    return localData ? JSON.parse(localData) : [];
  };

  useEffect(() => {
    const localFavorites = loadLocalStorage();
    if (favoritePhotos.length === 0) {
      dispatch(addFavorite(localFavorites));
    }
  }, [dispatch]);

  const handleSort = (sortBy) => {
    if (sortBy === "likes") {
      const sorted = [...favoritePhotos].sort((a, b) => b.likes - a.likes);
      setSortedPhotos(sorted);
    } else if (sortBy === "width") {
      const sorted = [...favoritePhotos].sort((a, b) => a.width - b.width);
      setSortedPhotos(sorted);
    } else if (sortBy === "height") {
      const sorted = [...favoritePhotos].sort((a, b) => a.height - b.height);
      setSortedPhotos(sorted);
    } else if (sortBy === "date") {
      const sorted = [...favoritePhotos].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setSortedPhotos(sorted);
    }
  };

  useEffect(() => {
    localStorage.setItem("favoritePhotos", JSON.stringify(favoritePhotos));
    setSortedPhotos([...favoritePhotos]);
  }, [favoritePhotos]);

  return (
    <>
      <nav className="navFavourites">
        <div className="navFavourites__container">
          <Logo />

          <FormControl
            className="navFavourites__container__order"
            sx={{ minWidth: 160, backgroundColor: "white" }}
          >
            <Select
              value={"ORDER BY"}
              onChange={(e) => handleSort(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="ORDER BY">ORDER BY</MenuItem>
              <MenuItem value="width">width</MenuItem>
              <MenuItem value="height">height</MenuItem>
              <MenuItem value="likes">likes</MenuItem>
              <MenuItem value="date">date</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="navFavourites__search">
          <Input
            placeholder="Search descriptions..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              backgroundColor: "white",
              width: "100%",
              height: "2em",
              borderRadius: "0.5em",
              padding: "0.5em 0.8em",
            }}
          />
          <SearchIcon sx={{ color: "white" }}></SearchIcon>
        </div>
      </nav>

      <section className="container-section">
        {sortedPhotos.length > 0 ? (
          sortedPhotos
            .filter((photo) =>
              photo.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((data) => <CardFavourite data={data} key={data.id} />)
        ) : favoritePhotos.length > 0 ? (
          favoritePhotos
            .filter((photo) =>
              photo.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((data) => <CardFavourite data={data} key={data.id} />)
        ) : (
          <h1>No has guardado ninguna foto</h1>
        )}
      </section>
    </>
  );
};

export default PageFavourites;

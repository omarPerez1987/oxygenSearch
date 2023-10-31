import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { favoritesData } from "../features/favouritesSlice";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../components/logo/Logo";
import "./pageFavourites.css";
import CardFavourite from "../components/cardfavourite/CardFavourite";

const PageFavourites = () => {
  const favoritePhotos = useSelector(favoritesData);

  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("favoritePhotos", JSON.stringify(favoritePhotos));
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
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>ORDER BY</em>
              </MenuItem>
              <MenuItem value={10}>width</MenuItem>
              <MenuItem value={20}>height</MenuItem>
              <MenuItem value={30}>likes</MenuItem>
              <MenuItem value={30}>date</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="navFavourites__search">
          <Input
            placeholder="Search descriptions..."
            type="text"
            value={""}
            // onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              backgroundColor: "white",
              width: "100%",
              height: "2em",
              borderRadius: "0.5em",
              padding: "0.5em 0.8em",
            }}
          />
          <SearchIcon
            sx={{ color: "white" }}
            // onClick={handleSearch}
          ></SearchIcon>
        </div>
      </nav>

      <section className="container-section">
        {favoritePhotos.length > 0 ? (
          favoritePhotos.map((data) => <CardFavourite data={data} />)
        ) : (
          <h1>No has guardado ninguna foto</h1>
        )}
      </section>
    </>
  );
};

export default PageFavourites;

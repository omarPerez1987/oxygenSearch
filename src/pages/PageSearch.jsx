import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotosThunk } from "../features/searchThunk/searchThunk.js";
import {
  fetchPhotosData,
  fetchPhotosStatus,
  fetchPhotosError,
} from "../features/searchSlice/searchSlice.js";
import {
  addFavorite,
  favoritesData,
} from "../features/favouriteSlice/favouritesSlice.js";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./pageSearch.css";
import Logo from "../components/logo/Logo.jsx";
import Searcher from "../components/searcher/Searcher";
import { toast } from "react-toastify";

const PageSearch = () => {
  const dispatch = useDispatch();
  const favoritePhotos = useSelector(favoritesData);
  const photos = useSelector(fetchPhotosData);
  const status = useSelector(fetchPhotosStatus);
  const error = useSelector(fetchPhotosError);

  useEffect(() => {
    if (photos <= 0) {
      dispatch(fetchPhotosThunk(""));
    }
  }, []);

  const addToMyPhotos = (item) => {
    const shortData = {
      id: item.id,
      description:
        item.alt_description
          ? item.alt_description
          : "No description",
      smallImage: item.urls.small,
      height: item.height,
      width: item.width,
      likes: item.likes,
      date: item.created_at,
      fullImage: item.urls.full,
    };

    const isAlreadyInFavorites = favoritePhotos.some(
      (favorite) => favorite.id === shortData.id
    );

    if (isAlreadyInFavorites) {
      toast.warning("Esta foto ya está en tus favoritos");
    } else {
      shortData.isFavorite = true;
      dispatch(addFavorite(shortData));
      toast.success("Foto añadida con éxito");
      localStorage.setItem(
        "favoritePhotos",
        JSON.stringify([...favoritePhotos, shortData])
      );
    }
  };

  return (
    <>
      <nav className="navSearch">
        <div className="navSearch__container">
          <Logo />

          <Link to="/my-photos" className="nav__my-photos">
            <PersonIcon
              sx={{ color: "white", fontSize: "2em", position: "relative" }}
            />
            <FavoriteIcon
              sx={{
                color: "white",
                fontSize: "1em",
                position: "absolute",
                marginLeft: "-0.5em",
              }}
            />
          </Link>
        </div>
        <div className="navSearch__search">
          <Searcher placeholder={"Search..."} />
        </div>
      </nav>

      <section className="list">
        {status === "pending" && <h1>Loading...</h1>}
        {status === "fulfilled" &&
          photos.map((item) => (
            <div
              key={item.id}
              className="list__container"
              style={{ width: "320px", height: "190px" }}
            >
              <img
                className="list__container__image"
                src={item.urls.small}
                alt={item.alt_description}
              />
              <FavoriteIcon
                className={`favoriteIcon ${
                  favoritePhotos.some((photo) => photo.id === item.id)
                    ? "favoriteIconColorRed"
                    : ""
                }`}
                onClick={() => addToMyPhotos(item)}
              />
            </div>
          ))}
        {status === "rejected" && <h2>Error: {error}</h2>}
      </section>
    </>
  );
};

export default PageSearch;

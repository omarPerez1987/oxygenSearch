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
  removeFavorite,
} from "../features/favouriteSlice/favouritesSlice.js";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
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
  const [state, setState] = useState("idle");

  useEffect(() => {
    if (!error && photos.length === 0) {
      dispatch(fetchPhotosThunk("")).catch((error) => {
        console.error("Error en la llamada: ", error);
      });
    }

    if (status === "idle") {
      setState("idle");
    } else if (status === "pending") {
      setState("pending");
    } else if (status === "fulfilled") {
      setState("fulfilled");
    }
  }, [status]);

  const addToMyPhotos = (item) => {
    const shortData = {
      id: item.id,
      description: item.alt_description
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
      dispatch(removeFavorite(shortData.id));
      localStorage.setItem(
        "favoritePhotos",
        JSON.stringify(
          favoritePhotos.filter((photo) => photo.id !== shortData.id)
        )
      );
      toast.error("foto eliminada de tus favoritos");
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
        </div>
        <div className="navSearch__search">
          <Searcher placeholder={"Search..."} />
        </div>
        <div className="navSearch__favorite">
          <Link to="/my-photos">
            <div className="container_favorite">
              <ThumbUpOutlinedIcon sx={{ color: "white", fontSize: "2em" }} />
              <p className="text_favorites">Favorites</p>
            </div>
          </Link>
        </div>
      </nav>

      <section className="list">
        {state === "idle" && !error && <h1>Iniciando...</h1>}
        {state === "pending" && !error && <h1>Loading...</h1>}
        {state === "fulfilled" &&
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
        {error && <h2>Error: {error}</h2>}
      </section>
    </>
  );
};

export default PageSearch;

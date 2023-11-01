import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotosThunk } from "../features/searchThunk";
import {
  fetchPhotosData,
  fetchPhotosStatus,
  fetchPhotosError,
} from "../features/searchSlice";
import { addFavorite } from "../features/favouritesSlice";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./pageSearch.css";
import Logo from "../components/logo/Logo.jsx";
import Searcher from "../components/searcher/Searcher";

const PageSearch = () => {
  const dispatch = useDispatch();
  const photos = useSelector(fetchPhotosData);
  const status = useSelector(fetchPhotosStatus);
  const error = useSelector(fetchPhotosError);

  useEffect(() => {
    dispatch(fetchPhotosThunk(""));
  }, [dispatch]);

  const addToMyPhotos = (item) => {
    const shortData = {
      id: item.id,
      uniqueId: uuidv4(),
      description: (item.description ? item.description.slice(0, 16) : "No title"),
      smallImage: item.urls.small,
      height: item.height,
      width: item.width,
      likes: item.likes,
      date: item.created_at,
      fullImage: item.urls.full,
    };
    dispatch(addFavorite(shortData));
    alert('✅ Añadido con exito')
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
                className="favoriteIcon"
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

import React, { useEffect, useState } from "react";
import { Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./pageSearch.css";
import Logo from "../components/logo/Logo.jsx";
import Searcher from "../components/searcher/Searcher";

const PageSearch = () => {
  const [photos, setPhotos] = useState();
  // console.log(photos);
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos?per_page=20&client_id=P6cf7q80QyPwwvDvYEP4aYkfXZYdgFzCDwzmXIdBV4Y"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            alert("❌ La solicitud no se pudo completar correctamente.")
          );
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        alert(error(error));
      });
  }, []);

  return (
    <>
      <nav className="navSearch">
        <div className="navSearch__container">
          <Logo />

          <Link href="my-photos" className="nav__my-photos">
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
      {photos &&
        photos.map((item) => (
          <div
            key={item.id}
            className="list__container"
            style={{ width:'320px', height:'190px' }}
          >
            <img
              className="list__container__image"
              src={item.urls.small}
              alt={item.title}
            />
            <FavoriteIcon className="favoriteIcon" />
          </div>
        ))}
    </section>
      
    </>
  );
};

export default PageSearch;

import React, { useEffect, useState } from "react";
import { Input, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import navStyles from "../../styles/nav/navStyles";
import inputStyles from "../../styles/nav/inputStyles";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PageSearch = () => {
  const [photos, setPhotos] = useState();
  console.log(photos);
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
      <nav style={navStyles}>
        <Link
          href="/"
          underline="none"
          color="white"
          fontWeight={900}
          fontSize="1.5em"
        >
          OXYGENSearch
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "30%",
            gap: "0.5em",
          }}
        >
          <Input placeholder="Search..." style={inputStyles} />
          <SearchIcon sx={{ color: "white" }}></SearchIcon>
        </div>
        <Link href="my-photos">
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
      </nav>
      <section
        style={{
          padding: "5em 13.5em",
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2em",
        }}
      >
        {photos &&
          photos.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "320px",
                height: "190px",
              }}
            >
              <img
                src={item.urls.small}
                alt={item.description}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          ))}
      </section>
    </>
  );
};

export default PageSearch;

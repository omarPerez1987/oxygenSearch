import React from "react";
import { Box, Input, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import navStyles from "../../styles/nav/navStyles";
import inputStyles from "../../styles/nav/inputStyles";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PageSearch = () => {
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
        <div>
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
        </div>
      </nav>
    </>
  );
};

export default PageSearch;

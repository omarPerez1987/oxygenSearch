import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import "./searcher.css";

const Searcher = ({ placeholder }) => {
  return (
    <>
      <Input className="search__input" placeholder={placeholder} />
      <SearchIcon sx={{ color: "white" }}></SearchIcon>
    </>
  );
};

export default Searcher;

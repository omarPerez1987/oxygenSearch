import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPhotosThunk } from "../../features/searchThunk/searchThunk.js";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import "./searcher.css";

const Searcher = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchPhotosThunk(searchQuery));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <Input
        className="search__input"
        placeholder={placeholder}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <SearchIcon sx={{ color: "white" }} onClick={handleSearch}></SearchIcon>
    </>
  );
};

export default Searcher;

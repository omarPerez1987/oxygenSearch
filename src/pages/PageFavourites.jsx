import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Logo from "../components/logo/Logo";
import Searcher from "../components/searcher/Searcher";
import "./pageFavourites.css";
import CardFavourite from "../components/cardfavourite/CardFavourite";

const PageFavourites = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <nav className="navFavourites">
        <div className="navFavourites__container">
          <Logo />

          <FormControl
            className="navFavourites__container__order"
            sx={{ minWidth: 160, backgroundColor: "white"}}
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
          <Searcher placeholder={"Search..."} />
        </div>
      </nav>
      
      <section className="container-section">
        <CardFavourite />
        <CardFavourite />
        <CardFavourite />
        <CardFavourite />
      </section>
    </>
  );
};

export default PageFavourites;

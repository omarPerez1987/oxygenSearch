import React from "react";
import './logo.css'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      OXYGENSearch
    </Link>
  );
};

export default Logo;

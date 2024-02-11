import React from "react";
import './logo.css'
import { Link } from "react-router-dom";
import logo from '../../img/logo.png'

const Logo = () => {
  return (
    <Link to="/" className="container_logo">
      <img className="logo" src={logo} alt="" />
    </Link>
  );
};

export default Logo;

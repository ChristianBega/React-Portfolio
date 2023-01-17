import React from "react";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";

function Header() {
  //h1 need to be replaced with img/logo
  return (
    <header>
      <Link to="/React-Portfolio">
        <h1 styles={{ color: "#fff" }}>Logo</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;



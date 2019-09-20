import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header border">
    <Link to="/" className="gray">
      Today
    </Link>
    <input type="text" className="search" placeholder="Search" />
  </header>
);

export default Header;

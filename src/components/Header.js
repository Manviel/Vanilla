import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleFilter, showFilter }) => (
  <header className="header border">
    <Link to="/" className="gray">
      Today
    </Link>
    {showFilter ? (
      <input
        type="text"
        className="control search"
        placeholder="Search"
        onChange={handleFilter}
      />
    ) : (
      <p className="control">{new Date().toDateString()}</p>
    )}
  </header>
);

export default Header;

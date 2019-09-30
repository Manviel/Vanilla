import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleFilter, showFilter }) => {
  const handleTheme = e => {
    const theme = document.querySelector(".header");
    const search = document.querySelector(".control");

    if (e.target.checked) {
      theme.classList.add("dark");
      search.classList.add("pallette");
    } else {
      theme.classList.remove("dark");
      search.classList.remove("pallette");
    }
  };

  return (
    <header className="header content border light">
      <nav className="space">
        <Link to="/" className="gray">
          Today
        </Link>
        <input
          type="checkbox"
          id="switch"
          className="theme"
          onChange={handleTheme}
        />
        <label htmlFor="switch" className="switch"></label>
      </nav>
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
};

export default Header;

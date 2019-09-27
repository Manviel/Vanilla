import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleFilter, showFilter }) => {
  const handleTheme = e => {
    const theme = document.querySelector(".header");

    if (e.target.checked) {
      theme.classList.add("dark");
    } else {
      theme.classList.remove("dark");
    }
  };

  return (
    <header className="header border light">
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

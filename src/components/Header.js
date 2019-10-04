import React, { memo } from "react";
import { Link } from "react-router-dom";

import AutoComplete from "./AutoComplete";

const Header = ({ handleFilter, showFilter, showSuggestions, suggestions }) => {
  const handleTheme = e => {
    const theme = document.querySelector(".light");
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
    <header className="header content border">
      <nav className="space">
        <Link to="/" className="main">
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
        <AutoComplete
          handleFilter={handleFilter}
          showSuggestions={showSuggestions}
          suggestions={suggestions}
        />
      ) : (
        <p className="control">{new Date().toDateString()}</p>
      )}
    </header>
  );
};

export default memo(Header);

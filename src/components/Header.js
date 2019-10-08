import React, { memo } from "react";
import { Link } from "react-router-dom";

import AutoComplete from "./AutoComplete";

import useTheme from "../utils/useTheme";

const Header = ({ handleFilter, showFilter, showSuggestions, suggestions }) => {
  const [theme, setTheme] = useTheme();

  return (
    <header className="flex header content border">
      <nav className="flex space">
        <Link to="/" className="main">
          Today
        </Link>
        <input
          type="checkbox"
          id="switch"
          className="theme"
          checked={theme === "dark"}
          onChange={setTheme}
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
        <p className="control search">{new Date().toDateString()}</p>
      )}
    </header>
  );
};

export default memo(Header);

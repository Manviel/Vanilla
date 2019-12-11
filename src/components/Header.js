import React, { memo } from "react";
import { Link } from "react-router-dom";

import useTheme from "../utils/useTheme";

const Header = () => {
  const [theme, setTheme] = useTheme();

  return (
    <header className="flex header">
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
    </header>
  );
};

export default memo(Header);

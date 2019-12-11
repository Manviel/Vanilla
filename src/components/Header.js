import React, { memo } from "react";
import { Link } from "react-router-dom";

import useTheme from "../utils/useTheme";

import "../styles/header.css";

const Header = () => {
  const [theme, setTheme] = useTheme();

  return (
    <header className="flex header">
      <section className="drop">
        <span className="tag legend">Collection</span>
        <ul className="flex dropdown">
          <li className="legend">Accessories</li>
          <li className="legend">Tops</li>
          <li className="legend">Skirts & Trousers</li>
        </ul>
      </section>

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

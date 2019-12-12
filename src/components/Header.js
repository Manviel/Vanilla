import React, { memo } from "react";
import { Link } from "react-router-dom";

import useTheme from "../utils/useTheme";

import "../styles/header.css";

const Header = ({ withImage }) => {
  const [theme, setTheme] = useTheme();

  return (
    <header
      style={{ backgroundImage: `url(${withImage})` }}
      className={withImage ? "flex col hacking" : "flex col"}
    >
      <section className="drop">
        <span className="tag legend case">Collection</span>
        <ul className="flex dropdown">
          <li className="legend case">Accessories</li>
          <li className="legend case">Tops</li>
          <li className="legend case">Skirts & Trousers</li>
        </ul>
      </section>

      <nav className="flex space">
        <Link to="/" className="main case">
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

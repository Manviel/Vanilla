import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

import useTheme from "../utils/useTheme";

import "../styles/header.css";

const Header = () => {
  const [theme, setTheme] = useTheme();
  const [menu, setMenu] = useState(false);

  const handleBurger = () => setMenu(!menu);

  return (
    <header className="flex col">
      <nav className={menu ? "mobile" : "flex nav"} tabIndex="0">
        <div
          className={menu ? "burger change" : "burger"}
          onClick={handleBurger}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <section className={menu ? "hide" : "drop"} tabIndex="0">
          <h1 className="tag legend case">Sale</h1>
          <ul className={menu ? "flex col" : "flex dropdown"}>
            <li className="legend case" tabIndex="0">
              Trending
            </li>
            <li className="legend case" tabIndex="0">
              Brands
            </li>
          </ul>
        </section>

        <section className={menu ? "hide" : "drop"} tabIndex="0">
          <h2 className="tag legend case">Collection</h2>
          <ul className={menu ? "flex col" : "flex dropdown"}>
            <li className="legend case" tabIndex="0">
              Accessories
            </li>
            <li className="legend case" tabIndex="0">
              Tops
            </li>
            <li className="legend case" tabIndex="0">
              Skirts & Trousers
            </li>
          </ul>
        </section>

        <section className={menu ? "hide" : "drop"} tabIndex="0">
          <h2 className="tag legend case">Tags</h2>
          <ul className={menu ? "flex col" : "flex dropdown"}>
            <li className="legend case" tabIndex="0">
              Denim
            </li>
            <li className="legend case" tabIndex="0">
              Identity
            </li>
            <li className="legend case" tabIndex="0">
              Colour
            </li>
          </ul>
        </section>
      </nav>

      <section className="flex space">
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
      </section>
    </header>
  );
};

export default memo(Header);

import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

import useTheme from "../utils/useTheme";

import "../styles/header.css";

const Header = ({ withImage }) => {
  const [theme, setTheme] = useTheme();
  const [menu, setMenu] = useState(false);

  const handleBurger = () => setMenu(!menu);

  return (
    <header
      style={{ backgroundImage: `url(${withImage})` }}
      className={withImage ? "flex col hacking" : "flex col"}
    >
      <main className={menu ? "mobile" : "flex nav"}>
        <div
          className={menu ? "burger change" : "burger"}
          onClick={handleBurger}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <section className={!menu ? "drop" : "hide"}>
          <span className="tag legend case">Collection</span>
          <ul className={menu ? "flex col" : "flex dropdown"}>
            <li className="legend case">Accessories</li>
            <li className="legend case">Tops</li>
            <li className="legend case">Skirts & Trousers</li>
          </ul>
        </section>

        <section className={!menu ? "drop" : "hide"}>
          <span className="tag legend case">Tags</span>
          <ul className={menu ? "flex col" : "flex dropdown"}>
            <li className="legend case">Denim</li>
            <li className="legend case">Identity</li>
            <li className="legend case">Colour</li>
          </ul>
        </section>
      </main>

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

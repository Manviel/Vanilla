import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";

import { days, months } from "../utils";

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => setTime(new Date());

  return (
    <article className="home content">
      <div className="time center">
        {time.getHours()}:
        {time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}
      </div>
      <div className="date center">
        {days[time.getDay()]}, {time.getDate()} {months[time.getMonth()]}
      </div>
      <section className="blur">
        <div className="dock">
          <span className="icon"></span>
          <Link to="/">
            <button className="btn">Store</button>
          </Link>
        </div>
      </section>
      <Link to="/">
        <div className="line"></div>
      </Link>
    </article>
  );
};

export default Home;

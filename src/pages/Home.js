import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { days, months } from "../utils";

import "../styles/home.css";

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = () => setTime(new Date());

    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <article className="home">
      <h1 className="date center case">Welcome back</h1>
      <h2 className="time center">
        {time.getHours()}:
        {time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}
      </h2>
      <h3 className="date center">
        {days[time.getDay()]}, {time.getDate()} {months[time.getMonth()]}
      </h3>
      <section className="blur">
        <div className="dock">
          <span className="icon"></span>
          <Link to="/">
            <button className="btn case">Store</button>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Home;

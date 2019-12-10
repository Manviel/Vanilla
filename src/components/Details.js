import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import Loader from "./Loader";

const Header = lazy(() => import("./Header"));

import "../styles/details.css";

const Details = ({ match }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <article className="flex container content">
        <section className="flex details">
          <figure className="logo"></figure>
          <div className="flex header info">
            <h3 className="name day">{data && data.name}</h3>
            <h4 className="developer description">{data && data.email}</h4>
            <section className="flex space">
              <Link to={`${match.params.id}/albums`}>
                <button className="btn">Get</button>
              </Link>
              <Link to="/home">
                <div className="flex more">
                  <span>&hellip;</span>
                </div>
              </Link>
            </section>
          </div>
        </section>

        <section className="flex header content">
          <h3 className="title">Ratings & Reviews</h3>
          <div className="flex space description">
            <h5 className="rate">
              5.0<small className="out info">out of 5</small>
            </h5>
          </div>
        </section>

        <p className="card control">
          Kharkiv student. Like video games and news about technologies.{" "}
          {data && data.body}
        </p>

        <section className="card control">
          <p className="prime">Stunning!</p>
          <div className="flex container description space">
            <figure className="flex">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className="circle"></div>
              ))}
            </figure>
            <figcaption>Merezhko Michael</figcaption>
          </div>
          <p>This application is wonderful</p>
        </section>

        <section className="flex around">
          <a href="https://www.instagram.com/miannelst">
            <button className="btn inst">Instagram</button>
          </a>
          <a href="https://github.com/Manviel">
            <button className="btn follow">GitHub</button>
          </a>
        </section>
      </article>
    </>
  );
};

export default Details;

import React, { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";

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
      <Header />
      <article className="flex container content">
        <section className="flex details">
          <figure className="logo"></figure>
          <div className="flex header info">
            <h3 className="name day">{data && data.name}</h3>
            <h5 className="developer description">{data && data.email}</h5>
            <Link to={`${match.params.id}/albums`}>
              <button className="btn">Get</button>
            </Link>
          </div>
        </section>
        <section className="flex header content">
          <h3 className="title">Ratings & Reviews</h3>
          <div className="flex space description">
            <h6 className="rate">
              5.0<small className="out info">out of 5</small>
            </h6>
          </div>
        </section>
        <p className="card control">{data && data.body}</p>
        <section className="card control">
          <p>Stunning!</p>
          <div className="flex container description">
            {[0, 1, 2, 3, 4].map(i => (
              <figure key={i} className="circle"></figure>
            ))}
          </div>
          <p>This application is wonderful</p>
        </section>
      </article>
    </>
  );
};

export default Details;

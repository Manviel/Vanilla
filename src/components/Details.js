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
      <article className="container content">
        <section className="space details control">
          <figure className="logo"></figure>
          <div className="info">
            <h3 className="title">{data && data.name}</h3>
            <h5 className="subtitle">{data && data.email}</h5>
          </div>
        </section>
        <section className="header card">
          <h3 className="title">Ratings & Reviews</h3>
          <div className="space description">
            <h6 className="rate">
              5.0<small className="out info">out of 5</small>
            </h6>
            <Link to={`${match.params.id}/albums`}>
              <button className="btn">Get</button>
            </Link>
          </div>
          <p>{data && data.body}</p>
        </section>
        <section className="card control">
          <p>Stunning!</p>
          <div className="container description">
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

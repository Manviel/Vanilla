import React, { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";

const Header = lazy(() => import("./Header"));

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
        <div className="details">
          <h3 className="title white">{data && data.name}</h3>
          <h5 className="subtitle">{data && data.email}</h5>
          <p className="description">{data && data.body}</p>
        </div>
        <section className="header card">
          <h3 className="title">Ratings & Reviews</h3>
          <div className="space">
            <h6 className="rate">
              5.0<small className="out">out of 5</small>
            </h6>
            <Link to={`${match.params.id}/albums`}>
              <button className="btn">Get</button>
            </Link>
          </div>
        </section>
        <div className="card back">
          <p className="review">Stunning!</p>
          <section className="container">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className="circle"></div>
            ))}
          </section>
          <p className="description">This application is wonderful</p>
        </div>
      </article>
    </>
  );
};

export default Details;

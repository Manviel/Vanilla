import React, { useState, useEffect, lazy, Suspense } from "react";

import Loader from "../components/Loader";

const Header = lazy(() => import("../components/Header"));
const Popup = lazy(() => import("../components/Popup"));
const Tags = lazy(() => import("../components/Tags"));

import "../styles/details.css";

const Details = ({ match }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Tags tags={["Black", "Tailored", "Layers"]} />

      <article className="flex space container">
        <Popup item={data && data} />

        <figure className="logo"></figure>

        <figure className="logo"></figure>
      </article>

      <h3 className="title">Ratings & Reviews</h3>

      <article className="flex space container">
        <section className="flex col content">
          <div className="flex space description">
            <h5 className="rate">
              5.0<small className="out">out of 5</small>
            </h5>
          </div>
        </section>

        <section className="content control">
          <p>Stunning!</p>

          <div className="flex container description space">
            <figure className="flex">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className="circle"></div>
              ))}
            </figure>
            <figcaption>Merezhko Michael</figcaption>
          </div>

          <p>This application is wonderful</p>
          <p>Kharkiv student. Like video games and news about technologies</p>
          <p>{data && data.body}</p>
        </section>
      </article>
    </Suspense>
  );
};

export default Details;

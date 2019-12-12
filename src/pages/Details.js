import React, { useState, useEffect, lazy, Suspense } from "react";

import Loader from "../components/Loader";

const Header = lazy(() => import("../components/Header"));
const Popup = lazy(() => import("../components/Popup"));
const Tags = lazy(() => import("../components/Tags"));
const MoreFrom = lazy(() => import("../components/MoreFrom"));

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

      <MoreFrom />
    </Suspense>
  );
};

export default Details;

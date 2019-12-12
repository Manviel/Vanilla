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
      <Header
        withImage={
          data && data.id % 2 === 0
            ? "https://collusion.imgix.net/1994122dd9c24ae294a294d223f27ec7.jpg?w=1080&h=1920&fit=max&auto=format"
            : "https://collusion.imgix.net/eb64dc5189454ac187911953d005d818.jpg?w=1080&h=1920&fit=max&auto=format"
        }
      />
      <Tags tags={["Black", "Tailored", "Layers"]} />

      <article className="flex details container">
        <Popup item={data && data} />

        <figure
          style={{
            backgroundImage: `url("https://collusion.imgix.net/1994122dd9c24ae294a294d223f27ec7.jpg?w=1080&h=1920&fit=max&auto=format")`
          }}
          className="logo hacking day"
        ></figure>

        <figure
          style={{
            backgroundImage: `url("https://collusion.imgix.net/eb64dc5189454ac187911953d005d818.jpg?w=1080&h=1920&fit=max&auto=format")`
          }}
          className="logo hacking day"
        ></figure>
      </article>

      <MoreFrom />
    </Suspense>
  );
};

export default Details;

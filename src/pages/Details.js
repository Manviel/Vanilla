import React, { useState, useEffect, lazy, Suspense } from "react";

import Loader from "../components/Loader";

const Header = lazy(() => import("../components/Header"));
const Popup = lazy(() => import("../components/Popup"));
const Tags = lazy(() => import("../components/Tags"));
const MoreFrom = lazy(() => import("../components/MoreFrom"));

import "../styles/details.css";

const Details = ({ match }) => {
  const [data, setData] = useState({});

  const options = `w=540&h=960&q=50&auto=format`;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Header />

      <Tags tags={["Black", "Tailored", "Layers"]} />

      <article className="flex details">
        <Popup item={data} />

        {data.id && (
          <figure
            style={{
              backgroundImage:
                data.id % 2 === 0
                  ? `url(https://collusion.imgix.net/1994122dd9c24ae294a294d223f27ec7.jpg?${options})`
                  : `url(https://collusion.imgix.net/eb64dc5189454ac187911953d005d818.jpg?${options})`,
            }}
            className="logo hacking"
          ></figure>
        )}

        <p className="logo">{data.body}</p>
      </article>

      <MoreFrom />
    </Suspense>
  );
};

export default Details;

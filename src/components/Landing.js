import React, { lazy } from "react";

const ShowCard = lazy(() => import("./ShowCard"));

const Landing = ({ data }) => (
  <article className="container">
    {data && data.map(show => <ShowCard key={show.id} {...show} />)}
  </article>
);

export default Landing;

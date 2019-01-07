import React from "react";

const ShowCard = React.lazy(() => import("./ShowCard"));

const Landing = ({ data }) => (
  <article className="container indent">
    {data && data.map(show => <ShowCard key={show.id} {...show} />)}
  </article>
);

export default Landing;

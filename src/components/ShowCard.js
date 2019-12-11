import React from "react";

import "../styles/albums.css";

const ShowCard = ({ title }) => (
  <section className="album control">
    <span className="category">Black</span>
    <span className="category sub">Layers</span>
    <strong className="teaser">{title}</strong>
  </section>
);

export default ShowCard;

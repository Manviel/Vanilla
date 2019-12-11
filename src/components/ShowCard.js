import React from "react";

import "../styles/albums.css";

const ShowCard = ({ title }) => (
  <section className="album control">
    <span className="category tag">Black</span>
    <span className="category tag sub">Layers</span>
    <strong className="teaser">{title}</strong>
  </section>
);

export default ShowCard;

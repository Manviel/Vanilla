import React from "react";

import Tags from "./Tags";

import "../styles/albums.css";

const ShowCard = ({ title }) => (
  <section className="album control">
    <Tags tags={["Tops", "Bodycon"]} />
    <strong className="teaser case">{title}</strong>
  </section>
);

export default ShowCard;

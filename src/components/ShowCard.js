import React from "react";
import { Link } from "react-router-dom";

const ShowCard = props => (
  <Link to={`/${props.id}`} className="details">
    <dt className="subtitle day">World premiere</dt>
    <h3 className="title white">{props.title}</h3>
    <dd>{props.body}</dd>
  </Link>
);

export default ShowCard;

import React from "react";
import { Link } from "react-router-dom";

const ShowCard = props => (
  <Link to={`/${props.id}`} className="details">
    <span className="subtitle">World premiere</span>
    <h3 className="title white">{props.title}</h3>
    <p>{props.body}</p>
  </Link>
);

export default ShowCard;

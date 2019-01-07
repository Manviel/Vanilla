import React from "react";
import { Link } from "react-router-dom";

const ShowCard = props => (
  <Link to={`/${props.id}`} className="details indent">
    <h3>{props.title}</h3>
    <p>{props.body}</p>
  </Link>
);

export default ShowCard;

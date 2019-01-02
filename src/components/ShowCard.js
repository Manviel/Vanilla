import React from 'react';

const ShowCard = (props) => (
  <div className="details indent">
    <h3>{props.title}</h3>
    <p className="gray">{props.body}</p>
  </div>
)

export default ShowCard;

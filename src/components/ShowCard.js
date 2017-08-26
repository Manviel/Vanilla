import React from 'react';
import { string } from 'prop-types';

import './Style.css';

const ShowCard = (props) => {
  return(
    <div className='wrapper'>
      <img className='image' alt={`${props.title} Show poster`}
        src={require(`../img/posters/${props.poster}`)} />
      <div>
        <h3>{props.title}</h3>
        <h4>{props.year}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;

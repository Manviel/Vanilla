import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import './Style.css';

const ShowCard = (props: Show) => {
  return(
    <Link className='wrapper' to={`/details/${props.imdbID}`}>
      <img className='image' alt={`${props.title} Show poster`}
        src={require(`../img/posters/${props.poster}`)} />
      <div>
        <h3>{props.title}</h3>
        <h4>({props.year})</h4>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;

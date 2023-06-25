import React from 'react';

import Tags from '../Tags';

import './albums.css';

const ShowCard = ({ title, price }) => (
  <article>
    <Tags tags={['New']} />

    <h3 className='subtitle case card-measure'>{title}</h3>
    <h4 className='info card-sub grey-dark'>Coats & jackets</h4>
    <p className='info'>Cost: &#163; {price}</p>
  </article>
);

export default ShowCard;

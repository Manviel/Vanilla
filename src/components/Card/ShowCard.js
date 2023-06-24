import React from 'react';

import Tags from '../Tags';

import './albums.css';

const ShowCard = ({ title, price }) => (
  <article>
    <Tags tags={['New']} />

    <h3 className='subtitle case card-measure'>{title}</h3>
    <p className='info card-sub'>Coats & jackets</p>
    <p className='info'>&#163; {price}</p>
  </article>
);

export default ShowCard;

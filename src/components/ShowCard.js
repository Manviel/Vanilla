import React from 'react';

import Tags from './Tags';

import '../styles/albums.css';

const ShowCard = ({ title, price }) => (
  <section className='album control'>
    <Tags tags={['Tops', 'Bodycon']} />
    <p className='case'>&#163; ${price}</p>
    <strong className='teaser case'>{title}</strong>
  </section>
);

export default ShowCard;

import React from 'react';

import Tags from '../Tags';

import './albums.css';

const TAGS = [
  {
    id: '1',
    label: 'New',
  },
];

const ShowCard = ({ title, price }) => (
  <article className='material view rounded'>
    <Tags tags={TAGS} />

    <h3 className='subtitle case card-measure'>{title}</h3>
    <h4 className='info card-sub grey-dark'>Coats & jackets</h4>

    <div className='flex justify-between items-center'>
      <p className='chip'>&#163; {price}</p>
    </div>
  </article>
);

export default ShowCard;

import React from 'react';

import Tags from '../Tags';

import { randomInRange } from '../../utils';

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

    <section className='grid products'>
      <div className='flex col ghost os'>
        <p>Release year</p>

        <strong className='subtitle'>{randomInRange(1980, 2023)}</strong>
      </div>

      <div className='flex col document os'>
        <p>Price (in &#163;)</p>

        <strong className='subtitle'>{price}</strong>
      </div>
    </section>
  </article>
);

export default ShowCard;

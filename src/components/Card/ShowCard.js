import React from 'react';

import Tags from '../Tags';

import { ActionTypes } from '../../utils/models';

import './albums.css';

const ShowCard = ({ title, price }) => (
  <article>
    <Tags tags={['New']} />

    <h3 className='subtitle case card-measure'>{title}</h3>
    <h4 className='info card-sub grey-dark'>Coats & jackets</h4>

    <div className='flex justify-between items-center'>
      <p className={ActionTypes.Contained}>Get for &#163; {price}</p>
    </div>
  </article>
);

export default ShowCard;

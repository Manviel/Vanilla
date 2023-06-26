import React from 'react';

import { PlayPrevIcon, PlayNextIcon } from '../assets/svg';
import { ActionTypes } from '../utils/models';

const Above = ({ handleNext, handlePrev }) => (
  <nav
    className='flex justify-between gap items-center above'
    aria-labelledby='candidate'
  >
    <button
      type='button'
      className={ActionTypes.SuperEllipse}
      aria-label='Previous'
      onClick={handlePrev}
    >
      <PlayPrevIcon />
    </button>

    <p className='term grey-dark'>Reviews</p>

    <button
      type='button'
      className={ActionTypes.SuperEllipse}
      aria-label='Next'
      onClick={handleNext}
    >
      <PlayNextIcon />
    </button>
  </nav>
);

export default Above;

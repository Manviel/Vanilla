import React from 'react';

import './filters.css';

export const OrderBy = {
  Date: 'date',
  Asc: 'asc',
  Desc: 'desc',
};

const TABS = [
  {
    id: OrderBy.Date,
    label: 'Latest',
  },
  {
    id: OrderBy.Asc,
    label: 'Lowest',
  },
  {
    id: OrderBy.Desc,
    label: 'Highest',
  },
];

const Filters = ({ handleFilter, query }) => {
  return (
    <>
      <p className='info grey-dark' id='sort-by'>
        Sort Prices by
      </p>

      <div
        className='filters flex items-center'
        role='toolbar'
        aria-labelledby='sort-by'
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type='button'
            className='filter-item flex content-full'
            onClick={() => handleFilter(tab.id)}
            aria-pressed={query === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Filters;

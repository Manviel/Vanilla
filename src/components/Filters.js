import React, { useState } from 'react';
import { ActionTypes } from '../utils/models';

const Filters = ({ handleFilter }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => setOpen(!open);

  const handleFilterChange = (e, field) => {
    if (e.which === 13) {
      handleFilter(field);
      handleSubmit();
    }
  };

  return (
    <>
      <button
        type='button'
        className={ActionTypes.Secondary}
        onClick={handleSubmit}
      >
        Sort <i className={open ? 'arrow up' : 'arrow down'}></i>
      </button>
      {open && (
        <ul className='filters'>
          <li
            className='search case'
            onClick={() => handleFilter('date')}
            onKeyPress={(e) => handleFilterChange(e, 'date')}
            tabIndex='0'
          >
            Latest
          </li>
          <li
            className='search case'
            onClick={() => handleFilter('asc')}
            onKeyPress={(e) => handleFilterChange(e, 'asc')}
            tabIndex='0'
          >
            Lowest priced
          </li>
          <li
            className='search case'
            onClick={() => handleFilter('desc')}
            onKeyPress={(e) => handleFilterChange(e, 'desc')}
            tabIndex='0'
          >
            Highest priced
          </li>
        </ul>
      )}
    </>
  );
};

export default Filters;

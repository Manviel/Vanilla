import React from 'react';

import preload from '../data/data.json';

const Search = () => {
  return(
    <div className='search'>
      {preload.shows.map((show) => <h3>{show.title}</h3>)}
    </div>
  );
}

export default Search;

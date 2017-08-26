import React from 'react';

import ShowCard from './ShowCard';
import preload from '../data/data.json';

const Search = () => {
  return(
    <div className='search'>
      <div className='container'>
        {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
      </div>
    </div>
  );
}

export default Search;

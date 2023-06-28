import React from 'react';

import './loader.css';

const Loader = () => (
  <aside className='pulse-loading view rounded content-full material' aria-busy>
    <p className='loader box rounded'>Loading...</p>
    <div className='skeleton box rounded screen'></div>
  </aside>
);

export default Loader;

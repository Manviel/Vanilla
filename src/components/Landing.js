import React from 'react';

import { Link } from 'react-router-dom';
import './Style.css';

const Landing = () => {
  return(
    <div className="landing">
      <h1>sVideo</h1>
      <input type="text" placeholder="Search" />
      <Link to="/search" className="link">Browse</Link>
    </div>
  );
}

export default Landing;

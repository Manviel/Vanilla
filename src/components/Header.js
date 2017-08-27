import React from 'react';
import { Link } from 'react-router-dom';

import './Style.css';

const Header = () => (
  <header className="header">
    <span>
      <Link to='/'>
        sVideo
      </Link>
    </span>
  </header>
);

export default Header;

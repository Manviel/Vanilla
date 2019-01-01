import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <strong>
        sVideo
      </strong>
      <input value={props.searchTerm}
        onChange={props.handleSearchTerm}
        type="text" placeholder="Search"
      />
    </header>
  );
};

export default Header;

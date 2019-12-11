import React, { useState } from "react";

const AutoComplete = ({ handleFilter }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <dt className="flex space search" onClick={() => setOpen(!open)}>
        Sort <i className={open ? "arrow up" : "arrow down"}></i>
      </dt>
      {open && (
        <ul className="filters">
          <li className="search">Latest</li>
          <li className="search">Lowest priced</li>
          <li className="search">Highest priced</li>
        </ul>
      )}
    </>
  );
};

export default AutoComplete;

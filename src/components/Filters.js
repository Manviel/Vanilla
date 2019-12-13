import React, { useState } from "react";

const Filters = ({ handleFilter }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="content">
      <dt className="flex space search case" onClick={() => setOpen(!open)}>
        Sort <i className={open ? "arrow up" : "arrow down"}></i>
      </dt>
      {open && (
        <ul className="filters case">
          <li className="search" onClick={() => handleFilter("date")}>
            Latest
          </li>
          <li className="search" onClick={() => handleFilter("asc")}>
            Lowest priced
          </li>
          <li className="search" onClick={() => handleFilter("desc")}>
            Highest priced
          </li>
        </ul>
      )}
    </section>
  );
};

export default Filters;

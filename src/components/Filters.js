import React, { useState } from "react";

const Filters = ({ handleFilter }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => setOpen(!open);

  const handleKeypress = (e) => {
    if (e.which === 13) {
      handleSubmit();
    }
  };

  const handleFilterChange = (e, field) => {
    if (e.which === 13) {
      handleFilter(field);
      handleSubmit();
    }
  };

  return (
    <>
      <h3
        className="flex space search case"
        onClick={handleSubmit}
        onKeyPress={handleKeypress}
        tabIndex="0"
      >
        Sort <i className={open ? "arrow up" : "arrow down"}></i>
      </h3>
      {open && (
        <ul className="filters">
          <li
            className="search case"
            onClick={() => handleFilter("date")}
            onKeyPress={(e) => handleFilterChange(e, "date")}
            tabIndex="0"
          >
            Latest
          </li>
          <li
            className="search case"
            onClick={() => handleFilter("asc")}
            onKeyPress={(e) => handleFilterChange(e, "asc")}
            tabIndex="0"
          >
            Lowest priced
          </li>
          <li
            className="search case"
            onClick={() => handleFilter("desc")}
            onKeyPress={(e) => handleFilterChange(e, "desc")}
            tabIndex="0"
          >
            Highest priced
          </li>
        </ul>
      )}
    </>
  );
};

export default Filters;

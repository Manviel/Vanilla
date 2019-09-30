import React from "react";

const Autocomplete = ({ showSuggestions, suggestions, handleFilter }) => (
  <>
    <input
      type="text"
      className="control search"
      onChange={handleFilter}
      placeholder="Search"
    />
    {showSuggestions && suggestions.length > 0 ? (
      <ul className="suggestions">
        {suggestions.map(su => (
          <li
            className="item border"
            key={su.id}
            onClick={() => (window.location.href = su.link)}
          >
            {su.title}
          </li>
        ))}
      </ul>
    ) : null}
  </>
);

export default Autocomplete;

import React from "react";

import "../styles/albums.css";

const Tags = ({ tags }) => (
  <>
    <span className="category tag case">Coats & jackets</span>
    {tags.map(tag => (
      <span key={Math.random()} className="category tag sub case">
        {tag}
      </span>
    ))}
  </>
);

export default Tags;

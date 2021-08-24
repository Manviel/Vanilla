import React from "react";

import "../styles/albums.css";

const Tags = ({ tags = [] }) => (
  <>
    <p className="category tag case">Coats & jackets</p>
    {tags.map((tag, index) => (
      <span key={index} className="category tag sub case">
        {tag}
      </span>
    ))}
  </>
);

export default Tags;

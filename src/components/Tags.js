import React from 'react';

const Tags = ({ tags = [] }) =>
  tags.map((tag, index) => (
    <span key={index} className='chip paper'>
      {tag}
    </span>
  ));

export default Tags;

import React from 'react';

const Tags = ({ tags = [] }) =>
  tags.map((tag) => (
    <span key={tag.id} className='chip paper'>
      {tag.label}
    </span>
  ));

export default Tags;

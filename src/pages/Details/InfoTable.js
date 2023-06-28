import React from 'react';

import './popup.css';

const InfoTable = ({ item }) => (
  <table>
    <caption>Information</caption>
    <thead className='material'>
      <tr>
        <th>Property</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sizes</td>
        <td>{item.name}</td>
      </tr>
      <tr>
        <td>Wash care</td>
        <td>Machine wash</td>
      </tr>
      <tr>
        <td>Product code</td>
        <td>{item.postId}</td>
      </tr>
      <tr>
        <td>Author</td>
        <td>{item.email}</td>
      </tr>
      <tr>
        <td>Price</td>
        <td>&#163; {item.id}</td>
      </tr>
    </tbody>
  </table>
);

export default InfoTable;

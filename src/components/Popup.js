import React from 'react';
import { Link } from 'react-router-dom';

import { ActionTypes, Paths } from '../utils/models';

import '../styles/popup.css';

const Popup = ({ item }) => (
  <article className='flex col'>
    <section className='flex col info'>
      <h3 className='name case day'></h3>

      <table>
        <caption>Information</caption>
        <thead class='material'>
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
    </section>

    <Link to={Paths.Profile} className={ActionTypes.Contained}>
      Pay with Touch ID
    </Link>
  </article>
);

export default Popup;

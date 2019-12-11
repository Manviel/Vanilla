import React from "react";
import { Link } from "react-router-dom";

import "../styles/popup.css";

const Popup = ({ item }) => (
  <article className="flex col">
    <section className="flex col info">
      <h3 className="name day">Information</h3>

      <table>
        <tbody>
          <tr>
            <th>Sizes</th>
            <th>Color</th>
          </tr>
          <tr>
            <td className="name">{item.name}</td>
            <td className="name">Black</td>
          </tr>
          <tr>
            <th colSpan="2">Description</th>
          </tr>
          <tr>
            <td colSpan="2" className="name">
              {item.email}
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="label name">Care</h3>

      <table>
        <tbody>
          <tr>
            <th>Wash care</th>
            <th>Product code</th>
          </tr>
          <tr>
            <td className="name">Machine wash</td>
            <td className="name">{item.postId}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <Link to="/home">
      <button className="flex space buy">
        <div className="flex">
          <span className="currency">&#163;</span>
          <h6 className="price">{item.id}</h6>
        </div>
        <span className="subtitle">Pay with Touch ID</span>
      </button>
    </Link>
  </article>
);

export default Popup;

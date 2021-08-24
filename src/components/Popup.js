import React from "react";
import { Link } from "react-router-dom";

import "../styles/popup.css";

const Popup = ({ item }) => (
  <article className="flex col">
    <section className="flex col info">
      <h3 className="name case day">Information</h3>

      <table>
        <tbody>
          <tr>
            <th className="case">Sizes</th>
            <th className="case">Color</th>
          </tr>
          <tr>
            <td className="name case">{item.name}</td>
            <td className="name case">Black</td>
          </tr>
          <tr>
            <th colSpan="2" className="case">
              Description
            </th>
          </tr>
          <tr>
            <td colSpan="2" className="name case">
              {item.email}
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="label name case">Care</h3>

      <table>
        <tbody>
          <tr>
            <th className="case">Wash care</th>
            <th className="case">Product code</th>
          </tr>
          <tr>
            <td className="name case">Machine wash</td>
            <td className="name case">{item.postId}</td>
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
        <span className="case">Pay with Touch ID</span>
      </button>
    </Link>
  </article>
);

export default Popup;

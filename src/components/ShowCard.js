import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Style.css';

class ShowCard extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return(
      <Link className='wrapper' to={`/details/${this.props.imdbID}`}>
        <img className='image' alt={`${this.props.title} Show poster`}
          src={require(`../img/posters/${this.props.poster}`)} />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Link>
    );
  }
}

export default ShowCard;

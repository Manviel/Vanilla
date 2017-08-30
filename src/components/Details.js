import React, { Component } from 'react';
import Header from './Header';
import './Style.css';

class Details extends Component {
  props: {
    show: Show
  };

  render() {
    const { title, description, year, poster, trailer } = this.props.show;

    return(
      <div>
        <Header />
        <section className="details">
          <img alt={`For ${title}`} className="pic"
            src={require(`../img/posters/${poster}`)} />
          <div>
            <h1>{title}</h1>
            <h2>({year})</h2>
            <p>{description}</p>
            <div className="video">
              <iframe title="YouTube Video Frame"
                src={`https://www.youtube.com/embed/${trailer}`}
                frameBorder="0"
                allowFullScreen />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Details;

import React, { Component } from 'react';
import Header from './Header';
import Spinner from './Spinner';
import './Style.css';

class Details extends Component {
  state = {
    apiData: { rating: '' }
  };

  props: {
    show: Show
  };

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;
    if (this.state.apiData.rating) {
      ratingComponent = <h3>{this.state.apiData.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }

    return(
      <div className='details'>
        <Header />
        <section className="landing">
          <img alt={`For ${title}`} className="pic"
            src={require(`../img/posters/${poster}`)} />
          <div>
            <h1>{title}</h1>
            <h2>({year})</h2>
            {ratingComponent}
            <p>{description}</p>
            <iframe height="240" width="360"
              title="YouTube Video Frame"
              src={`https://www.youtube.com/embed/${trailer}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Details;

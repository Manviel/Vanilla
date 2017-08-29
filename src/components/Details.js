import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiDetails } from '../redux/actionCreators';
import Header from './Header';
import Spinner from './Spinner';
import './Style.css';

class Details extends Component {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  }

  props: {
    show: Show,
    rating: string,
    getAPIData: Function
  };

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let rating;
    if (this.props.rating) {
      rating = <h3>{this.props.rating}</h3>;
    } else {
      rating = <Spinner />;
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
            {rating}
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

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID]
    ? state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIData() {
    dispatch(getApiDetails(ownProps.show.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Style.css';

import { setSearchTerm } from '../redux/actionCreators';

const Landing = (props) => {
  return(
    <div className="landing">
      <h1>sVideo</h1>
      <input onChange={props.handleSearchTerm} value={props.searchTerm}
        type="text" placeholder="Search" />
      <Link to="/search" className="link">Browse</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTerm(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

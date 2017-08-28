import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from '../redux/actionCreators';
import './Style.css';

const Header = (props) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input onChange={props.handleSearchTerm}
        value={props.searchTerm}
        type="text" placeholder="Search" />
    );
  } else {
    utilSpace = (
      <span>
        <Link to="/search">
          Back
        </Link>
      </span>
    );
  }

  return(
    <header className="header">
      <strong>
        <Link to='/'>
          sVideo
        </Link>
      </strong>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTerm(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

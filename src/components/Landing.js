import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import './Style.css';
import { setSearchTerm } from '../redux/actionCreators';

class Landing extends Component {
  props: {
    searchTerm: string,
    handleSearchTerm: Function,
    history: RouterHistory
  };

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    return(
      <div className="landing">
        <h1>sVideo</h1>
        <form onSubmit={this.goToSearch}>
          <input onChange={this.props.handleSearchTerm}
            value={this.props.searchTerm}
            type="text" placeholder="Search" />
        </form>
        <Link to="/search" className="link">Browse</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTerm(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

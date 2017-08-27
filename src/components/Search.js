import React, { Component } from 'react';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerm: ''
  };

  props: {
    shows: Array<Show>
  };

  handleSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  };

  render() {
    return(
      <div className='search'>
        <header className="header">
          <span>sVideo</span>
          <input onChange={this.handleSearchTerm}
            value={this.state.searchTerm}
            type="text" placeholder="Search" />
        </header>
        <div className='container'>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;

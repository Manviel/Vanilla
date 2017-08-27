import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

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
        <Header searchTerm={this.state.searchTerm} showSearch
          handleSearchTerm={this.handleSearchTerm} />
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

import React, { Component, Fragment } from 'react';

import ShowCard from './ShowCard';
import Header from './Header';

import '../styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({ data: json }))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          {this.state.data && this.state.data.map(show => <ShowCard key={show.id} {...show} />)}
        </div>
      </Fragment>
    );
  }
}

export default App;


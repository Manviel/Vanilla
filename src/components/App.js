import React, { Component, Suspense } from 'react';

const ShowCard = React.lazy(() => import('./ShowCard'));
const Header = React.lazy(() => import('./Header'));

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
      <Suspense fallback={<div className="indent">Loading...</div>}>
        <Header />
        <article className="container indent">
          {this.state.data && this.state.data.map(show => <ShowCard key={show.id} {...show} />)}
        </article>
      </Suspense>
    );
  }
}

export default App;


import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Landing = React.lazy(() => import("./Landing"));
const Details = React.lazy(() => import("./Details"));
const Header = React.lazy(() => import("./Header"));

import "../styles/index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <Suspense fallback={<div className="indent">Loading...</div>}>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Landing data={this.state.data} {...props} />}
          />
          <Route path="/:id" render={props => <Details {...props} />} />
        </Switch>
      </Suspense>
    );
  }
}

export default App;

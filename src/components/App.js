import React, { Suspense, lazy, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

const Landing = lazy(() => import("./Landing"));
const Details = lazy(() => import("./Details"));
const Header = lazy(() => import("./Header"));
const Albums = lazy(() => import("./Albums"));

import "../styles/index.css";
import "../styles/media.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Landing data={data} {...props} />}
        />
        <Route exact path="/:id" render={props => <Details {...props} />} />
        <Route path="/:id/albums" render={props => <Albums {...props} />} />
      </Switch>
    </Suspense>
  );
};

export default App;

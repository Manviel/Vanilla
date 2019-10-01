import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Loader from "./Loader";

const Landing = lazy(() => import("./Landing"));
const Details = lazy(() => import("./Details"));
const Albums = lazy(() => import("./Albums"));

import "../styles/variables.css";
import "../styles/index.css";
import "../styles/media.css";

const App = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/" render={props => <Landing {...props} />} />
      <Route exact path="/:id" render={props => <Details {...props} />} />
      <Route path="/:id/albums" render={props => <Albums {...props} />} />
    </Switch>
  </Suspense>
);

export default App;

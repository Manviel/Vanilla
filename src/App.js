import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Loader from "./components/Loader";

const Landing = lazy(() => import("./pages/Landing"));
const Details = lazy(() => import("./pages/Details"));
const Albums = lazy(() => import("./pages/Albums"));
const Home = lazy(() => import("./pages/Home"));

import "./styles/variables.css";
import "./styles/index.css";
import "./styles/media.css";

const App = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/" render={props => <Landing {...props} />} />
      <Route path="/home" render={props => <Home {...props} />} />
      <Route exact path="/:id" render={props => <Details {...props} />} />
      <Route path="/:id/albums" render={props => <Albums {...props} />} />
    </Switch>
  </Suspense>
);

export default App;

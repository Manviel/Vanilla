import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

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

    <CookieConsent
      location="bottom"
      buttonText="Close"
      style={{
        background: "#aeffc5",
        color: "#000",
        textTransform: "uppercase",
        lineHeight: "1.7em",
        flexDirection: "column"
      }}
      buttonStyle={{
        background: "#303030",
        color: "#fff",
        fontSize: "10px",
        textTransform: "uppercase",
        padding: "1.2em"
      }}
      expires={150}
    >
      Cookie use
      <br />
      This website uses cookies to enhance the user experience. If you continue,
      we assume that you consent to receive all cookies.{" "}
      <a
        href="https://www.cookiebot.com/en/cookie-banner/"
        style={{ textDecoration: "underline" }}
        target="_blank"
      >
        More info
      </a>
    </CookieConsent>
  </Suspense>
);

export default App;

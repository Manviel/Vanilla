import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { Store } from "./utils/context";

import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Store>,
  document.getElementById("root")
);

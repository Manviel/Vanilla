import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </HashRouter>
    );
  }
}

export default App;

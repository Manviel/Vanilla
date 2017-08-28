import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import store from './redux/store';
import Landing from './components/Landing';
import Search from './components/Search';
import Details from './components/Details';
import preload from './data/data.json';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/search'
                component={props => <Search shows={preload.shows} {...props} />} />
              <Route path="/details/:id"
                component={props => {
                  const selectedShow = preload.shows.find(
                    show => props.match.params.id === show.imdbID);
                  return <Details show={selectedShow} {...props} />;
                }}
              />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class App extends Component {
  state = {
    mounted: true
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Was clicked.');
    this.setState({ mounted: false });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <CSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeaveTimeout={300}>
            {this.state.mounted && <Form onSubmit={this.handleSubmit} />}
          </CSSTransitionGroup>
        </p>
      </div>
    );
  }
}

export default App;

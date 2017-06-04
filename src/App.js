import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

class App extends Component {
  state = {
    mounted: true
  };

  handleSubmit = event => {
    //event.preventDefault();
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
          <Form onSubmit={this.handleSubmit} className="animated fadeOutDown"/>
        </p>
      </div>
    );
  }
}

export default App;

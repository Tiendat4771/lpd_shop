import React, { Component } from 'react';
import './app.css';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router';
import HeaderComponent from './components/hearder/HeaderComponent';
import MainComponent from './components/main/MainComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <MainComponent />
      </div>
    );
  }
}

export default withRouter(connect()(App));

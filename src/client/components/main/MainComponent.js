import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/HomeComponent';
import Product from '../product/ProductComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </main>
    );
  }
}

export default MainComponent;

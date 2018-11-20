import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from '../home/HomeComponent';
import ProductComponent from '../product/ProductComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomeComponent} />
          <Route path="/products" component={ProductComponent} />
        </Switch>
      </div>
    );
  }
}

export default MainComponent;

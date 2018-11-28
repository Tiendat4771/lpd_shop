import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/hearder/HeaderComponent';
import Home from './components/home/HomeComponent';
// import Products from './components/product/ProductComponent';
import Products from './components/products/ProductsComponent';
import ProductDetail from './components/productDetail/ProductDetail';
import './app.scss';

class App extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/detail" component={ProductDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;

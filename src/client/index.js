import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { store, history } from './store/config.store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

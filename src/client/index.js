import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/rootReducer';
import App from './App';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(middleware, thunkMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <App />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);

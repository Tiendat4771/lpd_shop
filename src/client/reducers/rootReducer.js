import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducers = combineReducers({
  // productReducer: product,
  routing: routerReducer
});

export default rootReducers;

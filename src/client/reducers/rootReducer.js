import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const products = {
  todos: [{ id: 123, text: 'hello', completed: false }]
};
const rootReducers = combineReducers({
  productReducer: products,
  router: routerReducer
});

export default rootReducers;

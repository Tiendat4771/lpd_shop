import { createStore, applyMiddleware, compose } from "redux";
// import loggerMiddleware from "../middleware/logger";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers/rootReducer";

// const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
);

export default store;

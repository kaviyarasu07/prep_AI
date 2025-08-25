import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Root-saga/Root-saga";
import rootReducer from "../Root-reducer/Root-reducer";

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;

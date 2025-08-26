import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Root_Reducer/Root_Reducer";
import rootSaga from "../Root_Saga/Root_Saga";

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;
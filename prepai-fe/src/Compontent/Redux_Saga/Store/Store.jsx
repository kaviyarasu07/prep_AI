


import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import superadminReducer from "../Reducer/Superadmin_Reducer";
import superadminSaga from "../Saga/Superadmin_Saga";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    superadmin: superadminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(superadminSaga);

export default Store;

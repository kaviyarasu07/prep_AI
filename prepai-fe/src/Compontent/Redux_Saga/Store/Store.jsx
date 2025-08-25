
// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// // import rootReducer from "../Root_Reducer/Root_Reducer";

// import rootSaga from "../Root_Saga/Root_Saga";
// import rootReducer from "../Root_Reducer/Root_Reducer";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import superadminReducer from "../Reducer/Superadmin_Reducer";
import superadminSaga from "../Saga/Superadmin_Saga";


// import superadminReducer from "./Reducer/Superadmin_Reducer";
// import superadminSaga from "./Saga/Superadmin_Saga";

// import superadminReducer from "./Reducer/Superadmin_Reducer";
// import superadminSaga from "./Saga/Superadmin_Saga";


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

// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import rootReducer from "./Redux_saga/Reducer/Root_Reducer";
// import rootSaga from "./Redux_saga/Root_saga";
 
// const sagaMiddleware = createSagaMiddleware();
 
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });
 
// sagaMiddleware.run(
// rootSaga);
 
// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// // import rootReducer from "./Reducer/Root_Reducer";
// import rootSaga from "../Root_saga/Root_saga";
// import rootReducer from "../Root_Reducer/Root_Reducer";
// // import rootSaga from "./Root_saga";

// const sagaMiddleware = createSagaMiddleware();

// const Store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga);

// export default Store;


// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import rootReducer from "../Root_Reducer/Root_Reducer";
// import rootSaga from "../Root_saga/Root_saga";

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

// export default store;

// // import { applyMiddleware } from "redux";
// import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import rootReducer from "../Root_Reducer/Root_Reducer";
// import rootSaga from "../Root_saga/Root_saga";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);  // ✅ saga run pannum

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Root_Reducer/Root_Reducer"; // make sure this exports reducer
import rootSaga from "../Root_saga/Root_saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;


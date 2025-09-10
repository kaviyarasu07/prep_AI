// import { combineReducers } from "redux";
// import collegeReducer from "../Reducer/College_Reducer";
// // import collegeReducer from "./collegeReducer";
 
// const rootReducer = combineReducers({
//   college: collegeReducer,
// });
 
// export default rootReducer;


// rootReducer.js
import { combineReducers } from "redux";
import collegeReducer from "../Reducer/College_Reducer";
// import collegeReducer from "./collegeReducer";

const rootReducer = combineReducers({
  collegeData: collegeReducer // selector should use state.collegeData
});

export default rootReducer;

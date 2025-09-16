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
import departmentReducer from "../Reducer/Department_Reducer";
// import collegeReducer from "./collegeReducer";

const rootReducer = combineReducers({
  collegeData: collegeReducer ,
   departmentData: departmentReducer
});

export default rootReducer;

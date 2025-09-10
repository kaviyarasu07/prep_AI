// // import {
// //   FETCH_COLLEGE_SUMMARY_REQUEST,
// //   FETCH_COLLEGE_SUMMARY_SUCCESS,
// //   FETCH_COLLEGE_SUMMARY_FAILURE
// // } from "../Types/collegeTypes";  // exact file name

// import { FETCH_COLLEGE_SUMMARY_FAILURE, FETCH_COLLEGE_SUMMARY_REQUEST, FETCH_COLLEGE_SUMMARY_SUCCESS } from "../Types/College_Types";

 
// const initialState = {
//   loading: false,
//   summary: {},
//   error: null,
// };
 
// const collegeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_COLLEGE_SUMMARY_REQUEST:
//       return { ...state, loading: true };
//     case FETCH_COLLEGE_SUMMARY_SUCCESS:
//       return { ...state, loading: false, summary: action.payload, error: null };
//     case FETCH_COLLEGE_SUMMARY_FAILURE:
//       return { ...state, loading: false, summary: {}, error: action.payload };
//     default:
//       return state;
//   }
// };
 
// export default collegeReducer;


import {
  FETCH_COLLEGE_SUMMARY_REQUEST,
  FETCH_COLLEGE_SUMMARY_SUCCESS,
  FETCH_COLLEGE_SUMMARY_FAILURE,
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  SEARCH_DEPARTMENTS_REQUEST,
  SEARCH_DEPARTMENTS_SUCCESS,
  SEARCH_DEPARTMENTS_FAILURE,
  FETCH_DEPARTMENT_BY_ID_REQUEST,
  FETCH_DEPARTMENT_BY_ID_SUCCESS,
  FETCH_DEPARTMENT_BY_ID_FAILURE
} from "../Types/College_Types";

const initialState = {
  loading: false,
  summary: {},
  departments: [],
  error: null
};

const collegeReducer = (state = initialState, action) => {
  switch (action.type) {
    // === College Summary ===
    case FETCH_COLLEGE_SUMMARY_REQUEST:
      return { ...state, loading: true };
    case FETCH_COLLEGE_SUMMARY_SUCCESS:
      return { ...state, loading: false, summary: action.payload, error: null };
    case FETCH_COLLEGE_SUMMARY_FAILURE:
      return { ...state, loading: false, summary: {}, error: action.payload };

    // === Departments ===
    case FETCH_DEPARTMENTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_DEPARTMENTS_SUCCESS:
      return { ...state, loading: false, departments: action.payload, error: null };
    case FETCH_DEPARTMENTS_FAILURE:
      return { ...state, loading: false, departments: [], error: action.payload };

      case SEARCH_DEPARTMENTS_REQUEST:
  return { ...state, loading: true };
case SEARCH_DEPARTMENTS_SUCCESS:
  console.log("Reducer search result:", action.payload); // ✅ print panna
  return { ...state, loading: false, departments: action.payload, error: null };
case SEARCH_DEPARTMENTS_FAILURE:
  return { ...state, loading: false, departments: [], error: action.payload };
;

case FETCH_DEPARTMENT_BY_ID_REQUEST:
      return { ...state, loading: true };
    case FETCH_DEPARTMENT_BY_ID_SUCCESS:
      return { ...state, loading: false, departmentById: action.payload, error: null };
    case FETCH_DEPARTMENT_BY_ID_FAILURE:
      return { ...state, loading: false, departmentById: null, error: action.payload };


    default:
      return state;
  }
};

export default collegeReducer;

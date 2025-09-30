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
  SEARCH_DEPARTMENTS_REQUEST,
  SEARCH_DEPARTMENTS_SUCCESS,
  SEARCH_DEPARTMENTS_FAILURE,
  FETCH_DEPARTMENT_BY_ID_REQUEST,
  FETCH_DEPARTMENT_BY_ID_SUCCESS,
  FETCH_DEPARTMENT_BY_ID_FAILURE,
  UPDATE_DEPARTMENT_FAILURE,
  UPDATE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAILURE,
  FETCH_COLLEGE_DEPARTMENTS_REQUEST,
  FETCH_COLLEGE_DEPARTMENTS_SUCCESS,
  FETCH_COLLEGE_DEPARTMENTS_FAILURE
} from "../Types/College_Types";

const initialState = {
   loading: false,
  summary: {},
  departments: [],
  departmentById: null,
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

 case FETCH_COLLEGE_DEPARTMENTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_COLLEGE_DEPARTMENTS_SUCCESS:
      return { ...state, loading: false, departments: action.payload, error: null };
    case FETCH_COLLEGE_DEPARTMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

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


 case UPDATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        departments: state.departments.map(dept =>
          dept.id === action.payload.id ? action.payload : dept
        ),
        error: null
      };

    case UPDATE_DEPARTMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

      

      case DELETE_DEPARTMENT_REQUEST:
  return { ...state, loading: true };
case DELETE_DEPARTMENT_SUCCESS:
  return { ...state, loading: false, message: action.payload, error: null };
case DELETE_DEPARTMENT_FAILURE:
  return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default collegeReducer;
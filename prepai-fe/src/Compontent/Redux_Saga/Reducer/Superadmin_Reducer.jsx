// // // Reducer file: superadminReducer.js
// // import {
// //   FETCH_SUPERADMIN_SUMMARY_REQUEST,
// //   FETCH_SUPERADMIN_SUMMARY_SUCCESS,
// //   FETCH_SUPERADMIN_SUMMARY_FAILURE,
// //   FETCH_COLLEGES_REQUEST,
// // //   FETCH_COLLEGES_SUCCESS,
// // //   FETCH_COLLEGES_FAILURE,
// // } from "../Types/Superadmin_Types";

// // const initialState = {
// //   loading: false,
// //   summary: null,   // 🔹 add summary
// //   colleges: [],    // 🔹 add colleges
// //   activity: [],    // 🔹 add activity
// //   error: null,
// // };

// // const superadminReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case FETCH_SUPERADMIN_SUMMARY_REQUEST:
// //     case FETCH_COLLEGES_REQUEST:
// //       return { ...state, loading: true };

// //     case FETCH_SUPERADMIN_SUMMARY_SUCCESS:
// //       return { ...state, loading: false, summary: action.payload };

// //     // case FETCH_COLLEGES_SUCCESS:
// //     //   return { ...state, loading: false, colleges: action.payload };

// //     case FETCH_SUPERADMIN_SUMMARY_FAILURE:
// //     case FETCH_COLLEGES_FAILURE:
// //       return { ...state, loading: false, error: action.payload };

// //     default:
// //       return state;
// //   }
// // };

// // export default superadminReducer;


// import {
//   FETCH_COLLEGE_ADMIN_SUMMARY_REQUEST,
//   FETCH_COLLEGE_ADMIN_SUMMARY_SUCCESS,
//   FETCH_COLLEGE_ADMIN_SUMMARY_FAILURE,
// } from "../Types/Superadmin_Types";

// const initialState = {
//   loading: false,
//   summary: [],
//   error: null,
// };

// const superadminReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_COLLEGE_ADMIN_SUMMARY_REQUEST:
//       return { ...state, loading: true, error: null };

//     case FETCH_COLLEGE_ADMIN_SUMMARY_SUCCESS:
//       return { ...state, loading: false, summary: action.payload };

//     case FETCH_COLLEGE_ADMIN_SUMMARY_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export default superadminReducer;

import {
 FETCH_SUPERADMIN_SUMMARY_REQUEST,
  FETCH_SUPERADMIN_SUMMARY_SUCCESS,
  FETCH_SUPERADMIN_SUMMARY_FAILURE,
  FETCH_COLLEGES_REQUEST,
  FETCH_COLLEGES_SUCCESS,
  FETCH_COLLEGES_FAILURE,
  UPDATE_COLLEGE_STATUS_REQUEST,
  UPDATE_COLLEGE_STATUS_SUCCESS,
  UPDATE_COLLEGE_STATUS_FAILURE,
} from "../Types/Superadmin_Types";

const initialState = {
  loading: false,
  summary: [],
  colleges: [],
  error: null,
  
};

const superadminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUPERADMIN_SUMMARY_REQUEST:
    case FETCH_COLLEGES_REQUEST:
            case UPDATE_COLLEGE_STATUS_REQUEST:
      return { ...state, loading: true };

    case FETCH_SUPERADMIN_SUMMARY_SUCCESS:
      return { ...state, loading: false, summary: action.payload };

    case FETCH_COLLEGES_SUCCESS:
      return { ...state, loading: false, colleges: action.payload };

    case FETCH_SUPERADMIN_SUMMARY_FAILURE:
    case FETCH_COLLEGES_FAILURE:
      return { ...state, loading: false, error: action.payload };


   case UPDATE_COLLEGE_STATUS_SUCCESS:
  return {
    ...state,
    loading: false,
    colleges: state.colleges.map((col) =>
      col.id === action.payload.id ? action.payload : col
    ),
  };

      case UPDATE_COLLEGE_STATUS_FAILURE:
  return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default superadminReducer;


// import {
//   FETCH_COLLEGE_SUMMARY_REQUEST,
//   FETCH_COLLEGE_SUMMARY_SUCCESS,
//   FETCH_COLLEGE_SUMMARY_FAILURE
// } from "../Types/College_Types";

// export const fetchCollegeSummaryRequest = () => ({
//   type: FETCH_COLLEGE_SUMMARY_REQUEST,
// });

// export const fetchCollegeSummarySuccess = (data) => ({
//   type: FETCH_COLLEGE_SUMMARY_SUCCESS,
//   payload: data,
// });

// export const fetchCollegeSummaryFailure = (error) => ({
//   type: FETCH_COLLEGE_SUMMARY_FAILURE,
//   payload: error,
// });


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

// === College Summary Actions ===
export const fetchCollegeSummaryRequest = () => ({
  type: FETCH_COLLEGE_SUMMARY_REQUEST,
});

export const fetchCollegeSummarySuccess = (data) => ({
  type: FETCH_COLLEGE_SUMMARY_SUCCESS,
  payload: data,
});

export const fetchCollegeSummaryFailure = (error) => ({
  type: FETCH_COLLEGE_SUMMARY_FAILURE,
  payload: error,
});

// === Departments Actions ===
export const fetchDepartmentsRequest = () => ({
  type: FETCH_DEPARTMENTS_REQUEST,
});

export const fetchDepartmentsSuccess = (data) => ({
  type: FETCH_DEPARTMENTS_SUCCESS,
  payload: data,
});

export const fetchDepartmentsFailure = (error) => ({
  type: FETCH_DEPARTMENTS_FAILURE,
  payload: error,
});


export const searchDepartmentsRequest = (adminName) => ({
  type: SEARCH_DEPARTMENTS_REQUEST,
  payload: adminName,
});

export const searchDepartmentsSuccess = (data) => ({
  type: SEARCH_DEPARTMENTS_SUCCESS,
  payload: data
});

export const searchDepartmentsFailure = (error) => ({
  type: SEARCH_DEPARTMENTS_FAILURE,
  payload: error
});


export const fetchDepartmentByIdRequest = (id) => ({
  type: FETCH_DEPARTMENT_BY_ID_REQUEST,
  payload: id,  // ID pass panna use pannuvom
});

export const fetchDepartmentByIdSuccess = (data) => ({
  type: FETCH_DEPARTMENT_BY_ID_SUCCESS,
  payload: data,  // API response data
});

export const fetchDepartmentByIdFailure = (error) => ({
  type: FETCH_DEPARTMENT_BY_ID_FAILURE,
  payload: error,  // Error message
});


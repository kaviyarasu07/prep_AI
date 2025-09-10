
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
  SEARCH_DEPARTMENTS_FAILURE
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
  payload: adminName
});

export const searchDepartmentsSuccess = (data) => ({
  type: SEARCH_DEPARTMENTS_SUCCESS,
  payload: data
});

export const searchDepartmentsFailure = (error) => ({
  type: SEARCH_DEPARTMENTS_FAILURE,
  payload: error
});

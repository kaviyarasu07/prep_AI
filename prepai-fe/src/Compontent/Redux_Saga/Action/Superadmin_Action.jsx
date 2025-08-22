// // import {
// //   FETCH_COLLEGE_ADMIN_SUMMARY_REQUEST,
// //   FETCH_COLLEGE_ADMIN_SUMMARY_SUCCESS,
// //   FETCH_COLLEGE_ADMIN_SUMMARY_FAILURE,
// // } from "../Types/Superadmin_Types";

// // export const fetchCollegeAdminSummaryRequest = () => ({
// //   type: FETCH_COLLEGE_ADMIN_SUMMARY_REQUEST,
// // });

// // export const fetchCollegeAdminSummarySuccess = (data) => ({
// //   type: FETCH_COLLEGE_ADMIN_SUMMARY_SUCCESS,
// //   payload: data,
// // });

// // export const fetchCollegeAdminSummaryFailure = (error) => ({
// //   type: FETCH_COLLEGE_ADMIN_SUMMARY_FAILURE,
// //   payload: error,
// // });



// import {
//   FETCH_COLLEGE_ADMIN_SUMMARY_REQUEST,
//   FETCH_COLLEGE_ADMIN_SUMMARY_SUCCESS,
//   FETCH_COLLEGE_ADMIN_SUMMARY_FAILURE,
// } from "../Types/Superadmin_Types";

// export const fetchCollegeAdminSummaryRequest = () => ({
//   type: FETCH_COLLEGE_ADMIN_SUMMARY_REQUEST,
// });

// export const fetchCollegeAdminSummarySuccess = (data) => ({
//   type: FETCH_COLLEGE_ADMIN_SUMMARY_SUCCESS,
//   payload: data,
// });

// export const fetchCollegeAdminSummaryFailure = (error) => ({
//   type: FETCH_COLLEGE_ADMIN_SUMMARY_FAILURE,
//   payload: error,
// });
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

// Superadmin Summary Actions
export const fetchSuperadminSummaryRequest = () => ({
  type: FETCH_SUPERADMIN_SUMMARY_REQUEST,
});

export const fetchSuperadminSummarySuccess = (data) => ({
  type: FETCH_SUPERADMIN_SUMMARY_SUCCESS,
  payload: data,
});

export const fetchSuperadminSummaryFailure = (error) => ({
  type: FETCH_SUPERADMIN_SUMMARY_FAILURE,
  payload: error,
});

// Colleges Actions
export const fetchCollegesRequest = () => ({
  type: FETCH_COLLEGES_REQUEST,
});

export const fetchCollegesSuccess = (data) => ({
  type: FETCH_COLLEGES_SUCCESS,
  payload: data,
});

export const fetchCollegesFailure = (error) => ({
  type: FETCH_COLLEGES_FAILURE,
  payload: error,
});


export const updateCollegeStatusRequest = (payload) => ({
  type: UPDATE_COLLEGE_STATUS_REQUEST,
  payload,
});

export const updateCollegeStatusSuccess = (college) => ({
  type: UPDATE_COLLEGE_STATUS_SUCCESS,
  payload: college,
});

export const updateCollegeStatusFailure = (error) => ({
  type: UPDATE_COLLEGE_STATUS_FAILURE,
  payload: error,
});
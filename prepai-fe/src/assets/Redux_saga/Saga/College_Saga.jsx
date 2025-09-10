// // College_Saga.js
// import { call, put, takeLatest } from "redux-saga/effects";
// import { FETCH_COLLEGE_SUMMARY_FAILURE, FETCH_COLLEGE_SUMMARY_REQUEST, FETCH_COLLEGE_SUMMARY_SUCCESS } from "../Types/College_Types";
// import { getCollegeSummary } from "../../Services/College_Api";

// function* fetchCollegeSummarySaga() {
//   try {
//     const response = yield call(getCollegeSummary);

//     // Console log panna API response check panna
//     console.log("API Response from Saga:", response);

//     yield put({ type: FETCH_COLLEGE_SUMMARY_SUCCESS, payload: response });
//   } catch (error) {
//     console.error("Saga Error:", error);
//     yield put({ type: FETCH_COLLEGE_SUMMARY_FAILURE, payload: error.message });
//   }
// }

// export default function* collegeSaga() {
//   yield takeLatest(FETCH_COLLEGE_SUMMARY_REQUEST, fetchCollegeSummarySaga);
// }

import { call, put, takeLatest } from "redux-saga/effects";
import { getCollegeSummary, getDepartments } from "../../Services/College_Api";
import {
  FETCH_COLLEGE_SUMMARY_REQUEST,
  FETCH_COLLEGE_SUMMARY_SUCCESS,
  FETCH_COLLEGE_SUMMARY_FAILURE,
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE
} from "../Types/College_Types";

// College Summary
function* fetchCollegeSummarySaga() {
  try {
    const response = yield call(getCollegeSummary);
    yield put({ type: FETCH_COLLEGE_SUMMARY_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: FETCH_COLLEGE_SUMMARY_FAILURE, payload: error.message });
  }
}

function* fetchDepartmentsSaga() {
  try {
    const response = yield call(getDepartments);
    yield put({ type: FETCH_DEPARTMENTS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: FETCH_DEPARTMENTS_FAILURE, payload: error.message });
  }
}

export default function* collegeSaga() {
  yield takeLatest(FETCH_COLLEGE_SUMMARY_REQUEST, fetchCollegeSummarySaga);
  yield takeLatest(FETCH_DEPARTMENTS_REQUEST, fetchDepartmentsSaga);
}


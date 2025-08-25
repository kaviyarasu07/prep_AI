<<<<<<< Updated upstream

=======
// import { call, put, takeLatest } from "redux-saga/effects";
// import {
//   FETCH_COLLEGE_ADMIN_SUMMARY_REQUEST,
// } from "../Types/Superadmin_Types";
// import {
//   fetchCollegeAdminSummarySuccess,
//   fetchCollegeAdminSummaryFailure,
// } from "../Action/Superadmin_Action";
// import { fetchCollegeAdminSummaryAPI } from "../Api/Api";

// function* fetchCollegeAdminSummarySaga() {
//   try {
//     const data = yield call(fetchCollegeAdminSummaryAPI);
//     yield put(fetchCollegeAdminSummarySuccess(data));
//   } catch (error) {
//     yield put(fetchCollegeAdminSummaryFailure(error.message));
//   }
// }

// export default function* superadminSaga() {
//   yield takeLatest(FETCH_COLLEGE_ADMIN_SUMMARY_REQUEST, fetchCollegeAdminSummarySaga);
// }
>>>>>>> Stashed changes


import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCollegesAPI, fetchSuperadminSummaryAPI, updateCollegeStatusAPI } from "../Api/Api";
import { fetchCollegesFailure, fetchCollegesSuccess, fetchSuperadminSummaryFailure, fetchSuperadminSummarySuccess  ,  updateCollegeStatusSuccess,
<<<<<<< Updated upstream
  updateCollegeStatusFailure,
  fetchSuperadminSummaryRequest,
  fetchCollegesRequest,} from "../Action/Superadmin_Action";
import { FETCH_COLLEGES_REQUEST, FETCH_SUPERADMIN_SUMMARY_REQUEST  ,UPDATE_COLLEGE_STATUS_REQUEST,
} from "../Types/Superadmin_Types";
import { data } from "autoprefixer";

=======
  updateCollegeStatusFailure,} from "../Action/Superadmin_Action";
import { FETCH_COLLEGES_REQUEST, FETCH_SUPERADMIN_SUMMARY_REQUEST  ,UPDATE_COLLEGE_STATUS_REQUEST,
} from "../Types/Superadmin_Types";
// import {
//   fetchSuperadminSummarySuccess,
//   fetchSuperadminSummaryFailure,
//   fetchCollegesSuccess,
//   fetchCollegesFailure,
// } from "../Action/Superadmin_Action";
// import {
//   FETCH_SUPERADMIN_SUMMARY_REQUEST,
//   FETCH_COLLEGES_REQUEST,
// } from "../Types/Superadmin_Types";
// import { fetchSuperadminSummaryAPI, fetchCollegesAPI } from "../Api/Superadmin_api";

// Summary Saga
>>>>>>> Stashed changes
function* fetchSuperadminSummarySaga() {
  try {
    const data = yield call(fetchSuperadminSummaryAPI);
    yield put(fetchSuperadminSummarySuccess(data));
  } catch (error) {
    yield put(fetchSuperadminSummaryFailure(error.message));
  }
}

// Colleges Saga
function* fetchCollegesSaga() {
  try {
    const data = yield call(fetchCollegesAPI);
    yield put(fetchCollegesSuccess(data));
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
  } catch (error) {
    yield put(fetchCollegesFailure(error.message));
  }
}



<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
function* updateCollegeStatusSaga(action) {
  try {
    const updatedCollege = yield call(updateCollegeStatusAPI, action.payload);
    yield put(updateCollegeStatusSuccess(updatedCollege.data));
<<<<<<< Updated upstream


    yield put(fetchCollegesRequest());
=======
>>>>>>> Stashed changes
  } catch (err) {
    yield put(updateCollegeStatusFailure(err.message));
  }
}



<<<<<<< Updated upstream

export default function* superadminSaga() {
  yield takeLatest(FETCH_SUPERADMIN_SUMMARY_REQUEST, fetchSuperadminSummarySaga);
  yield takeLatest(FETCH_COLLEGES_REQUEST, fetchCollegesSaga ,updateCollegeStatusSaga);
   yield takeLatest(UPDATE_COLLEGE_STATUS_REQUEST, updateCollegeStatusSaga);
=======
export default function* superadminSaga() {
  yield takeLatest(FETCH_SUPERADMIN_SUMMARY_REQUEST, fetchSuperadminSummarySaga);
  yield takeLatest(FETCH_COLLEGES_REQUEST, fetchCollegesSaga ,updateCollegeStatusSaga);
    yield takeLatest(UPDATE_COLLEGE_STATUS_REQUEST, updateCollegeStatusSaga);
>>>>>>> Stashed changes
}

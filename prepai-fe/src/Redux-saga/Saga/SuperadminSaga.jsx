// import { call, put, takeLatest } from "redux-saga/effects";

// function* fetchSuperadminSummarySaga() {
//   try {
//     yield put(fetchSuperadminSummarySuccess(data));
//   } catch (error) {
//     yield put(fetchSuperadminSummaryFailure(error.message));
//   }
// }

// // Colleges Saga
// function* fetchCollegesSaga() {
//   try {
//     const data = yield call(fetchCollegesAPI);
//     yield put(fetchCollegesSuccess(data));

//   } catch (error) {
//     yield put(fetchCollegesFailure(error.message));
//   }
// }




// function* updateCollegeStatusSaga(action) {
//   try {
//     const updatedCollege = yield call(updateCollegeStatusAPI, action.payload);
//     yield put(updateCollegeStatusSuccess(updatedCollege.data));



//     yield put(fetchCollegesRequest());

//   } catch (err) {
//     yield put(updateCollegeStatusFailure(err.message));
//   }
// }

// export default function* superadminSaga() {
//   yield takeLatest(FETCH_SUPERADMIN_SUMMARY_REQUEST, fetchSuperadminSummarySaga);
//   yield takeLatest(FETCH_COLLEGES_REQUEST, fetchCollegesSaga ,updateCollegeStatusSaga);
//    yield takeLatest(UPDATE_COLLEGE_STATUS_REQUEST, updateCollegeStatusSaga);


// }
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCollegesService, fetchSuperadminSummaryService, updateCollegeStatusService } from "../../Service/SuperadminService";
import { fetchCollegesFailure, fetchCollegesRequest, fetchCollegesSuccess, fetchSuperadminSummaryFailure, fetchSuperadminSummarySuccess, updateCollegeStatusFailure, updateCollegeStatusSuccess } from "../Actions/SuperadminAction";
import { FETCH_COLLEGES_REQUEST, FETCH_SUPERADMIN_SUMMARY_REQUEST, UPDATE_COLLEGE_STATUS_REQUEST } from "../Types/SuperadminTypes";

function* fetchSuperadminSummarySaga() {
  try {
    const response = yield call(fetchSuperadminSummaryService);
    yield put(fetchSuperadminSummarySuccess(response.data));
  } catch (error) {
    yield put(fetchSuperadminSummaryFailure(error.message));
  }
}

function* fetchCollegesSaga() {
  try {
    const response = yield call(fetchCollegesService);
    yield put(fetchCollegesSuccess(response.data));
  } catch (error) {
    yield put(fetchCollegesFailure(error.message));
  }
}

function* updateCollegeStatusSaga(action) {
  try {
    const response = yield call(updateCollegeStatusService, action.payload);
    yield put(updateCollegeStatusSuccess(response.data));
    yield put(fetchCollegesRequest());
  } catch (error) {
    yield put(updateCollegeStatusFailure(error.message));
  }
}

export default function* superadminSaga() {
  yield takeLatest(FETCH_SUPERADMIN_SUMMARY_REQUEST, fetchSuperadminSummarySaga);
  yield takeLatest(FETCH_COLLEGES_REQUEST, fetchCollegesSaga);
  yield takeLatest(UPDATE_COLLEGE_STATUS_REQUEST, updateCollegeStatusSaga);
}

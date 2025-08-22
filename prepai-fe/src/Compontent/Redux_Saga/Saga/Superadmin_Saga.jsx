


import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCollegesAPI, fetchSuperadminSummaryAPI, updateCollegeStatusAPI } from "../Api/Api";
import { fetchCollegesFailure, fetchCollegesSuccess, fetchSuperadminSummaryFailure, fetchSuperadminSummarySuccess  ,  updateCollegeStatusSuccess,
  updateCollegeStatusFailure,
  fetchSuperadminSummaryRequest,
  fetchCollegesRequest,} from "../Action/Superadmin_Action";
import { FETCH_COLLEGES_REQUEST, FETCH_SUPERADMIN_SUMMARY_REQUEST  ,UPDATE_COLLEGE_STATUS_REQUEST,
} from "../Types/Superadmin_Types";
import { data } from "autoprefixer";

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
    
  } catch (error) {
    yield put(fetchCollegesFailure(error.message));
  }
}




function* updateCollegeStatusSaga(action) {
  try {
    const updatedCollege = yield call(updateCollegeStatusAPI, action.payload);
    yield put(updateCollegeStatusSuccess(updatedCollege.data));


    yield put(fetchCollegesRequest());
  } catch (err) {
    yield put(updateCollegeStatusFailure(err.message));
  }
}




export default function* superadminSaga() {
  yield takeLatest(FETCH_SUPERADMIN_SUMMARY_REQUEST, fetchSuperadminSummarySaga);
  yield takeLatest(FETCH_COLLEGES_REQUEST, fetchCollegesSaga ,updateCollegeStatusSaga);
   yield takeLatest(UPDATE_COLLEGE_STATUS_REQUEST, updateCollegeStatusSaga);
}

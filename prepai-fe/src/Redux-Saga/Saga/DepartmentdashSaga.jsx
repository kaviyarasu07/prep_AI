import { call, put, takeLatest } from "redux-saga/effects";


import { FETCH_DEPT_COUNT_FAILURE, FETCH_DEPT_COUNT_REQUEST, FETCH_DEPT_COUNT_SUCCESS, FETCH_DEPT_FILTER_FAILURE, FETCH_DEPT_FILTER_REQUEST, FETCH_DEPT_FILTER_SUCCESS, FETCH_DEPT_TABLE_FAILURE, FETCH_DEPT_TABLE_REQUEST, FETCH_DEPT_TABLE_SUCCESS } from "../Types/DepartmentdshTypes";
import { getStudentCount, getStudentsByDepartment, getStudentsByFilter } from "../../Service/DepartmentdashService";


function* fetchDeptCountSaga(action) {
  try {
    const data = yield call(getStudentCount, action.payload);
    yield put({ type: FETCH_DEPT_COUNT_SUCCESS, payload: data }); 
  } catch (error) {
    yield put({ type: FETCH_DEPT_COUNT_FAILURE, payload: error.message });
  }
}

function* fetchDeptTableSaga(action) {
  try {
    const data = yield call(getStudentsByDepartment, action.payload);
    yield put({ type: FETCH_DEPT_TABLE_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_DEPT_TABLE_FAILURE, payload: error.message });
  }
}

function* fetchDeptFilterSaga(action) {
  try {
    const data = yield call(getStudentsByFilter, action.payload);
    yield put({ type: FETCH_DEPT_FILTER_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_DEPT_FILTER_FAILURE, payload: error.message });
  }
}



export default function* DepartmentdashSaga() {
  yield takeLatest(FETCH_DEPT_COUNT_REQUEST, fetchDeptCountSaga);
   yield takeLatest(FETCH_DEPT_TABLE_REQUEST, fetchDeptTableSaga);
    yield takeLatest(FETCH_DEPT_FILTER_REQUEST, fetchDeptFilterSaga);
}

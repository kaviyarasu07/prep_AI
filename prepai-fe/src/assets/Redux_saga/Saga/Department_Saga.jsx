import { call, put, takeLatest } from "redux-saga/effects";
// import { addDepartmentApi } from "../Services/Department_Api";
import {
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE,
  FETCH_DEPARTMENTS_REQUEST
} from "../Types/Department_Types";
import { addDepartmentApi, getDepartmentsApi } from "../../Services/Department_Api";
import { fetchDepartmentsFailure, fetchDepartmentsSuccess } from "../Action/Department_Action";

// worker saga
function* addDepartmentSaga(action) {
  try {
    const response = yield call(addDepartmentApi, action.payload);
    yield put({ type: ADD_DEPARTMENT_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_DEPARTMENT_FAILURE, payload: error.message });
  }
}

function* fetchDepartmentsSaga() {
  try {
    const response = yield call(getDepartmentsApi);
    yield put(fetchDepartmentsSuccess(response.data));
  } catch (error) {
    yield put(fetchDepartmentsFailure(error.message));
  }
}

// watcher saga
function* departmentSaga() {
  yield takeLatest(ADD_DEPARTMENT_REQUEST, addDepartmentSaga);
    yield takeLatest(FETCH_DEPARTMENTS_REQUEST, fetchDepartmentsSaga);
}

export default departmentSaga; // ✅ Export default panna venum

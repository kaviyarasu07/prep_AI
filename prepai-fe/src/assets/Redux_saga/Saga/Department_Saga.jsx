import { call, put, takeLatest } from "redux-saga/effects";
// import { addDepartmentApi } from "../Services/Department_Api";
import {
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE
} from "../Types/Department_Types";
import { addDepartmentApi } from "../../Services/Department_Api";

// worker saga
function* addDepartmentSaga(action) {
  try {
    const response = yield call(addDepartmentApi, action.payload);
    yield put({ type: ADD_DEPARTMENT_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_DEPARTMENT_FAILURE, payload: error.message });
  }
}

// watcher saga
function* departmentSaga() {
  yield takeLatest(ADD_DEPARTMENT_REQUEST, addDepartmentSaga);
}

export default departmentSaga; // ✅ Export default panna venum

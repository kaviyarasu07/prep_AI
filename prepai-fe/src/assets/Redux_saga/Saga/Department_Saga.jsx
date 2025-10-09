import { call, put, takeLatest } from "redux-saga/effects";

import {
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE,
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  REMOVE_DEPARTMENT_REQUEST,
  EDIT_DEPARTMENT_REQUEST,
  SEARCH_DEPARTMENT_REQUEST
} from "../Types/Department_Types";
import { addDepartmentApi, editDepartmentApi, fetchAllDepartments, removeDepartmentApi, searchDepartmentApi  } from "../../Services/Department_Api";
import { editDepartmentFailure, editDepartmentSuccess, fetchDepartmentsFailure, fetchDepartmentsSuccess, removeDepartmentFailure, removeDepartmentSuccess, searchDepartmentFailure, searchDepartmentSuccess } from "../Action/Department_Action";


function* addDepartmentSaga(action) {
  try {
    // 👇 ensure collegeId is correct before calling API
    const payload = {
      ...action.payload,
      collegeId: action.payload.collegeId && action.payload.collegeId !== 0
        ? action.payload.collegeId
        : Number(localStorage.getItem("collegeId")), // get correct collegeId
    };

    const response = yield call(addDepartmentApi, payload);
    yield put({ type: ADD_DEPARTMENT_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_DEPARTMENT_FAILURE, payload: error.message });
  }
}


function* fetchDepartmentsSaga() {
  try {
    const response = yield call(fetchAllDepartments); 
    console.log("Departments API Response in Saga:", response);
    yield put({ type: FETCH_DEPARTMENTS_SUCCESS, payload: response.content || [] });
  } catch (error) {
    yield put({ type: FETCH_DEPARTMENTS_FAILURE, payload: error.message });
  }
}


function* editDepartmentSaga(action) {
  try {
    const response = yield call(
      editDepartmentApi,
      action.payload.id,
      action.payload.updatedData
    );
    yield put(editDepartmentSuccess(response.data));
  } catch (error) {
    yield put(editDepartmentFailure(error.message));
  }
}




function* removeDepartmentSaga(action) {
  try {
    yield call(removeDepartmentApi, action.payload);
    yield put(removeDepartmentSuccess(action.payload));
  } catch (error) {
    yield put(removeDepartmentFailure(error.message));
  }
}

function* handleSearchDepartment(action) {
  try {
    const response = yield call(searchDepartmentApi, action.payload);
    yield put(searchDepartmentSuccess(response.data));
  } catch (error) {
    yield put(searchDepartmentFailure(error.message));
  }
}


// watcher saga
function* departmentSaga() {
  yield takeLatest(ADD_DEPARTMENT_REQUEST, addDepartmentSaga);
  yield takeLatest(FETCH_DEPARTMENTS_REQUEST, fetchDepartmentsSaga);
  yield takeLatest(EDIT_DEPARTMENT_REQUEST, editDepartmentSaga);
  yield takeLatest(REMOVE_DEPARTMENT_REQUEST, removeDepartmentSaga);
  yield takeLatest(SEARCH_DEPARTMENT_REQUEST, handleSearchDepartment);


}


export default departmentSaga;

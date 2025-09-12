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
import { deleteDepartment, getCollegeSummary, getDepartmentById, getDepartments, searchDepartmentsByAdmin, updateDepartment } from "../../Services/College_Api";
import {
  FETCH_COLLEGE_SUMMARY_REQUEST,
  FETCH_COLLEGE_SUMMARY_SUCCESS,
  FETCH_COLLEGE_SUMMARY_FAILURE,
  FETCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_FAILURE,
  SEARCH_DEPARTMENTS_SUCCESS,
  SEARCH_DEPARTMENTS_FAILURE,
  SEARCH_DEPARTMENTS_REQUEST,
  FETCH_DEPARTMENT_BY_ID_SUCCESS,
  FETCH_DEPARTMENT_BY_ID_FAILURE,
  FETCH_DEPARTMENT_BY_ID_REQUEST,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
  UPDATE_DEPARTMENT_FAILURE,
  DELETE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAILURE
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
    console.log("Departments API Response:", response);

    // Extract only the content array
    yield put({ type: FETCH_DEPARTMENTS_SUCCESS, payload: response.content });
  } catch (error) {
    yield put({ type: FETCH_DEPARTMENTS_FAILURE, payload: error.message });
  }
}

function* searchDepartmentsSaga(action) {
  try {
    const response = yield call(searchDepartmentsByAdmin, action.payload);
     console.log(response)
    yield put({ type: SEARCH_DEPARTMENTS_SUCCESS, payload: response });
   
  } catch (error) {
    yield put({ type: SEARCH_DEPARTMENTS_FAILURE, payload: error.message });
  }
}


function* fetchDepartmentByIdSaga(action) {
  try {
    const response = yield call(getDepartmentById, action.payload);
    console.log("Department by ID:", response);
    yield put({ type: FETCH_DEPARTMENT_BY_ID_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: FETCH_DEPARTMENT_BY_ID_FAILURE, payload: error.message });
  }
}


// Update Department Saga
function updateDepartmentApi(id, data) {
  return fetch(`http://localhost:8080/api/ca/department/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function* updateDepartmentSaga(action) {
  try {
    const { id, data } = action.payload;
    const updatedDept = yield call(updateDepartment, id, data); // ✅ correct API function call
    console.log("Updated Department:", updatedDept);

    yield put({ type: UPDATE_DEPARTMENT_SUCCESS, payload: updatedDept }); // ✅ success action
    alert("Department updated successfully!");
  } catch (error) {
    yield put({ type: UPDATE_DEPARTMENT_FAILURE, payload: error.message }); // ✅ failure action
    alert("Update failed: " + error.message);
  }
}

function* deleteDepartmentSaga(action) {
  try {
    const message = yield call(deleteDepartment, action.payload);
    yield put({ type: DELETE_DEPARTMENT_SUCCESS, payload: message });
    alert("Department deleted successfully!");
  } catch (error) {
    yield put({ type: DELETE_DEPARTMENT_FAILURE, payload: error.message });
    alert("Delete failed: " + error.message);
  }
}

export default function* collegeSaga() {
  yield takeLatest(FETCH_COLLEGE_SUMMARY_REQUEST, fetchCollegeSummarySaga);
  yield takeLatest(FETCH_DEPARTMENTS_REQUEST, fetchDepartmentsSaga);
yield takeLatest(SEARCH_DEPARTMENTS_REQUEST, searchDepartmentsSaga);
 yield takeLatest(FETCH_DEPARTMENT_BY_ID_REQUEST, fetchDepartmentByIdSaga);
 yield takeLatest(UPDATE_DEPARTMENT_REQUEST, updateDepartmentSaga);  
 yield takeLatest(DELETE_DEPARTMENT_REQUEST, deleteDepartmentSaga);

}


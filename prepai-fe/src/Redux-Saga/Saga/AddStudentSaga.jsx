import { call, put, takeLatest } from "redux-saga/effects";

import { ADD_STUDENT_FAILURE, ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS } from "../Types/AddstudentTypes";
import { addStudentApi } from "../../Service/AddStudentService";

function* addStudentSaga(action) {
  try {
    const response = yield call(addStudentApi, action.payload);
    console.log("Student Added:", response);
    yield put({ type: ADD_STUDENT_SUCCESS, payload: response });
    alert("Student added successfully ✅");
  } catch (error) {
    console.error("Error:", error);
    yield put({ type: ADD_STUDENT_FAILURE, payload: error.message });
    alert("Failed to add student ❌");
  }
}

export default function* AddStudentRootSaga() {
  yield takeLatest(ADD_STUDENT_REQUEST, addStudentSaga);
}

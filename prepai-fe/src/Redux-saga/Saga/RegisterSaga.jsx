import { call, put, takeLatest } from "redux-saga/effects";
import { registerFailure, registerSuccess } from "../Actions/RegisterAction";
import { REGISTER_REQUEST } from "../Types/RegisterTypes";

function* registerSaga({ payload }) {
  try {
    const response = yield call(registerService, payload);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

export default function* register() {
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}

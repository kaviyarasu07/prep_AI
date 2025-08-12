import { call, put, takeLatest } from "redux-saga/effects";
import { loginService } from "../../Service/LoginService";
import { loginFailure, loginSuccess } from "../Actions/LoginAction";
import { LOGIN_REQUEST } from "../Types/LoginTypes";

function* loginSaga({ payload }) {
  try {
    const response = yield call(loginService, payload);
    yield put(loginSuccess(response.data));
  } catch (err) {
    const message =
      err.response?.data?.message || "Login failed. Please try again.";
    yield put(loginFailure(message));
  }
}

export default function* login() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
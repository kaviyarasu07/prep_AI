import { call, put, takeLatest } from "redux-saga/effects";
import { loginService } from "../../Service/LoginService";
import { loginFailure, loginSuccess } from "../Actions/LoginAction";
import { LOGIN_REQUEST } from "../Types/LoginTypes";

function* loginSaga({ payload }) {
  try {
    const response = yield call(loginService, payload);
    localStorage.setItem("token", response.data.refreshToken);

    yield put(loginSuccess(response.data));
  } catch (err) {
    let errorMessage = "Invalid email or password";
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage = err.response.data.message;
    }

    yield put(loginFailure(errorMessage));
  }
}

export default function* login() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

import { call, put, takeLatest } from "redux-saga/effects";
import { forgetPasswordService } from "../../Service/ForgetpasswordService";
import { forgetPasswordFailure, forgetPasswordSuccess } from "../Actions/ForgetpasswordAction";
import { FORGET_PASSWORD_REQUEST } from "../Types/ForgetpasswordTypes";

function* forgetPasswordSaga(action) {
  try {
    const response = yield call(forgetPasswordService, action.payload);
    yield put(forgetPasswordSuccess(response.data));
  } catch (err) {
    yield put(forgetPasswordFailure(err));
  }
}

export default function* forgetPassword() {
  yield takeLatest(FORGET_PASSWORD_REQUEST, forgetPasswordSaga);
}

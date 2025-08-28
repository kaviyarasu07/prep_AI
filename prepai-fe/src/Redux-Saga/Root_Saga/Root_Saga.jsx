import { all } from "redux-saga/effects";
import login from "../Saga/LoginSaga";
import forgetPassword from "../Saga/ForgetpasswordSaga";
import register from "../Saga/RegisterSaga";
import superadminSaga from "../Saga/SuperadminSaga";

export default function* rootSaga() {
  yield all([
    login(),
    forgetPassword(),
    register(),
    superadminSaga()
  ]);
}
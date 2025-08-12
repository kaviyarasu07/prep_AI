import { all } from "redux-saga/effects";
import login from "../Saga/LoginSaga";

export default function* rootSaga() {
  yield all([
    login()
  ]);
}
import { all } from "redux-saga/effects";
import superadminSaga from "../Saga/Superadmin_Saga";

export default function* rootSaga() {
  yield all([superadminSaga()]);
}
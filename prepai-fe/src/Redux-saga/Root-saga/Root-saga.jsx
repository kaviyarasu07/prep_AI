import { all } from "redux-saga/effects";
import register from "../Saga/RegisterSaga";

export default function* rootSaga() {
  yield all([
    register()
  ]);
}

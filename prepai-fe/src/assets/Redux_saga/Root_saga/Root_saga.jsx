import { all } from "redux-saga/effects";
import collegeSaga from "../Saga/College_Saga";
// import collegeSaga from "./Saga/collegeSaga";
 
export default function* rootSaga() {
  yield all([collegeSaga()]);
}
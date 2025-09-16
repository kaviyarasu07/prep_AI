import { all } from "redux-saga/effects";
import collegeSaga from "../Saga/College_Saga";
import departmentSaga from "../Saga/Department_Saga";

 
export default function* rootSaga() {
  yield all([collegeSaga(),
    departmentSaga()  
  ]);
  
}
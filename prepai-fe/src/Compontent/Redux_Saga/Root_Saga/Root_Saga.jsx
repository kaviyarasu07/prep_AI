import { all } from "redux-saga/effects";
import superadminSaga from "../Saga/Superadmin_Saga";
<<<<<<< Updated upstream
=======
// import superadminSaga from "../Saga/Superadmin_Saga";
// import superadminSaga from "../Root_Saga/";  
>>>>>>> Stashed changes

export default function* rootSaga() {
  yield all([superadminSaga()]);
}
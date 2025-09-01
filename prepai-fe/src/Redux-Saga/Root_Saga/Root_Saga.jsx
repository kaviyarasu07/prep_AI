import { all } from "redux-saga/effects";
import login from "../Saga/LoginSaga";
import forgetPassword from "../Saga/ForgetpasswordSaga";
import mentorDashboard from "../Saga/MentordashboardSaga";

export default function* rootSaga() {
  yield all([
    login(),
    forgetPassword(), 
    mentorDashboard()
  ]);
}
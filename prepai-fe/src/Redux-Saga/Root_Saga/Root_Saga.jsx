import { all } from "redux-saga/effects";
import login from "../Saga/LoginSaga";
import forgetPassword from "../Saga/ForgetpasswordSaga";
import mentorDashboard from "../Saga/MentordashboardSaga";
import AddStudentRootSaga from "../Saga/AddStudentSaga";
import DepartmentdashSaga from "../Saga/DepartmentdashSaga";


export default function* rootSaga() {
  yield all([
    login(),
    forgetPassword(), 
    mentorDashboard(),
    AddStudentRootSaga(),
    DepartmentdashSaga()
  ]);
}
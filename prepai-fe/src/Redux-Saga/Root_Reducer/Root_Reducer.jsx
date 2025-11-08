import { combineReducers } from "redux";
import { loginReducer } from "../Reducer/LoginReducer";
import { forgetPasswordReducer } from "../Reducer/ForgetpasswordReducer";
import mentorDashboardReducer from "../Reducer/MentordashboardReducer";
import AddStudentReducer from "../Reducer/AddStudentReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  forgetpassword: forgetPasswordReducer,
  mentordashboard: mentorDashboardReducer,
   student: AddStudentReducer
});

export default rootReducer;
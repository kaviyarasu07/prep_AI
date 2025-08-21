import { combineReducers } from "redux";
import { loginReducer } from "../Reducer/LoginReducer";
import { forgetPasswordReducer } from "../Reducer/ForgetpasswordReducer";
import mentorDashboardReducer from "../Reducer/MentordashboardReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  forgetpassword: forgetPasswordReducer,
  mentordashboard: mentorDashboardReducer
});

export default rootReducer;
import { combineReducers } from "redux";
import { loginReducer } from "../Reducer/LoginReducer";
import { forgetPasswordReducer } from "../Reducer/ForgetpasswordReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  forgetpassword: forgetPasswordReducer
});

export default rootReducer;
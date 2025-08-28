import { combineReducers } from "redux";
import { loginReducer } from "../Reducer/LoginReducer";
import { forgetPasswordReducer } from "../Reducer/ForgetpasswordReducer";
import { registerReducer } from "../Reducer/RegisterReducer";
import superadminReducer from "../Reducer/SuperadminReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  forgetpassword: forgetPasswordReducer,
  register: registerReducer,
  superadmin: superadminReducer
});

export default rootReducer;
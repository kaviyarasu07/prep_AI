import { combineReducers } from "redux";
import { loginReducer } from "../Reducer/LoginReducer";
import { forgetPasswordReducer } from "../Reducer/ForgetpasswordReducer";
import { registerReducer } from "../Reducer/RegisterReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  forgetpassword: forgetPasswordReducer,
  register: registerReducer
});

export default rootReducer;
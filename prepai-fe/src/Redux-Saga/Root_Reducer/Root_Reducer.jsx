import { combineReducers } from "redux";
import { loginReducer } from "../Reducer/LoginReducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
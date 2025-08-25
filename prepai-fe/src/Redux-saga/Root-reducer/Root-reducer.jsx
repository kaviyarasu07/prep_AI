
import { combineReducers } from "redux";
import { registerReducer } from "../Reducer/RegisterReducer";

const rootReducer = combineReducers({
  register: registerReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import superadminReducer from "../Reducer/Superadmin_Reducer";

const rootReducer = combineReducers({
  superadmin: superadminReducer, 
});

export default rootReducer;

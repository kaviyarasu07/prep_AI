import { combineReducers } from "redux";
import superadminReducer from "../Reducer/Superadmin_Reducer";


const rootReducer = combineReducers({
  superadmin: superadminReducer, 

// import superadminReducer from "./Superadmin_Reducer"; // adjust path

const rootReducer = combineReducers({
  superadmin: superadminReducer, // ✅ key must match useSelector

});

export default rootReducer;

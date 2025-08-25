import { combineReducers } from "redux";
import superadminReducer from "../Reducer/Superadmin_Reducer";
<<<<<<< Updated upstream

const rootReducer = combineReducers({
  superadmin: superadminReducer, 
=======
// import superadminReducer from "./Superadmin_Reducer"; // adjust path

const rootReducer = combineReducers({
  superadmin: superadminReducer, // ✅ key must match useSelector
>>>>>>> Stashed changes
});

export default rootReducer;

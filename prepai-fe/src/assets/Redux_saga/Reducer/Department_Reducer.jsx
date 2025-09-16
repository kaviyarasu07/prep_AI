import {
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE
} from "../Types/Department_Types";

const initialState = {
  loading: false,
  department: {},
  error: ""
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_DEPARTMENT_SUCCESS:
      return {
        loading: false,
        department: action.payload,
        error: ""
      };
    case ADD_DEPARTMENT_FAILURE:
      return {
        loading: false,
        department: {},
        error: action.payload
      };
    default:
      return state;
  }
};

export default departmentReducer;

import {
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE,
  FETCH_DEPARTMENTS_FAILURE,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_REQUEST
} from "../Types/Department_Types";

const initialState = {
  loading: false,
  departments: [],  // ✅ should be array
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
    ...state,
    loading: false,
    departments: [...state.departments, action.payload], // add new
    error: ""
  };
case ADD_DEPARTMENT_FAILURE:
  return {
    ...state,
    loading: false,
    error: action.payload
  };
case FETCH_DEPARTMENTS_REQUEST:
      return { ...state, loading: true, error: "" };

    case FETCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        departments: action.payload,  // full list store panna
        error: ""
      };

    case FETCH_DEPARTMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
      
    default:
      return state;
  }
};

export default departmentReducer;

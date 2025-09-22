import {
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE,
  FETCH_DEPARTMENTS_FAILURE,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_REQUEST,
  REMOVE_DEPARTMENT_SUCCESS,
  EDIT_DEPARTMENT_SUCCESS
} from "../Types/Department_Types";

const initialState = {
  loading: false,
  departments: [],  
  error: null,
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

      case EDIT_DEPARTMENT_SUCCESS:
      return {
        ...state,
        departments: state.departments.map((dep) =>
          dep.id === action.payload.id ? action.payload : dep
        ),
      };

      case REMOVE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        departments: state.departments.filter(
          (dep) => dep.id !== action.payload
        ),
      };
      
    default:
      return state;
  }
};

export default departmentReducer;

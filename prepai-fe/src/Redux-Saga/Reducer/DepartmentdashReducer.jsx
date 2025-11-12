import {
  
  FETCH_DEPT_COUNT_REQUEST,
  FETCH_DEPT_COUNT_SUCCESS,
  FETCH_DEPT_FILTER_FAILURE,
  FETCH_DEPT_FILTER_REQUEST,
  FETCH_DEPT_FILTER_SUCCESS,
  FETCH_DEPT_TABLE_FAILURE,
  FETCH_DEPT_TABLE_REQUEST,
  FETCH_DEPT_TABLE_SUCCESS,
} from "../Types/DepartmentdshTypes";

const initialState = {
  totalStudents: 0,
  totalMentor: 0,
  loading: false,
  error: null,
  tableData: [], 
};

const DepartmentdashReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEPT_COUNT_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_DEPT_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        totalStudents: action.payload.totalStudents, // ✅ store specific key
        totalMentor: action.payload.totalMentors,    // ✅ store mentor count
        
      };

   
  case FETCH_DEPT_TABLE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DEPT_TABLE_SUCCESS:
      return { ...state, loading: false, tableData: action.payload };
    case FETCH_DEPT_TABLE_FAILURE:
      return { ...state, loading: false, error: action.payload };

      case FETCH_DEPT_FILTER_REQUEST:
  return { ...state, loading: true, error: null };
case FETCH_DEPT_FILTER_SUCCESS:
  return { ...state, loading: false, tableData: action.payload };
case FETCH_DEPT_FILTER_FAILURE:
  return { ...state, loading: false, error: action.payload };

      default:
      return state;
  }
  
};

export default DepartmentdashReducer;


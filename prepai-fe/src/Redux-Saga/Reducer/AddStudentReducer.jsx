import { ADD_STUDENT_FAILURE, ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS } from "../Types/AddstudentTypes";


const initialState = {
  loading: false,
  success: false,
  error: null,
};

const AddStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case ADD_STUDENT_SUCCESS:
      return { ...state, loading: false, success: true };
    case ADD_STUDENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default AddStudentReducer;

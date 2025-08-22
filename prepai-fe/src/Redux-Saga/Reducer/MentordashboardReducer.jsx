import { GET_MENTOR_REQUEST, GET_MENTOR_SUCCESS, GET_MENTOR_FAILURE, STUDENTS_WITHOUT_MENTOR_REQUEST, STUDENTS_WITHOUT_MENTOR_SUCCESS, STUDENTS_WITHOUT_MENTOR_FAILURE, AVERAGE_STUDENTS_REQUEST, TOP_PERFORMING_REQUEST, DEPARTMENT_INFORMATION_REQUEST, AVERAGE_STUDENTS_SUCCESS, TOP_PERFORMING_SUCCESS, DEPARTMENT_INFORMATION_SUCCESS, AVERAGE_STUDENTS_FAILURE, TOP_PERFORMING_FAILURE, DEPARTMENT_INFORMATION_FAILURE, SEARCH_MENTOR_REQUEST, SEARCH_MENTOR_FAILURE, SEARCH_MENTOR_SUCCESS, CLEAR_SEARCH_MENTOR } from "../Types/MentordashboardTypes";

const initialState = {
  loading: false,
  mentors: [],
  studentsWithoutMentor: [],
  averageStudents: {},
  topPerforming: {},
  departmentInfo: {},
  searchmentor: {},
  searchError: null,
  error: null,
};

const mentorDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENTOR_REQUEST:
    case STUDENTS_WITHOUT_MENTOR_REQUEST:
    case AVERAGE_STUDENTS_REQUEST:
    case TOP_PERFORMING_REQUEST:
    case DEPARTMENT_INFORMATION_REQUEST:
    case SEARCH_MENTOR_REQUEST:
      return { ...state, loading: true };

    case GET_MENTOR_SUCCESS:
      return { ...state, loading: false, mentors: action.payload, error: null };
    case STUDENTS_WITHOUT_MENTOR_SUCCESS:
      return { ...state, loading: false, studentsWithoutMentor: action.payload, error: null };
    case AVERAGE_STUDENTS_SUCCESS:
      return { ...state, loading: false, averageStudents: action.payload, error: null };
    case TOP_PERFORMING_SUCCESS:
      return { ...state, loading: false, topPerforming: action.payload, error: null };
    case DEPARTMENT_INFORMATION_SUCCESS:
      return { ...state, loading: false, departmentInfo: action.payload, error: null };
    case SEARCH_MENTOR_SUCCESS:
      return { ...state, loading: false, searchmentor: action.payload, error: null };

    case GET_MENTOR_FAILURE:
    case STUDENTS_WITHOUT_MENTOR_FAILURE:
    case AVERAGE_STUDENTS_FAILURE:
    case TOP_PERFORMING_FAILURE:
    case DEPARTMENT_INFORMATION_FAILURE:
    case SEARCH_MENTOR_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case CLEAR_SEARCH_MENTOR:
      return { ...state, searchmentor: null, searchError: null };

    default:
      return state;
  }
};

export default mentorDashboardReducer;

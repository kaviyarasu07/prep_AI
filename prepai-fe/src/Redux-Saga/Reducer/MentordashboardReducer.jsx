import { GET_MENTOR_REQUEST, GET_MENTOR_SUCCESS, GET_MENTOR_FAILURE, STUDENTS_WITHOUT_MENTOR_REQUEST, STUDENTS_WITHOUT_MENTOR_SUCCESS, STUDENTS_WITHOUT_MENTOR_FAILURE } from "../Types/MentordashboardTypes";

const initialState = {
  loading: false,
  mentors: [],
  studentsWithoutMentor: [],
  error: null,
};

const mentorDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENTOR_REQUEST:
    case STUDENTS_WITHOUT_MENTOR_REQUEST:
      return { ...state, loading: true };
    case GET_MENTOR_SUCCESS:
      return { ...state, loading: false, mentors: action.payload, error: null };
    case STUDENTS_WITHOUT_MENTOR_SUCCESS:
      return { ...state, loading: false, studentsWithoutMentor: action.payload, error: null }
    case GET_MENTOR_FAILURE:
    case STUDENTS_WITHOUT_MENTOR_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default mentorDashboardReducer;

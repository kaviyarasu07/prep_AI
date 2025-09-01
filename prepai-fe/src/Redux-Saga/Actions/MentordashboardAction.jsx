import { GET_MENTOR_REQUEST, GET_MENTOR_SUCCESS, GET_MENTOR_FAILURE, STUDENTS_WITHOUT_MENTOR_REQUEST, STUDENTS_WITHOUT_MENTOR_SUCCESS, STUDENTS_WITHOUT_MENTOR_FAILURE } from "../Types/MentordashboardTypes";

export const getMentorRequest = () => ({
  type: GET_MENTOR_REQUEST,
});

export const getMentorSuccess = (mentors) => ({
  type: GET_MENTOR_SUCCESS,
  payload: mentors,
});

export const getMentorFailure = (error) => ({
  type: GET_MENTOR_FAILURE,
  payload: error,
});

export const studentsWithoutMentorRequest = () => ({
  type: STUDENTS_WITHOUT_MENTOR_REQUEST,
});

export const studentsWithoutMentorSuccess = (data) => ({
  type: STUDENTS_WITHOUT_MENTOR_SUCCESS,
  payload: data,
});

export const studentsWithoutMentorFailure = (error) => ({
  type: STUDENTS_WITHOUT_MENTOR_FAILURE,
  payload: error,
});

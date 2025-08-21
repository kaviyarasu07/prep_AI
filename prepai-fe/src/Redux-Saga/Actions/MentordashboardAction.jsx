import { GET_MENTOR_REQUEST, GET_MENTOR_SUCCESS, GET_MENTOR_FAILURE, STUDENTS_WITHOUT_MENTOR_REQUEST, STUDENTS_WITHOUT_MENTOR_SUCCESS, STUDENTS_WITHOUT_MENTOR_FAILURE, AVERAGE_STUDENTS_REQUEST, AVERAGE_STUDENTS_SUCCESS, AVERAGE_STUDENTS_FAILURE, TOP_PERFORMING_REQUEST, TOP_PERFORMING_SUCCESS, TOP_PERFORMING_FAILURE, DEPARTMENT_INFORMATION_REQUEST, DEPARTMENT_INFORMATION_SUCCESS, DEPARTMENT_INFORMATION_FAILURE } from "../Types/MentordashboardTypes";

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

export const averageStudentsRequest = () => ({
  type: AVERAGE_STUDENTS_REQUEST,
});

export const averageStudentsSuccess = (data) => ({
  type: AVERAGE_STUDENTS_SUCCESS,
  payload: data,
});

export const averageStudentsFailure = (error) => ({
  type: AVERAGE_STUDENTS_FAILURE,
  payload: error,
});

export const topPerformingRequest = () => ({
  type: TOP_PERFORMING_REQUEST,
});

export const topPerformingSuccess = (data) => ({
  type: TOP_PERFORMING_SUCCESS,
  payload: data,
});

export const topPerformingFailure = (error) => ({
  type: TOP_PERFORMING_FAILURE,
  payload: error,
});

export const departmentInformationRequest = () => ({
  type: DEPARTMENT_INFORMATION_REQUEST,
});

export const departmentInformationSuccess = (data) => ({
  type: DEPARTMENT_INFORMATION_SUCCESS,
  payload: data,
});

export const departmentInformationFailure = (error) => ({
  type: DEPARTMENT_INFORMATION_FAILURE,
  payload: error,
});
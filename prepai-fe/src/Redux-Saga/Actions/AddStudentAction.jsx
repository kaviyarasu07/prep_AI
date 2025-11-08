import { ADD_STUDENT_FAILURE, ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS } from "../Types/AddstudentTypes";


export const addStudentRequest = (studentData) => ({
  type: ADD_STUDENT_REQUEST,
  payload: studentData,
});


export const addStudentSuccess = (studentData) => ({
  type: ADD_STUDENT_SUCCESS,
  payload: studentData,
});

export const addStudentfailure = (studentData) => ({
  type: ADD_STUDENT_FAILURE,
  payload: studentData,
});
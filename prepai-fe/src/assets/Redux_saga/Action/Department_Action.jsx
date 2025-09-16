import {
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE
} from "../Types/Department_Types";

// Request action
export const addDepartmentRequest = (data) => {
  return {
    type: ADD_DEPARTMENT_REQUEST,
    payload: data
  };
};

// Success action
export const addDepartmentSuccess = (response) => {
  return {
    type: ADD_DEPARTMENT_SUCCESS,
    payload: response
  };
};

// Failure action
export const addDepartmentFailure = (error) => {
  return {
    type: ADD_DEPARTMENT_FAILURE,
    payload: error
  };
};

import {
  ADD_DEPARTMENT_REQUEST,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAILURE,
  FETCH_DEPARTMENTS_FAILURE,
  FETCH_DEPARTMENTS_SUCCESS,
  FETCH_DEPARTMENTS_REQUEST,
  SEARCH_DEPARTMENT_FAILURE,
  SEARCH_DEPARTMENT_SUCCESS,
  SEARCH_DEPARTMENT_REQUEST,
  FETCH_COLLEGE_FAILURE,
  FETCH_COLLEGE_SUCCESS,
  FETCH_COLLEGE_REQUEST
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

export const fetchDepartmentsRequest = (payload) => {
  return {
    type: FETCH_DEPARTMENTS_REQUEST,
    payload
  };
};

// Success action
export const fetchDepartmentsSuccess = (response) => {
  return {
    type: FETCH_DEPARTMENTS_SUCCESS,
    payload: response,
  };
};

// Failure action
export const fetchDepartmentsFailure = (error) => {
  return {
    type: FETCH_DEPARTMENTS_FAILURE,
    payload: error,
  };
};


// ✅ Edit
export const editDepartmentRequest = (id, updatedData) => ({
  type: "EDIT_DEPARTMENT_REQUEST",
  payload: { id, updatedData },
});

export const editDepartmentSuccess = (data) => ({
  type: "EDIT_DEPARTMENT_SUCCESS",
  payload: data,
});

export const editDepartmentFailure = (error) => ({
  type: "EDIT_DEPARTMENT_FAILURE",
  payload: error,
});


export const removeDepartmentRequest = (id) => ({
  type: "REMOVE_DEPARTMENT_REQUEST",
  payload: id,
});

export const removeDepartmentSuccess = (id) => ({
  type: "REMOVE_DEPARTMENT_SUCCESS",
  payload: id,
});

export const removeDepartmentFailure = (error) => ({
  type: "REMOVE_DEPARTMENT_FAILURE",
  payload: error,
});


export const searchDepartmentRequest = (code) => ({
  type: SEARCH_DEPARTMENT_REQUEST,
  payload: code,
});

export const searchDepartmentSuccess = (data) => ({
  type: SEARCH_DEPARTMENT_SUCCESS,
  payload: data,
});

export const searchDepartmentFailure = (error) => ({
  type: SEARCH_DEPARTMENT_FAILURE,
  payload: error,
});

export const fetchCollegeRequest = () => ({
  type: FETCH_COLLEGE_REQUEST,
});

// Success Action
export const fetchCollegeSuccess = (data) => ({
  type: FETCH_COLLEGE_SUCCESS,
  payload: data,
});

// Failure Action
export const fetchCollegeFailure = (error) => ({
  type: FETCH_COLLEGE_FAILURE,
  payload: error,
});
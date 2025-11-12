import { FETCH_DEPT_COUNT_FAILURE, FETCH_DEPT_COUNT_REQUEST, FETCH_DEPT_COUNT_SUCCESS, FETCH_DEPT_FILTER_FAILURE, FETCH_DEPT_FILTER_REQUEST, FETCH_DEPT_FILTER_SUCCESS, FETCH_DEPT_TABLE_FAILURE, FETCH_DEPT_TABLE_REQUEST, FETCH_DEPT_TABLE_SUCCESS } from "../Types/DepartmentdshTypes";


export const fetchDeptCountRequest = (deptName) => ({
  type: FETCH_DEPT_COUNT_REQUEST,
  payload: deptName,
});

export const fetchDeptCountSuccess = (count) => ({
  type: FETCH_DEPT_COUNT_SUCCESS,
  payload: count,
});

export const fetchDeptCountFailure = (error) => ({
  type: FETCH_DEPT_COUNT_FAILURE,
  payload: error,
});


export const fetchDeptTableRequest = (deptCode) => ({
  type: FETCH_DEPT_TABLE_REQUEST,
  payload: deptCode,
});

export const fetchDeptTableSuccess = (data) => ({
  type: FETCH_DEPT_TABLE_SUCCESS,
  payload: data,
});

export const fetchDeptTableFailure = (error) => ({
  type: FETCH_DEPT_TABLE_FAILURE,
  payload: error,
});

export const fetchDeptFilterRequest = (filters) => ({
  type: FETCH_DEPT_FILTER_REQUEST,
  payload: filters,
});

export const fetchDeptFilterSuccess = (data) => ({
  type: FETCH_DEPT_FILTER_SUCCESS,
  payload: data,
});

export const fetchDeptFilterFailure = (error) => ({
  type: FETCH_DEPT_FILTER_FAILURE,
  payload: error,
});
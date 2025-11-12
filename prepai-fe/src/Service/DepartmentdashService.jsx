
import axios from "axios";
import BaseUrl from "../Redux-Saga/BaseURL/BaseURL";

export const getStudentCount = async (deptName) => {
  const response = await fetch(`${BaseUrl}dept/count?deptName=${deptName}`);
  if (!response.ok) {
    throw new Error("Failed to fetch department count");
  }
  return await response.json();
};

export const getStudentsByDepartment = async (deptCode) => {
  try {
    const response = await axios.get(
      `${BaseUrl}department/student/by-department?departmentCode=${deptCode}`
    );
    return response.data; 
  } catch (error) {
    throw error; 
  }
};

export const getStudentsByFilter = async (filters) => {
  const { departmentCode, year, status } = filters;
  let url = `${BaseUrl}department/student/filter?departmentCode=${departmentCode}`;

  if (year) url += `&year=${year}`;
  if (status) url += `&status=${status}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
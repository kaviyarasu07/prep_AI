import axios from "axios";

const BASE_URL = "http://localhost:8080/api/ca";

export const addDepartmentApi = (payload) => {
  return axios.post(`${BASE_URL}/addDepartment/create`, payload);
};

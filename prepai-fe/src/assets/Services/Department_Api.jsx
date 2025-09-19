// import axios from "axios";

// const BASE_URL = "http://localhost:8080/api/ca";

// export const addDepartmentApi = (payload) => {
//   return axios.post(`${BASE_URL}/addDepartment/create`, payload);
// };


import axios from "axios";

const BASE_URL = "http://localhost:8080/api/ca";

export const addDepartmentApi = (payload) => {
  return axios.post(`${BASE_URL}/addDepartment/create`, payload);
};




// DepartmentApi.js

export const fetchAllDepartments = async () => {
  const res = await axios.get(`${BASE_URL}/registeredDepartment/getAll`);
  return res.data;
};


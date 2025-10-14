import axios from "axios";

const BASE_URL = "http://localhost:8080/api/ca";

export const addDepartmentApi = (response) => {
  
  return axios.post(`${BASE_URL}/addDepartment/create`,response);
};





export const searchDepartmentApi = (code) => {
  return axios.get(`${BASE_URL}/search/searchBy?departmentCode=${code}`);
};
 
export const fetchAllDepartments = async () => {
  const res = await axios.get(`${BASE_URL}/registeredDepartment/getAll`);
  return res.data;
};

export function editDepartmentApi(id, updatedData) {
  return axios.put(
    `${BASE_URL}/registeredDepartment/update/${id}`,
    updatedData
  );
}

export function removeDepartmentApi(id) {
  return axios.delete(`${BASE_URL}/delete/${id}`);
}

export const fetchAllCollegesApi = async () => {
  const res = await axios.get(`${BASE_URL}/addDepartment/getAll`);
  return res.data; // array of colleges
}; 

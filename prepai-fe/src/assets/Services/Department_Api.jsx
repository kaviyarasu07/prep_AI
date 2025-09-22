import axios from "axios";

const BASE_URL = "http://localhost:8080/api/ca";

export const addDepartmentApi = (payload) => {
  return axios.post(`${BASE_URL}/addDepartment/create`, payload);
};

export const fetchAllDepartments = async () => {
  const res = await axios.get(`${BASE_URL}/registeredDepartment/getAll`);
  return res.data;
};

export function editDepartmentApi(id, updatedData) {
  const token = localStorage.getItem("token"); 
  return axios.put(
    `${BASE_URL}/registeredDepartment/update/${id}`,
    updatedData,
    {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
  );
}
export function removeDepartmentApi(id) {
  return axios.delete(`${BASE_URL}/delete/${id}`);
}

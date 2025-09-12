


import axios from "axios";

const BASE_URL = "http://localhost:8080/api/ca";

// College Summary
export const getCollegeSummary = async () => {
  const res = await axios.get(`${BASE_URL}/dashBoard/college/admin`);
  return res.data;
};

export const getDepartments = async () => {
  const res = await axios.get(`${BASE_URL}/department/getAll`);
  return res.data;
};


export const searchDepartmentsByAdmin = async (adminName) => {
  try {
    console.log("Search API called with:", adminName); 
    const res = await axios.get(`${BASE_URL}/search/summary`, {
      params: { assignedAdmins: adminName }
    });
    console.log("Search API result:", res); 
    return res.data;
  } catch (error) {
    console.error("Search API Error:", error);
    throw error;
  }
};


export const getDepartmentById = async (id) => {
  const res = await axios.get(`${BASE_URL}/department/${id}`);
  return res.data; 
};



export const updateDepartment = async (id, updatedData) => {
  try {
    const res = await axios.put(`${BASE_URL}/department/update/${id}`, updatedData);
    return res.data;
  } catch (error) {
    console.error("Update Department API Error:", error);
    throw error;
  }
};


export const deleteDepartment = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/department/${id}`);
    return res.data;   // { message: "Deleted successfully" }
  } catch (error) {
    console.error("Delete Department API Error:", error);
    throw error;
  }
};
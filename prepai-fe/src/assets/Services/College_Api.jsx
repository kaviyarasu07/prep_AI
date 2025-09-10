


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
    console.log("Search API called with:", adminName); // ✅ print panna
    const res = await axios.get(`${BASE_URL}/search/summary`, {
      params: { assignedAdmins: adminName }
    });
    console.log("Search API result:", res); // ✅ print panna
    return res.data;
  } catch (error) {
    console.error("Search API Error:", error);
    throw error;
  }
};


export const getDepartmentById = async (id) => {
  const res = await axios.get(`${BASE_URL}/department/${id}`);
  return res.data; // single department object
};


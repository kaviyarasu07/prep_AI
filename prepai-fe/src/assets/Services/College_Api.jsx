// import axios from "axios";

// // Make sure BASE_URL is declared at the top and not inside a function
// const BASE_URL = "http://localhost:8080/api/ca/dashBoard/college";

// // Exported function to call the API
// export const getCollegeSummary = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/admin`);
//     return response.data; // return only the data
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error; // propagate the error
//   }
// };


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
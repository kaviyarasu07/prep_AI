<<<<<<< Updated upstream

=======
// import axios from "axios";

// const BASE_URL = "http://localhost:8080/api/sa/super/admin/summary";

// export const fetchCollegeAdminSummaryAPI = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/college/admin`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
>>>>>>> Stashed changes
import axios from "axios";

export const fetchSuperadminSummaryAPI = async () => {
  const response = await axios.get("http://localhost:8080/api/sa/super/admin/summary");
  return response.data;
};

export const fetchCollegesAPI = async () => {
  const response = await axios.get("http://localhost:8080/api/sa/request/college");
  return response.data;
};

export const updateCollegeStatusAPI = ({ id, status }) => {
<<<<<<< Updated upstream
  return axios.put(
    `http://localhost:8080/api/sa/request/col/${id}/status`,
    null,
    { params: { status } }
  );
};
updateCollegeStatusAPI({ id: 6, status: "REJECTED" })
=======
  return axios.put(`http://localhost:8080/api/sa/request/col/5/status?status=REJECTED`);
};


// 2️⃣ Call panna example
updateCollegeStatusAPI({ id: 11, status: "REJECTED" })
>>>>>>> Stashed changes
  .then(res => console.log("College status updated to:", res.data))
  .catch(err => console.error(err));


<<<<<<< Updated upstream




=======
// ✅ Get All Departments
>>>>>>> Stashed changes
export const getAllDepartmentsAPI = async () => {
  const response = await axios.get("http://localhost:8080/api/department/getAll");
  return response.data;
};

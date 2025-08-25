
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
  return axios.put(
    `http://localhost:8080/api/sa/request/col/${id}/status`,
    null,
    { params: { status } }
  );
};
updateCollegeStatusAPI({ id: 6, status: "REJECTED" })
  .then(res => console.log("College status updated to:", res.data))
  .catch(err => console.error(err));






export const getAllDepartmentsAPI = async () => {
  const response = await axios.get("http://localhost:8080/api/department/getAll");
  return response.data;
};

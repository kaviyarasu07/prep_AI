import axios from "axios";

export const addStudentApi = async (data) => {
  const response = await axios.post("http://localhost:8080/api/add/student", data);
  return response.data;
};

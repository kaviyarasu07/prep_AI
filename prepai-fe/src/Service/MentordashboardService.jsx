import axios from "axios";
import BaseUrl from "../Redux-Saga/BaseURL/BaseURL";

export function getMentorService() {
  return axios.get(`${BaseUrl}mentor/all`);
}

export function studentsWithoutMentorService() {
  return axios.get(`${BaseUrl}mentor/students-without-mentor`);
}

export function averageStudentsService() {
  return axios.get(`${BaseUrl}`);
}

export function topPerformingService() {
  return axios.get(`${BaseUrl}`);
}

export function departmentInformationService() {
  return axios.get(`${BaseUrl}`);
}
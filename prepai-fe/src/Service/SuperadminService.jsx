import axios from "axios";
import BaseUrl from "../Redux-Saga/BaseURL/BaseURL";

export function fetchSuperadminSummaryService() {
  return axios({
    method: "GET",
    url: `${BaseUrl}sa/super/admin/summary`,
  });
}

export function fetchCollegesService() {
  return axios({
    method: "GET",
    url: `${BaseUrl}sa/request/college`,
  });
}

export function updateCollegeStatusService({ id, status }) {
  return axios({
    method: "PUT",
    url: `${BaseUrl}sa/request/col/${id}/status`,
    params: { status },
  });
}

import axios from "axios";
import BaseUrl from "../Redux-Saga/BaseURL/BaseURL";

export function loginService(payload) {
  return axios({
    method: "POST",
    url: `${BaseUrl}auth/login`,
    data: payload
  });
}
import axios from "axios";
import BaseUrl from "../Redux-Saga/BaseURL/BaseURL";

export function forgetPasswordService(payload) {
  return axios({
    method: "POST",
    url: `${BaseUrl}auth/forgot-password`,
    data: payload
  });
}
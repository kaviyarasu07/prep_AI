import axios from "axios";
import BaseUrl from "../Redux-Saga/BaseURL/BaseURL";

export function registerService(payload) {
  return axios({
    method: "POST",
    url: `${BaseUrl}request/college/register`,
    data: payload
  });
}
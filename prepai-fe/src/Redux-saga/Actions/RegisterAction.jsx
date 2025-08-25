import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../Types/RegisterTypes";

export const registerRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
});

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});
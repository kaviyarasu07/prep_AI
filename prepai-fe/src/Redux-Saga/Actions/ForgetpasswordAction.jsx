import { FORGET_PASSWORD_FAILURE, FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_SUCCESS } from "../Types/ForgetpasswordTypes";

export const forgetPasswordRequest = (payload) => ({
  type: FORGET_PASSWORD_REQUEST,
  payload,
});

export const forgetPasswordSuccess = (data) => ({
  type: FORGET_PASSWORD_SUCCESS,
  payload: data,
});

export const forgetPasswordFailure = (error) => ({
  type: FORGET_PASSWORD_FAILURE,
  payload: error,
});

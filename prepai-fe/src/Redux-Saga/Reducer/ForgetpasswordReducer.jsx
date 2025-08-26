import { FORGET_PASSWORD_FAILURE, FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_SUCCESS } from "../Types/ForgetpasswordTypes";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export const forgetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGET_PASSWORD_REQUEST:
      return { ...state, loading: true, error: null };
    case FORGET_PASSWORD_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FORGET_PASSWORD_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
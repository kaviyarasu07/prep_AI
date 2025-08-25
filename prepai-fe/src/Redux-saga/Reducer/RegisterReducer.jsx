import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../Types/RegisterTypes";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

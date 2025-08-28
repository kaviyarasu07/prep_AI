import { FETCH_COLLEGES_FAILURE, FETCH_COLLEGES_REQUEST, FETCH_COLLEGES_SUCCESS, FETCH_SUPERADMIN_SUMMARY_FAILURE, FETCH_SUPERADMIN_SUMMARY_REQUEST, FETCH_SUPERADMIN_SUMMARY_SUCCESS, UPDATE_COLLEGE_STATUS_FAILURE, UPDATE_COLLEGE_STATUS_REQUEST, UPDATE_COLLEGE_STATUS_SUCCESS } from "../Types/SuperadminTypes";

const initialState = {
    loading: false,
    summary: [],
    colleges: [],
    error: null,
};

const superadminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUPERADMIN_SUMMARY_REQUEST:
        case FETCH_COLLEGES_REQUEST:
        case UPDATE_COLLEGE_STATUS_REQUEST:
            return { ...state, loading: true };

        case FETCH_SUPERADMIN_SUMMARY_SUCCESS:
            return { ...state, loading: false, summary: action.payload };
        case FETCH_COLLEGES_SUCCESS:
            return { ...state, loading: false, colleges: action.payload };
        case UPDATE_COLLEGE_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                colleges: state.colleges.map((col) =>
                    col.id === action.payload.id ? action.payload : col
                ),
            };

        case FETCH_SUPERADMIN_SUMMARY_FAILURE:
        case FETCH_COLLEGES_FAILURE:
        case UPDATE_COLLEGE_STATUS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default superadminReducer;
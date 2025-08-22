import { call, put, takeLatest } from "redux-saga/effects";
import { AVERAGE_STUDENTS_REQUEST, CLEAR_SEARCH_MENTOR, DEPARTMENT_INFORMATION_REQUEST, GET_MENTOR_REQUEST, SEARCH_MENTOR_FAILURE, SEARCH_MENTOR_REQUEST, SEARCH_MENTOR_SUCCESS, STUDENTS_WITHOUT_MENTOR_REQUEST, TOP_PERFORMING_REQUEST } from "../Types/MentordashboardTypes";
import { getMentorSuccess, getMentorFailure, studentsWithoutMentorSuccess, studentsWithoutMentorFailure, averageStudentsSuccess, averageStudentsFailure, topPerformingSuccess, topPerformingFailure, departmentInformationSuccess, departmentInformationFailure, searchMentorSuccess, searchMentorFailure } from "../Actions/MentordashboardAction";
import { averageStudentsService, departmentInformationService, getMentorService, searchMentorService, studentsWithoutMentorService, topPerformingService } from "../../Service/MentordashboardService";

function* getMentorSaga() {
  try {
    const response = yield call(getMentorService);
    yield put(getMentorSuccess(response.data));
  } catch (error) {
    yield put(getMentorFailure(error.message));
  }
}

function* studentsWithoutMentorSaga() {
  try {
    const response = yield call(studentsWithoutMentorService);
    yield put(studentsWithoutMentorSuccess(response.data));
  } catch (error) {
    yield put(studentsWithoutMentorFailure(error.message));
  }
}

function* averageStudentsSaga() {
  try {
    const response = yield call(averageStudentsService);
    yield put(averageStudentsSuccess(response.data));
  } catch (error) {
    yield put(averageStudentsFailure(error.message));
  }
}

function* topPerformingSaga() {
  try {
    const response = yield call(topPerformingService);
    yield put(topPerformingSuccess(response.data));
    console.log(response)
  } catch (error) {
    yield put(topPerformingFailure(error.message));
  }
}

function* departmentInformationSaga(action) {
  try {
    const response = yield call(departmentInformationService, action.payload);
    yield put(departmentInformationSuccess(response.data));
  } catch (error) {
    yield put(departmentInformationFailure(error.message));
  }
}

function* searchMentorSaga(action) {
  try {
    const response = yield call(searchMentorService, action.payload);
    if (!response.data) {
      yield put({ type: CLEAR_SEARCH_MENTOR });
      yield put({ type: SEARCH_MENTOR_FAILURE, error: "No mentor found" });
      return;
    }
    yield put({ type: SEARCH_MENTOR_SUCCESS, payload: response.data });
  } catch (error) {
    if (error.response?.status === 404) {
      yield put({ type: CLEAR_SEARCH_MENTOR });
      yield put({ type: SEARCH_MENTOR_FAILURE, error: "No mentor found" });
    } else {
      yield put({
        type: SEARCH_MENTOR_FAILURE,
        error: error.response?.data?.message || error.message,
      });
    }
  }
}

export default function* mentorDashboard() {
  yield takeLatest(GET_MENTOR_REQUEST, getMentorSaga);
  yield takeLatest(STUDENTS_WITHOUT_MENTOR_REQUEST, studentsWithoutMentorSaga);
  yield takeLatest(AVERAGE_STUDENTS_REQUEST, averageStudentsSaga);
  yield takeLatest(TOP_PERFORMING_REQUEST, topPerformingSaga);
  yield takeLatest(DEPARTMENT_INFORMATION_REQUEST, departmentInformationSaga);
  yield takeLatest(SEARCH_MENTOR_REQUEST, searchMentorSaga);
}

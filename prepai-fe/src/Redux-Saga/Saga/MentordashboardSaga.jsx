import { call, put, takeLatest } from "redux-saga/effects";
import { GET_MENTOR_REQUEST, STUDENTS_WITHOUT_MENTOR_REQUEST } from "../Types/MentordashboardTypes";
import { getMentorSuccess, getMentorFailure, studentsWithoutMentorSuccess, studentsWithoutMentorFailure } from "../Actions/MentordashboardAction";
import { getMentorService, studentsWithoutMentorService } from "../../Service/MentordashboardService";

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

export default function* mentorDashboard() {
  yield takeLatest(GET_MENTOR_REQUEST, getMentorSaga);
  yield takeLatest(STUDENTS_WITHOUT_MENTOR_REQUEST, studentsWithoutMentorSaga)
}

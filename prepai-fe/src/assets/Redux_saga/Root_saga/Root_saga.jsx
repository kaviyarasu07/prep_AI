// import { all } from "redux-saga/effects";
// import collegeSaga from "../Saga/College_Saga";
// import departmentSaga from "../Saga/Department_Saga";

 
// export default function* rootSaga() {
//   yield all([collegeSaga(),
//     departmentSaga()  
//   ]);
  
// }

import { all } from "redux-saga/effects";
import collegeSaga from "../Saga/College_Saga";
import departmentSaga from "../Saga/Department_Saga";

export default function* rootSaga() {
  yield all([
    collegeSaga(),       // ✅ College saga ready, but dispatch illa → API varathu
    departmentSaga()     // ✅ Department saga ready → GET API triggers
  ]);
}

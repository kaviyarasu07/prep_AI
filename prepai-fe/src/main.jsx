

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";



import Store from "./Compontent/Redux_Saga/Store/Store";
import SuperadminDashboard from "./Compontent/Superadmindashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <SuperadminDashboard />
  </Provider>
);

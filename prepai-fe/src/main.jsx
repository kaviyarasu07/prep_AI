<<<<<<< Updated upstream

=======
// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// // import store from "./Component/Store/Store";   // ✅ spelling correct
// // import SuperadminDashboard from "./Component/Superadmindashboard";  // ✅ spelling correct
// import store from "./Compontent/Redux_Saga/Store/Store";
// import SuperadminDashboard from "./Compontent/Superadmindashboard";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <SuperadminDashboard />   {/* render your dashboard */}
//   </Provider>
// );



// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./Compontent/Redux_Saga/Store";
// import SuperadminDashboard from "./Compontent/Superadmindashboard";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <SuperadminDashboard />
//   </Provider>
// );
>>>>>>> Stashed changes

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
<<<<<<< Updated upstream



=======
// import store from "./store";
// import store from "./Component/Redux_Saga/Store/Store";

// import SuperadminDashboard from "./Component/SuperadminDashboard";
>>>>>>> Stashed changes
import Store from "./Compontent/Redux_Saga/Store/Store";
import SuperadminDashboard from "./Compontent/Superadmindashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <SuperadminDashboard />
  </Provider>
);

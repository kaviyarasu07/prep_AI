// import React from "react";

// import { useNavigate } from "react-router-dom";

// function Departmentdashboard() {

//      const navigate = useNavigate();

//      const handleAddStudent = () => {
//     navigate("/addstudents"); // 👉 navigate to Add Student page
//   };
//   return (
//     <div className="d-flex">
//       {/* 🌟 SIDEBAR */}
     

//       {/* 🌟 MAIN DASHBOARD CONTENT */}
//       <div className="container-fluid bg-light min-vh-100 p-4">
//         <div className="row">
//           {/* 🌟 LEFT SIDE - RECENT ACTIVITIES WITH TIMELINE */}
//           <div className="col-md-3 mb-4">
//             <div className="bg-white p-4 shadow-sm rounded-4 h-100">
//               <h5 className="fw-bold mb-4">
//                 <i className="bi bi-clock-history me-2 text-primary"></i>
//                 Recent Activities
//               </h5>

//               {/* Timeline Container */}
//               <div className="position-relative ps-4">
//                 {/* Vertical Line */}
//                 <div
//                   className="position-absolute top-0 start-0 bg-secondary"
//                   style={{
//                     width: "2px",
//                     height: "100%",
//                     opacity: 0.3,
//                     left: "12px",
//                   }}
//                 ></div>

//                 {/* Item 1 */}
//                 <div className="d-flex align-items-start mb-4">
//                   <div
//                     className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
//                     style={{ width: "25px", height: "25px", zIndex: 1 }}
//                   >
//                     <i className="bi bi-person-plus"></i>
//                   </div>
//                   <div className="ms-3">
//                     <strong>New student added:</strong> Sarah Chen
//                     <br />
//                     <small className="text-muted">2 hours ago</small>
//                   </div>
//                 </div>

//                 {/* Item 2 */}
//                 <div className="d-flex align-items-start mb-4">
//                   <div
//                     className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
//                     style={{ width: "25px", height: "25px", zIndex: 1 }}
//                   >
//                     <i className="bi bi-journal-check"></i>
//                   </div>
//                   <div className="ms-3">
//                     <strong>Assessment completed:</strong> Introduction to AI
//                     <br />
//                     <small className="text-muted">Yesterday</small>
//                   </div>
//                 </div>

//                 {/* Item 3 */}
//                 <div className="d-flex align-items-start">
//                   <div
//                     className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
//                     style={{ width: "25px", height: "25px", zIndex: 1 }}
//                   >
//                     <i className="bi bi-mic-fill"></i>
//                   </div>
//                   <div className="ms-3">
//                     <strong>Mock interview scheduled for David Lee</strong>
//                     <br />
//                     <small className="text-muted">2 days ago</small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 🌟 RIGHT SIDE - DASHBOARD CONTENT */}
//           <div className="col-md-9">
//             {/* Header */}
//             <div className="mb-4">
//               <h3 className="fw-bold text-dark">
//                 Department Dashboard - Computer Science
//               </h3>
//               <p className="text-muted mb-0">Welcome, Dr. Anya Sharma</p>
//             </div>

//             {/* Stats Cards */}
//             <div className="row mb-4">
//               <div className="col-md-3 col-sm-6 mb-3">
//                 <div className="card text-center border-0 shadow-sm p-3 rounded-4">
//                   <h2 className="fw-bold text-primary">350</h2>
//                   <p className="fw-semibold text-secondary">Total Students</p>
//                 </div>
//               </div>
//               <div className="col-md-3 col-sm-6 mb-3">
//                 <div className="card text-center border-0 shadow-sm p-3 rounded-4">
//                   <h2 className="fw-bold text-success">25</h2>
//                   <p className="fw-semibold text-secondary">Total Mentors</p>
//                 </div>
//               </div>
//               <div className="col-md-3 col-sm-6 mb-3">
//                 <div className="card text-center border-0 shadow-sm p-3 rounded-4">
//                   <h2 className="fw-bold text-warning">12</h2>
//                   <p className="fw-semibold text-secondary">
//                     Scheduled Assessments
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-3 col-sm-6 mb-3">
//                 <div className="card text-center border-0 shadow-sm p-3 rounded-4">
//                   <h2 className="fw-bold text-danger">8</h2>
//                   <p className="fw-semibold text-secondary">
//                     Scheduled Mock Interviews
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mb-4">
//                  <button className="btn btn-primary me-2" onClick={handleAddStudent}>
//         Add Student
//       </button>
//               <button className="btn btn-outline-secondary me-2">
//                 Bulk Upload Students
//               </button>
//               <button className="btn btn-outline-dark me-2">Add Assessment</button>
//               <button className="btn btn-outline-info">
//                 Schedule Mock Interview
//               </button>
//             </div>

//             {/* Filters */}
//             <div className="row mb-4">
//               <div className="col-md-4 mb-2">
//                 <select className="form-select">
//                   <option>Filter by Year</option>
//                   <option>1st Year</option>
//                   <option>2nd Year</option>
//                   <option>3rd Year</option>
//                 </select>
//               </div>
//               <div className="col-md-4 mb-2">
//                 <select className="form-select">
//                   <option>Filter by Mentor</option>
//                   <option>Dr. Ben Carter</option>
//                   <option>Dr. Chloe Bennett</option>
//                 </select>
//               </div>
//               <div className="col-md-4 mb-2">
//                 <select className="form-select">
//                   <option>Filter by Status</option>
//                   <option>Active</option>
//                   <option>Inactive</option>
//                 </select>
//               </div>
//             </div>

//             {/* Students Table */}
//             <div className="card shadow-sm border-0 rounded-4">
//               <div className="card-body p-0">
//                 <table className="table table-hover mb-0 align-middle">
//                   <thead className="table-light">
//                     <tr>
//                       <th>Name</th>
//                       <th>ID</th>
//                       <th>Year</th>
//                       <th>Mentor</th>
//                       <th>CGPA</th>
//                       <th>Assessments</th>
//                       <th>Mock Interviews</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Ethan Wong</td>
//                       <td>2021001</td>
//                       <td>3rd</td>
//                       <td>Dr. Ben Carter</td>
//                       <td>3.8</td>
//                       <td>5</td>
//                       <td>2</td>
//                     </tr>
//                     <tr>
//                       <td>Olivia Patel</td>
//                       <td>2022002</td>
//                       <td>2nd</td>
//                       <td>Dr. Ben Carter</td>
//                       <td>3.9</td>
//                       <td>3</td>
//                       <td>1</td>
//                     </tr>
//                     <tr>
//                       <td>Noah Ramirez</td>
//                       <td>2021003</td>
//                       <td>3rd</td>
//                       <td>Dr. Chloe Bennett</td>
//                       <td>3.7</td>
//                       <td>4</td>
//                       <td>2</td>
//                     </tr>
//                     <tr>
//                       <td>Ava Singh</td>
//                       <td>2022004</td>
//                       <td>2nd</td>
//                       <td>Dr. Chloe Bennett</td>
//                       <td>3.6</td>
//                       <td>2</td>
//                       <td>1</td>
//                     </tr>
//                     <tr>
//                       <td>Liam Kim</td>
//                       <td>2023005</td>
//                       <td>1st</td>
//                       <td>Dr. Ben Carter</td>
//                       <td>3.5</td>
//                       <td>1</td>
//                       <td>0</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Departmentdashboard;


import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Departmentdashboard() {
  const navigate = useNavigate();

  const handleAddStudent = () => {
    navigate("/addstudents");
  };

  return (
    <div className="bg-light min-vh-100">
      {/* 🌟 TOP NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-4">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-dark" href="#">
            Acme University
          </a>
          <div className="d-flex align-items-center ms-auto">
            <ul className="navbar-nav me-3 d-none d-md-flex">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Students
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Assessments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Mentors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Interviews
                </a>
              </li>
            </ul>
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="profile"
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>
      </nav>

      {/* 🌟 MAIN CONTENT */}
      <div className="container-fluid p-4">
        <div className="row">
          {/* 🌟 LEFT - RECENT ACTIVITIES */}
          <div className="col-md-3 mb-4">
            <div className="bg-white p-4 shadow-sm rounded-4 h-100">
              <h5 className="fw-bold mb-4">
                <i className="bi bi-clock-history me-2 text-primary"></i>
                Recent Activities
              </h5>

              <div className="position-relative ps-4">
                {/* vertical line */}
                <div
                  className="position-absolute top-0 start-0 bg-secondary"
                  style={{
                    width: "2px",
                    height: "100%",
                    opacity: 0.3,
                    left: "12px",
                  }}
                ></div>

                {/* Activity 1 */}
                <div className="d-flex align-items-start mb-4">
                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "25px", height: "25px", zIndex: 1 }}
                  >
                    <i className="bi bi-person-plus"></i>
                  </div>
                  <div className="ms-3">
                    <strong>New student added:</strong> Sarah Chen
                    <br />
                    <small className="text-muted">2 hours ago</small>
                  </div>
                </div>

                {/* Activity 2 */}
                <div className="d-flex align-items-start mb-4">
                  <div
                    className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "25px", height: "25px", zIndex: 1 }}
                  >
                    <i className="bi bi-journal-check"></i>
                  </div>
                  <div className="ms-3">
                    <strong>Assessment completed:</strong> Introduction to AI
                    <br />
                    <small className="text-muted">Yesterday</small>
                  </div>
                </div>

                {/* Activity 3 */}
                <div className="d-flex align-items-start">
                  <div
                    className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "25px", height: "25px", zIndex: 1 }}
                  >
                    <i className="bi bi-mic-fill"></i>
                  </div>
                  <div className="ms-3">
                    <strong>Mock interview scheduled for David Lee</strong>
                    <br />
                    <small className="text-muted">2 days ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🌟 RIGHT - DASHBOARD */}
          <div className="col-md-9">
            {/* Header */}
            <div className="mb-4">
              <h4 className="fw-bold text-dark">
                Department Dashboard - Computer Science
              </h4>
              <p className="text-muted mb-0">Welcome, Dr. Anya Sharma</p>
            </div>

            {/* Stats Cards */}
            <div className="row mb-4">
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card text-center border-0 shadow-sm p-3 rounded-4">
                  <h2 className="fw-bold text-primary mb-0">350</h2>
                  <p className="fw-semibold text-secondary mb-0">
                    Total Students
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card text-center border-0 shadow-sm p-3 rounded-4">
                  <h2 className="fw-bold text-success mb-0">25</h2>
                  <p className="fw-semibold text-secondary mb-0">
                    Total Mentors
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card text-center border-0 shadow-sm p-3 rounded-4">
                  <h2 className="fw-bold text-warning mb-0">12</h2>
                  <p className="fw-semibold text-secondary mb-0">
                    Scheduled Assessments
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card text-center border-0 shadow-sm p-3 rounded-4">
                  <h2 className="fw-bold text-danger mb-0">8</h2>
                  <p className="fw-semibold text-secondary mb-0">
                    Scheduled Mock Interviews
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mb-4">
              <button className="btn btn-primary me-2" onClick={handleAddStudent}>
                Add Student
              </button>
              <button className="btn btn-outline-secondary me-2">
                Bulk Upload Students
              </button>
              <button className="btn btn-outline-dark me-2">Add Assessment</button>
              <button className="btn btn-outline-info">
                Schedule Mock Interview
              </button>
            </div>

            {/* Filters */}
            <div className="row mb-4">
              <div className="col-md-4 mb-2">
                <select className="form-select">
                  <option>Filter by Year</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                </select>
              </div>
              <div className="col-md-4 mb-2">
                <select className="form-select">
                  <option>Filter by Mentor</option>
                  <option>Dr. Ben Carter</option>
                  <option>Dr. Chloe Bennett</option>
                </select>
              </div>
              <div className="col-md-4 mb-2">
                <select className="form-select">
                  <option>Filter by Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            {/* Students Table */}
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-0">
                <table className="table table-hover mb-0 align-middle text-center">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>ID</th>
                      <th>Year</th>
                      <th>Mentor</th>
                      <th>CGPA</th>
                      <th>Assessments Completed</th>
                      <th>Mock Interviews Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ethan Wong</td>
                      <td>2021001</td>
                      <td>3rd</td>
                      <td>Dr. Ben Carter</td>
                      <td>3.8</td>
                      <td>5</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Olivia Patel</td>
                      <td>2022002</td>
                      <td>2nd</td>
                      <td>Dr. Ben Carter</td>
                      <td>3.9</td>
                      <td>3</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Noah Ramirez</td>
                      <td>2021003</td>
                      <td>3rd</td>
                      <td>Dr. Chloe Bennett</td>
                      <td>3.7</td>
                      <td>4</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Ava Singh</td>
                      <td>2022004</td>
                      <td>2nd</td>
                      <td>Dr. Chloe Bennett</td>
                      <td>3.6</td>
                      <td>2</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Liam Kim</td>
                      <td>2023005</td>
                      <td>1st</td>
                      <td>Dr. Ben Carter</td>
                      <td>3.5</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departmentdashboard;


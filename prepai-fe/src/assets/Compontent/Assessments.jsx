


// import React from 'react';
// import Navbar from '../../Layout/Navbar';

// function Assessments() {
//   return (
//     <>
//       <Navbar />
//       <div className="container my-4">
        
//         {/* Heading Section */}
//         <div className="text-center mb-4">
//           <h2>Department Assessments</h2>
//           <p className="text-muted">
//             Computer Science and Engineering | Admin: Dr. Eleanor Vance
//           </p>
//         </div>

//         {/* Summary Cards */}
//         <div className="row mb-5">
//           <div className="col-md-3 mb-3">
//             <div className="card shadow-sm h-100">
//               <div className="card-body text-center">
//                 <h6 className="text-muted">Total Assessments Conducted</h6>
//                 <h4>120</h4>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 mb-3">
//             <div className="card shadow-sm h-100">
//               <div className="card-body text-center">
//                 <h6 className="text-muted">Upcoming Assessments</h6>
//                 <h4>6</h4>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 mb-3">
//             <div className="card shadow-sm h-100">
//               <div className="card-body text-center">
//                 <h6 className="text-muted">Total Questions in Pool</h6>
//                 <h4>450</h4>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 mb-3">
//             <div className="card shadow-sm h-100">
//               <div className="card-body text-center">
//                 <h6 className="text-muted">Average Score Across All Students</h6>
//                 <h4>72%</h4>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Upcoming Assessments */}
//         <div className="mb-5">
//           <h5 className="mb-3">Upcoming Assessments</h5>
//           <div className="table-responsive">
//             <table className="table table-bordered table-hover align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th>Topic</th>
//                   <th>Type</th>
//                   <th>Scheduled On</th>
//                   <th>Created By</th>
//                   <th>Difficulty</th>
//                   <th>Students Assigned</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Data Structures</td>
//                   <td>MCQ</td>
//                   <td>2024-08-15</td>
//                   <td>Dr. Eleanor Vance</td>
//                   <td><span className="badge bg-secondary">Medium</span></td>
//                   <td>150</td>
//                 </tr>
//                 <tr>
//                   <td>Algorithms</td>
//                   <td>Written</td>
//                   <td>2024-08-22</td>
//                   <td>Dr. Eleanor Vance</td>
//                   <td><span className="badge bg-secondary">Hard</span></td>
//                   <td>120</td>
//                 </tr>
//                 <tr>
//                   <td>Operating Systems</td>
//                   <td>MCQ</td>
//                   <td>2024-09-05</td>
//                   <td>Dr. Eleanor Vance</td>
//                   <td><span className="badge bg-secondary">Medium</span></td>
//                   <td>180</td>
//                 </tr>
//                 <tr>
//                   <td>Database Management</td>
//                   <td>Written</td>
//                   <td>2024-09-12</td>
//                   <td>Dr. Eleanor Vance</td>
//                   <td><span className="badge bg-secondary">Easy</span></td>
//                   <td>160</td>
//                 </tr>
//                 <tr>
//                   <td>Computer Networks</td>
//                   <td>MCQ</td>
//                   <td>2024-09-19</td>
//                   <td>Dr. Eleanor Vance</td>
//                   <td><span className="badge bg-secondary">Medium</span></td>
//                   <td>140</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Past Assessments */}
//         <div>
//           <h5 className="mb-3">Past Assessments</h5>
//           <div className="table-responsive">
//             <table className="table table-bordered table-hover align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th>Topic</th>
//                   <th>Type</th>
//                   <th>Date Conducted</th>
//                   <th>Avg Score</th>
//                   <th>Top Scorer</th>
//                   <th>No. of Students</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Introduction to Programming</td>
//                   <td>MCQ</td>
//                   <td>2024-07-01</td>
//                   <td>85%</td>
//                   <td>Ethan Carter</td>
//                   <td>200</td>
//                 </tr>
//                 <tr>
//                   <td>Object-Oriented Programming</td>
//                   <td>Written</td>
//                   <td>2024-07-08</td>
//                   <td>78%</td>
//                   <td>Olivia Bennett</td>
//                   <td>180</td>
//                 </tr>
//                 <tr>
//                   <td>Data Structures</td>
//                   <td>MCQ</td>
//                   <td>2024-07-15</td>
//                   <td>72%</td>
//                   <td>Noah Thompson</td>
//                   <td>150</td>
//                 </tr>
//                 <tr>
//                   <td>Algorithms</td>
//                   <td>Written</td>
//                   <td>2024-07-22</td>
//                   <td>65%</td>
//                   <td>Ava Harper</td>
//                   <td>120</td>
//                 </tr>
//                 <tr>
//                   <td>Operating Systems</td>
//                   <td>MCQ</td>
//                   <td>2024-08-01</td>
//                   <td>80%</td>
//                   <td>Liam Foster</td>
//                   <td>180</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }

// export default Assessments;




import React from "react";
import Navbar from "../../Layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Assessments() {
  return (
    <>
      <Navbar />
      <div className="container py-4" style={{ maxWidth: "1200px" }}>
        
        {/* ===== Heading Section ===== */}
        <div className="mb-4">
          <h4 className="fw-bold mb-1">Department Assessments</h4>
          <p className="text-muted">
            Computer Science and Engineering | Admin:{" "}
            <span className="fw-semibold">Dr. Eleanor Vance</span>
          </p>
        </div>

        {/* ===== Summary Cards ===== */}
        <div className="row g-4 mb-5">
          {[
            { title: "Total Assessments Conducted", value: 120 },
            { title: "Upcoming Assessments", value: 6 },
            { title: "Total Questions in Pool", value: 450 },
            { title: "Average Score Across All Students", value: "72%" },
          ].map((item, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="card border-0 shadow-sm text-center h-100"
                style={{ borderRadius: "15px", height: "120px" }}
              >
                <div className="card-body d-flex flex-column justify-content-center">
                  <h6 className="text-secondary mb-2">{item.title}</h6>
                  <h4 className="fw-bold mb-0">{item.value}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Upcoming Assessments ===== */}
        <div className="mb-5">
          <h6 className="fw-bold mb-3">Upcoming Assessments</h6>
          <div className="table-responsive">
            <table
              className="table table-bordered align-middle shadow-sm"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                fontSize: "15px",
              }}
            >
              <thead className="table-light">
                <tr>
                  <th>Topic</th>
                  <th>Type</th>
                  <th>Scheduled On</th>
                  <th>Created By</th>
                  <th>Difficulty</th>
                  <th>Students Assigned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Structures</td>
                  <td>MCQ</td>
                  <td>2024-08-15</td>
                  <td>Dr. Eleanor Vance</td>
                  <td><span className="badge bg-primary">Medium</span></td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>Algorithms</td>
                  <td>Written</td>
                  <td>2024-08-22</td>
                  <td>Dr. Eleanor Vance</td>
                  <td><span className="badge bg-primary">Hard</span></td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Operating Systems</td>
                  <td>MCQ</td>
                  <td>2024-09-05</td>
                  <td>Dr. Eleanor Vance</td>
                  <td><span className="badge bg-primary">Medium</span></td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>Database Management</td>
                  <td>Written</td>
                  <td>2024-09-12</td>
                  <td>Dr. Eleanor Vance</td>
                  <td><span className="badge bg-primary">Easy</span></td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>Computer Networks</td>
                  <td>MCQ</td>
                  <td>2024-09-19</td>
                  <td>Dr. Eleanor Vance</td>
                  <td><span className="badge bg-primary">Medium</span></td>
                  <td>140</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== Past Assessments ===== */}
        <div>
          <h6 className="fw-bold mb-3">Past Assessments</h6>
          <div className="table-responsive">
            <table
              className="table table-bordered align-middle shadow-sm"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                fontSize: "15px",
              }}
            >
              <thead className="table-light">
                <tr>
                  <th>Topic</th>
                  <th>Type</th>
                  <th>Date Conducted</th>
                  <th>Avg Score</th>
                  <th>Top Scorer</th>
                  <th>No. of Students</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Introduction to Programming</td>
                  <td>MCQ</td>
                  <td>2024-07-01</td>
                  <td><span className="badge bg-primary">85%</span></td>
                  <td>Ethan Carter</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>Object-Oriented Programming</td>
                  <td>Written</td>
                  <td>2024-07-08</td>
                  <td><span className="badge bg-primary ">78%</span></td>
                  <td>Olivia Bennett</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>Data Structures</td>
                  <td>MCQ</td>
                  <td>2024-07-15</td>
                  <td><span className="badge bg-primary ">72%</span></td>
                  <td>Noah Thompson</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>Algorithms</td>
                  <td>Written</td>
                  <td>2024-07-22</td>
                  <td><span className="badge bg-primary">65%</span></td>
                  <td>Ava Harper</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>Operating Systems</td>
                  <td>MCQ</td>
                  <td>2024-08-01</td>
                  <td><span className="badge bg-primary">80%</span></td>
                  <td>Liam Foster</td>
                  <td>180</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}

export default Assessments;

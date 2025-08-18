import React from "react";
import profile from '../assets/img/profile.jpg';

export default function MentorDashboard() {
  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-4">
        <span className="navbar-brand fw-bold"><i className="fa-solid fa-graduation-cap me-2"></i>Acme University Admin</span>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-3">Dashboard</li>
            <li className="nav-item px-3">Mentors</li>
            <li className="nav-item px-3">Students</li>
            <li className="nav-item px-3">Courses</li>
            <li className="nav-item px-3">Settings</li>
          </ul>
        </div>
        <img src={profile} alt="profile" className="rounded-circle ms-3" width="50" height="50" />
      </nav>

      <div className="container py-4">
        <h3 className="fw-bold">Mentors Overview</h3>
        <p className="text-primary mt-3">Manage and monitor mentor performance within the Computer Science and Engineering department.</p>

        <div className="mb-4 mt-5">
          <h6 className="fw-bold">Department Information</h6>
          <hr className="mt-4 mb-3" />
          <div className="row mt-3">
            <div className="col-md-3 text-primary">College Name</div>
            <div className="col-md-9"></div>
            <hr className="mt-4 mb-3" />

            <div className="col-md-3 text-primary">Department</div>
            <div className="col-md-9"></div>
            <hr className="mt-4 mb-3" />

            <div className="col-md-3 text-primary">Department Admin</div>
            <div className="col-md-9 mb-5"></div>
          </div>
        </div>

        <h6 className="fw-bold mb-4">Mentor Summary</h6>
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h6>Total Mentors</h6>
              <h4 className="fw-bold"></h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h6>Students Without Mentor</h6>
              <h4 className="fw-bold"></h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h6>Avg. Students per Mentor</h6>
              <h4 className="fw-bold"></h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h6>Top Performing Mentor</h6>
              <h5 className="fw-bold"></h5>
            </div>
          </div>
        </div>
        <h6 className="fw-bold mt-5">Mentor Details</h6>
        <div className="mb-3 mt-4 position-relative">
          <input type="text" className="form-control ps-5" placeholder="Search by name or email" style={{backgroundColor: "#c8e5ee"}} />
          <i className="fa-solid fa-magnifying-glass position-absolute" style={{ top: "50%", left: "15px", transform: "translateY(-50%)", color: "#6c757d" }}></i>
        </div>

        <div className="table-responsive">
          <table className="table text-center align-middle mt-4" style={{ border: "1px solid #dee2e6" }}>
            <thead className="table-light">
              <tr>
                <th style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>Mentor Name</th>
                <th style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>Email</th>
                <th style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>Total Students</th>
                <th style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>Avg CGPA of Students</th>
                <th style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>Assessments Monitored</th>
                <th style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>Mock Interviews Conducted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>Mr. Karthik</td>
                <td style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>karthik.r@email.com</td>
                <td style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>20</td>
                <td style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>8.5</td>
                <td style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>15</td>
                <td style={{ borderLeft: "none", borderRight: "none", padding: "15px" }}>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

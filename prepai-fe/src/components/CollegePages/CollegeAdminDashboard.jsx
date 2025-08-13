import React from "react";
import { FaTachometerAlt, FaUsers, FaClipboardList, FaChalkboardTeacher, FaFileAlt, FaCogs } from "react-icons/fa";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiUnicorn } from "react-icons/gi";


export default function CollegeAdminDashboard() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-md-2 bg-light border-end d-flex flex-column p-3">
          <h5 className="fw-bold mb-4"> <GiUnicorn size={32} className="mb-3" /> Prep AI</h5>
          <nav className="nav flex-column">
            <a href="#" className="nav-link fw-bold"><FaTachometerAlt className="me-2" /> Dashboard</a>
            <a href="#" className="nav-link fw-bold fw-bold"><FaUsers className="me-2 fs-5" /> Department Management</a>
            <a href="#" className="nav-link fw-bold"><FaUsers className="me-2" /> Department Admins</a>
            <a href="#" className="nav-link fw-bold"><FaUsers className="me-2" /> Students</a>
            <a href="#" className="nav-link fw-bold"><FaClipboardList className="me-2" /> Assessments</a>
            <a href="#" className="nav-link fw-bold"><FaChalkboardTeacher className="me-2" /> Mock Interviews</a>
            <a href="#" className="nav-link fw-bold"><FaFileAlt className="me-2" /> Reports</a>
          </nav>
          <div className="mt-auto">
            <a href="#" className="nav-link text-dark"><FaCogs className="me-2" /> Settings</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4">
          <h3>Welcome</h3>

          {/* Summary Cards */}
          <div className="row g-3 mt-3">
            {[
              { title: "Total Departments", value: 12 },
              { title: "Total Students", value: 450 },
              { title: "Total Department Admins", value: 10 },
              { title: "Completed Assessments", value: 30 },
            ].map((card, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="p-3 rounded shadow-sm bg-white text-center h-100">
                  <h5 className="fw-bold">{card.value}</h5>
                  <p className="mb-0 text-muted">{card.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Department Summary Table */}
          <div className="mt-4">
            <h5>Department Summary</h5>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search by department or admin name"
            />
            <Table bordered hover responsive>
              <thead className="table-light">
                <tr>
                  <th>Department Name</th>
                  <th>Assigned Admin</th>
                  <th>No. of Students</th>
                  <th>Assessments Conducted</th>
                  <th>Mock Interviews Conducted</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty row for API data */}
                <tr>
                  <td colSpan="7" className="text-center text-muted">No data available</td>
                </tr>
              </tbody>
            </Table>
          </div>

          {/* Upcoming Interviews Table */}
          <div className="mt-4">
            <h5>Upcoming Interviews</h5>
            <Table bordered hover responsive>
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Student Name</th>
                  <th>Department</th>
                  <th>Assigned Admin</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty row for API data */}
                <tr>
                  <td colSpan="6" className="text-center text-muted">No interviews scheduled</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary" className="mt-2">View All</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
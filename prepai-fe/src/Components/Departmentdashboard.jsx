



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeptCountRequest,
  fetchDeptFilterRequest,
  fetchDeptTableRequest,
  
} from "../Redux-Saga/Actions/DepartmentdashAction";
import Navbar from "./Navbar/Navbar";

function Departmentdashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const { totalStudents, totalMentor, tableData, loading, error } = useSelector(
    (state) => state.dept
  );

  
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");
  const [mentor, setMentor] = useState("");

  const departmentCode = "IT"; 

  // Initial load
  useEffect(() => {
    dispatch(fetchDeptCountRequest(departmentCode));
    dispatch(fetchDeptTableRequest(departmentCode));
  }, [dispatch]);

 
  useEffect(() => {
    dispatch(
      fetchDeptFilterRequest({
        departmentCode,
        year,
        
        mentor
      })
    );
  }, [year,  mentor, dispatch]);

  const handleAddStudent = () => {
    navigate("/addstudents");
  };

  return (
    <>
      <Navbar />
      <div className="bg-light min-vh-100">
        <div className="container-fluid p-4">
          <div className="row">
            {/* LEFT - Recent Activities */}
            <div className="col-md-3 mb-4">
              <div className="bg-white p-4 shadow-sm rounded-4 h-100">
                <h5 className="fw-bold mb-4">
                  <i className="bi bi-clock-history me-2 text-primary"></i>
                  Recent Activities
                </h5>
                <div className="position-relative ps-4">
                  <div
                    className="position-absolute top-0 start-0 bg-secondary"
                    style={{ width: "2px", height: "100%", opacity: 0.3, left: "12px" }}
                  ></div>
                  {/* Example Activities */}
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                         style={{ width: "25px", height: "25px", zIndex: 1 }}>
                      <i className="bi bi-person-plus"></i>
                    </div>
                    <div className="ms-3">
                      <strong>New student added:</strong> Sarah Chen
                      <br />
                      <small className="text-muted">2 hours ago</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                         style={{ width: "25px", height: "25px", zIndex: 1 }}>
                      <i className="bi bi-journal-check"></i>
                    </div>
                    <div className="ms-3">
                      <strong>Assessment completed:</strong> Introduction to AI
                      <br />
                      <small className="text-muted">Yesterday</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                         style={{ width: "25px", height: "25px", zIndex: 1 }}>
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

            {/* RIGHT - Dashboard */}
            <div className="col-md-9">
              <div className="mb-4">
                <h4 className="fw-bold text-dark">Department Dashboard - Computer Science</h4>
                <p className="text-muted mb-0">Welcome, Dr. Anya Sharma</p>
              </div>

              {/* Stats Cards */}
              <div className="row mb-4">
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="card text-center border-0 shadow-sm p-3 rounded-4">
                    {loading ? (
                      <h2 className="fw-bold text-primary mb-0">Loading...</h2>
                    ) : error ? (
                      <h2 className="fw-bold text-danger mb-0">Error</h2>
                    ) : (
                      <h2 className="fw-bold text-primary mb-0">{totalStudents}</h2>
                    )}
                    <p className="fw-semibold text-secondary mb-0">Total Students</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="card text-center border-0 shadow-sm p-3 rounded-4">
                    {loading ? (
                      <h2 className="fw-bold text-primary mb-0">Loading...</h2>
                    ) : error ? (
                      <h2 className="fw-bold text-danger mb-0">Error</h2>
                    ) : (
                      <h2 className="fw-bold text-primary mb-0">{totalMentor}</h2>
                    )}
                    <p className="fw-semibold text-secondary mb-0">Total Mentor</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="card text-center border-0 shadow-sm p-3 rounded-4">
                    <h2 className="fw-bold text-warning mb-0">12</h2>
                    <p className="fw-semibold text-secondary mb-0">Scheduled Assessments</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="card text-center border-0 shadow-sm p-3 rounded-4">
                    <h2 className="fw-bold text-danger mb-0">8</h2>
                    <p className="fw-semibold text-secondary mb-0">Scheduled Mock Interviews</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mb-4">
                <button className="btn btn-primary me-2" onClick={handleAddStudent}>
                  Add Student
                </button>
                <button className="btn btn-outline-secondary me-2">Bulk Upload Students</button>
                <button className="btn btn-outline-dark me-2">Add Assessment</button>
                <button className="btn btn-outline-info">Schedule Mock Interview</button>
              </div>

              {/* Filters */}
              <div className="row mb-4">
                <div className="col-md-4 mb-2">
                  <select className="form-select" value={year} onChange={e => setYear(e.target.value)}>
                    <option value="">Filter by Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <select className="form-select" value={mentor} onChange={e => setMentor(e.target.value)}>
                    <option value="">Filter by Mentor</option>
                    <option value="Dr. Ben Carter">Dr. Ben Carter</option>
                    <option value="Dr. Chloe Bennett">Dr. Chloe Bennett</option>
                  </select>
                </div>
                <div className="col-md-4 mb-2">
                  <select className="form-select" >
                    <option value="">Filter by Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Student Table */}
              <div className="card shadow-sm border-0 rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold mb-3 text-dark">
                    <i className="bi bi-people-fill text-primary me-2"></i>
                    Student Performance Summary
                  </h5>
                  <div className="table-responsive">
                    <table className="table table-striped align-middle">
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
                        {loading ? (
                          <tr>
                            <td colSpan="7" className="text-center">Loading...</td>
                          </tr>
                        ) : error ? (
                          <tr>
                            <td colSpan="7" className="text-center text-danger">Error loading data</td>
                          </tr>
                        ) : tableData.length > 0 ? (
                          tableData.map(student => (
                            <tr key={student.id}>
                              <td>{student.name}</td>
                              <td>{student.studentId}</td>
                              <td>{student.year}</td>
                              <td>{student.mentor}</td>
                              <td>{student.cgpa}</td>
                              <td>{student.assessmentsCompleted}</td>
                              <td>{student.mockInterviewsCompleted}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">No data available</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Departmentdashboard;

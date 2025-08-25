import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  FaCheck,
  FaTimes,
  FaPlus,
  FaHome,
  FaBuilding,
  FaFileAlt,
  FaCog,
  FaBars,
  FaTimesCircle,
  FaUserTie,
  FaUniversity,
  FaClipboardList,
  FaChartLine
} from "react-icons/fa";

import {
  fetchCollegesRequest,
  fetchSuperadminSummaryRequest,
  updateCollegeStatusRequest
} from "./Redux_Saga/Action/Superadmin_Action";

const SuperadminDashboard = () => {
  const dispatch = useDispatch();

  const { loading, summary, colleges, activity, error } = useSelector(
    (state) => state.superadmin
  );
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    dispatch(fetchSuperadminSummaryRequest());
    dispatch(fetchCollegesRequest());
  }, [dispatch]);

  const summaryData = summary && Object.keys(summary).length
    ? [
        { label: "Colleges Onboarded", value: summary.totalCollegesOnboarded, },
        { label: "Registration Requests", value: summary.totalRegistrationRequests,  },
        { label: "Engineering Colleges", value: summary.engineeringCollegesCount, },
        { label: "Arts Colleges", value: summary.artsCollegesCount, },
      ]
    : [
        { label: "Colleges Onboarded", value: 0, icon: <FaUniversity />, color: "primary" },
        { label: "Registration Requests", value: 0, icon: <FaClipboardList />, color: "warning" },
        { label: "Engineering Colleges", value: 0, icon: <FaBuilding />, color: "info" },
        { label: "Arts Colleges", value: 0, icon: <FaUserTie />, color: "success" },
      ];

  const totalCount = summaryData.reduce(
    (acc, item) => acc + (Number(item.value) || 0),
    0
  );

  const recentActivity = activity?.length
    ? activity
    : [
        { type: "approve", message: "Approved request for Liberal Arts College", date: "2023-08-09" },
        { type: "reject", message: "Rejected request for Metropolitan University", date: "2023-08-05" },
        { type: "add", message: "New college registration request received", date: "2023-08-03" },
      ];

  const getStatusBadge = (status) => {
    let bgColor = "#FFF3CD";
    let textColor = "#856404";

    if (status.toUpperCase() === "APPROVED") {
      bgColor = "#D4EDDA";
      textColor = "#155724";
    } else if (status.toUpperCase() === "REJECTED") {
      bgColor = "#F8D7DA";
      textColor = "#721C24";
    }

    return (
      <span
        style={{
          backgroundColor: bgColor,
          color: textColor,
          padding: "4px 10px",
          borderRadius: "4px",
          fontSize: "14px",
          display: "inline-block",
          fontWeight: "500",
        }}
      >
        {status}
      </span>
    );
  };

  const handleStatusChange = (collegeId, status) => {
    dispatch(updateCollegeStatusRequest({ id: collegeId, status }));
  };

  return (
    <div className="superadmin-dashboard" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Mobile Sidebar Toggle */}
      <button
        className="btn btn-primary d-md-none m-2 position-fixed"
        style={{ zIndex: 1060 }}
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar vh-100 p-3 position-fixed top-0 start-0 shadow ${sidebarOpen ? "sidebar-open" : "d-none"} d-md-block`}
        style={{ 
          width: "250px", 
          zIndex: 1050,
          background: " linear-gradient(180deg, #f5f5f5 0%, #9e9e9e 100%);",
          color: "white"
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4 d-md-none">
          <h4 className="fw-bold text-white mb-0">Prep AI</h4>
          <button className="btn btn-sm text-white" onClick={() => setSidebarOpen(false)}>
            <FaTimesCircle />
          </button>
        </div>

        <h4 className="mb-4 fw-bold text-black d-none d-md-block text-center">
          <FaChartLine className="me-2" /> Prep AI
        </h4>

        <hr className="text-white-50" />

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a 
              href="#" 
              className={`nav-link ${activeTab === "dashboard" ? "active bg-light text-dark rounded" : "text-white"}`}
              onClick={() => setActiveTab("dashboard")}
            >
              <FaHome className="me-2" /> Dashboard
            </a>
          </li>
          <li className="nav-item mb-2">
            <a 
              href="#" 
              className={`nav-link ${activeTab === "colleges" ? "active bg-light text-dark rounded" : "bg-light text-dark"}`}
              onClick={() => setActiveTab("colleges")}
            >
              <FaBuilding className="me-2" /> Colleges
            </a>
          </li>
          <li className="nav-item mb-2">
            <a 
              href="#" 
              className={`nav-link ${activeTab === "logs" ? "active bg-light text-dark rounded" : "bg-light text-dark"}`}
              onClick={() => setActiveTab("logs")}
            >
              <FaFileAlt className="me-2" /> Logs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a 
              href="#" 
              className={`nav-link ${activeTab === "settings" ? "active bg-light text-dark rounded" : "bg-light text-dark"}`}
              onClick={() => setActiveTab("settings")}
            >
              <FaCog className="me-2" /> Settings
            </a>
          </li>
        </ul>
        
        <div className="mt-auto pt-3 text-center small text-white-50">
          <p>Superadmin Portal v1.0</p>
        </div>
      </div>

      {sidebarOpen && (
        <div 
          className="overlay position-fixed top-0 start-0 w-100 h-100 d-md-none"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="main-content" style={{ marginLeft: "250px", padding: "20px" }}>
        <div className="content-container bg-white p-4 rounded shadow-sm">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0 text-primary"> Dashboard</h2>
           
          </div>

          {/* Summary Section */}
          <section className="mb-5">
            <h4 className="mb-3 border-bottom pb-2">Summry</h4>
           
            
            <div className="row g-4 mb-4">
              {summaryData.map((item, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-xl-3">
                  <div className={`card summary-card border-5 border-top border-${item.color} shadow-sm h-100`}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className={`flex-shrink-0 bg-${item.color} p-3 rounded-circle text-white me-3`}>
                          {item.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="text-muted mb-1">{item.label}</h6>
                          <h3 className="fw-bold mb-0">{item.value}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-light p-3 rounded d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Total Institutions:</h5>
              <span className="badge bg-primary fs-6">{totalCount}</span>
            </div>
          </section>

          {/* Colleges Table */}
          <section className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0 border-bottom pb-2">College Registration Requests</h4>
            
            </div>
            
            <div className="table-responsive rounded shadow-sm">
              <table className="table table-hover mb-0 align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>College Name</th>
                    <th>Type</th>
                    <th>University Type</th>
                    <th>Counseling Code</th>
                    <th>Date Requested</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {colleges.map((college, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{college.collegeName}</td>
                      <td>{college.type}</td>
                      <td>{college.universityType}</td>
                      <td>
                        <span className="badge bg-secondary">{college.counselingCode}</span>
                      </td>
                      <td>{college.dateRequested}</td>
                      <td>{getStatusBadge(college.status)}</td>
                      <td className="actions-cell">
                        {college.status.toLowerCase() === "pending" ? (
                          <>
                            <button
                              className="btn btn-sm btn-success me-1"
                              onClick={() => handleStatusChange(college.id, "APPROVED")}
                            >
                              <FaCheck className="me-1" /> Approve
                            </button>
                            <button
                              className="btn btn-sm btn-danger me-1"
                              onClick={() => handleStatusChange(college.id, "REJECTED")}
                            >
                              <FaTimes className="me-1" /> Reject
                            </button>
                            <button className="btn btn-sm btn-outline-primary">
                              View Details
                            </button>
                          </>
                        ) : (
                          <button className="btn btn-sm btn-outline-primary">
                            View Details
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent Activity */}
          <section>
            <h4 className="mb-3 border-bottom pb-2">Recent Activity</h4>
            <div className="bg-light p-3 rounded shadow-sm">
              <ul className="list-unstyled activity-log mb-0">
                {recentActivity.map((act, idx) => (
                  
                  <li key={idx} className="activity-item p-3 border-bottom">
                    
                    <div className="d-flex align-items-start">
                      
                      <div className={`flex-shrink-0 p-2 rounded-circle me-3 ${
                        act.type === "approve" ? "" : 
                        act.type === "reject" ? "" : ""
                      }`}>
                        
                        {act.type === "approve" ? (
  <FaCheck className="bg-light text-secondary" />
  
  
) : act.type === "reject" ? (
  <FaTimes className="bg-light text-dark" />
) : (
  <FaPlus className="bg-light text-dark" />
)}


                      </div>
                      <div className="flex-grow-1">
                        <div className="activity-message fw-medium">{act.message}</div>
                        <small className="text-muted activity-date">
                          <FaFileAlt className="me-1" /> {act.date}
                        </small>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        
        <footer className="mt-4 text-center text-muted small">
          <p>© 2023 Prep AI Superadmin Portal. All rights reserved.</p>
        </footer>
      </div>

      <style>{`
        .summary-card {
          transition: transform 0.2s;
        }
        
        .summary-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .table th {
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
        }
        
        .activity-item {
          transition: background-color 0.2s;
        }
        
        .activity-item:hover {
          background-color: rgba(0,0,0,0.03);
        }
        
        @media (max-width: 767.98px) {
          .main-content {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SuperadminDashboard;
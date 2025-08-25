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

  // ✅ Summary cards
  const summaryData = summary && Object.keys(summary).length
    ? [
        { label: "Colleges Onboarded", value: summary.totalCollegesOnboarded, icon: <FaUniversity />, color: "primary" },
        { label: "Registration Requests", value: summary.totalRegistrationRequests, icon: <FaClipboardList />, color: "warning" },
        { label: "Engineering Colleges", value: summary.engineeringCollegesCount, icon: <FaBuilding />, color: "info" },
        { label: "Arts Colleges", value: summary.artsCollegesCount, icon: <FaUserTie />, color: "success" }
      ]
    : [
        { label: "Colleges Onboarded", value: 0, icon: <FaUniversity />, color: "primary" },
        { label: "Registration Requests", value: 0, icon: <FaClipboardList />, color: "warning" },
        { label: "Engineering Colleges", value: 0, icon: <FaBuilding />, color: "info" },
        { label: "Arts Colleges", value: 0, icon: <FaUserTie />, color: "success" }
      ];

  const recentActivity = activity?.length
    ? activity
    : [
        { type: "approve", message: "Approved request for Liberal Arts College", date: "2023-08-09" },
        { type: "reject", message: "Rejected request for Metropolitan University", date: "2023-08-05" },
        { type: "add", message: "New college registration request received", date: "2023-08-03" }
      ];

  const getStatusBadge = (status) => {
    let bgColor = "#FFF3CD";
    let textColor = "#856404";

    if (status.toUpperCase() === "APPROVED") {
      bgColor = "#D4EDDA"; textColor = "#155724";
    } else if (status.toUpperCase() === "REJECTED") {
      bgColor = "#F8D7DA"; textColor = "#721C24";
    }

    return (
      <span style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "4px 10px",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "500"
      }}>
        {status}
      </span>
    );
  };

  const handleStatusChange = (college) => {
    let newStatus = "Rejected";
    if (college.status === "Rejected") newStatus = "Approved";
    else if (college.status === "Approved") newStatus = "Rejected";
    else if (college.status === "Pending") newStatus = "Approved";

    dispatch(updateCollegeStatusRequest({ id: college.id, status: newStatus }));
  };

  return (
    <div className="superadmin-dashboard" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Sidebar toggle */}
      <button className="btn btn-primary d-md-none m-2 position-fixed" style={{ zIndex: 1060 }} onClick={() => setSidebarOpen(true)}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar vh-100 p-3 position-fixed top-0 start-0 shadow ${sidebarOpen ? "sidebar-open" : "d-none"} d-md-block`}
        style={{ width: "250px", zIndex: 1050, background: "linear-gradient(180deg,#f5f5f5 0%,#9e9e9e 100%)" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4 d-md-none">
          <h4 className="fw-bold text-dark mb-0">Prep AI</h4>
          <button className="btn btn-sm" onClick={() => setSidebarOpen(false)}>
            <FaTimesCircle />
          </button>
        </div>

        <h4 className="mb-4 fw-bold text-dark text-center"><FaChartLine className="me-2" /> Prep AI</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className={`nav-link ${activeTab === "dashboard" ? "active bg-light text-dark rounded" : "text-dark"}`} onClick={() => setActiveTab("dashboard")}>
              <FaHome className="me-2" /> Dashboard
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className={`nav-link ${activeTab === "colleges" ? "active bg-light text-dark rounded" : "text-dark"}`} onClick={() => setActiveTab("colleges")}>
              <FaBuilding className="me-2" /> Colleges
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className={`nav-link ${activeTab === "logs" ? "active bg-light text-dark rounded" : "text-dark"}`} onClick={() => setActiveTab("logs")}>
              <FaFileAlt className="me-2" /> Logs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className={`nav-link ${activeTab === "settings" ? "active bg-light text-dark rounded" : "text-dark"}`} onClick={() => setActiveTab("settings")}>
              <FaCog className="me-2" /> Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="overlay position-fixed top-0 start-0 w-100 h-100 d-md-none" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1040 }} onClick={() => setSidebarOpen(false)} />}

      {/* Main content */}
      <div className="main-content" style={{ marginLeft: "250px", padding: "20px" }}>
        <div className="content-container bg-white p-4 rounded shadow-sm">
          <h2 className="mb-4">Dashboard</h2>

          {/* Summary Section */}
          <section className="mb-5">
            <h4 className="mb-3 border-bottom pb-2">Summary</h4>
            {loading && <div className="alert alert-info">Loading...</div>}
            {error && <div className="alert alert-danger">{error}</div>}
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
          </section>

          {/* Recent Activity */}
          <section>
            <h4 className="mb-3 border-bottom pb-2">Recent Activity</h4>
            <ul className="list-unstyled">
              {recentActivity.map((act, idx) => (
                <li key={idx} className="activity-item mb-3 p-2 border rounded bg-light">
                  {act.type === "approve" ? <FaCheck className="text-success me-2" /> : act.type === "reject" ? <FaTimes className="text-danger me-2" /> : <FaPlus className="text-info me-2" />}
                  <span>{act.message}</span>
                  <small className="d-block text-muted">{act.date}</small>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SuperadminDashboard;

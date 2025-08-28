import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaCheck, FaTimes, FaPlus, FaHome, FaBuilding, FaFileAlt, FaCog, FaBars, FaTimesCircle } from "react-icons/fa";
import { fetchCollegesRequest, fetchSuperadminSummaryRequest, updateCollegeStatusRequest } from "../Redux-saga/Actions/SuperadminAction";

const SuperadminDashboard = () => {
    const dispatch = useDispatch();
    const { loading, summary, colleges, activity, error } = useSelector(
        (state) => state.superadmin
    );
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchSuperadminSummaryRequest());
        dispatch(fetchCollegesRequest());
    }, [dispatch]);

    const summaryData = summary && Object.keys(summary).length
        ? Object.keys(summary).map((key) => ({
            label: key,
            value: summary[key],
        }))
        : [
            { label: "totalCollegesOnboarded", value: 0 },
            { label: "totalRegistrationRequests", value: 0 },
            { label: "engineeringCollegesCount", value: 0 },
            { label: "artsCollegesCount", value: 0 },
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
                style={{ backgroundColor: bgColor, color: textColor, padding: "4px 10px", borderRadius: "4px", fontSize: "14px", display: "inline-block", fontWeight: "500" }}>{status}</span>
        );
    };

    const handleStatusChange = (collegeId, status) => {
        dispatch(updateCollegeStatusRequest({ id: collegeId, status }));
    };

    return (
        <div className="superadmin-dashboard">
            <button
                className="btn btn-primary d-md-none m-2 position-fixed"
                style={{ zIndex: 1060 }}
                onClick={() => setSidebarOpen(true)}
            >
                <FaBars />
            </button>

            <div
                className={`sidebar bg-white vh-100 p-3 position-fixed top-0 start-0 shadow ${sidebarOpen ? "sidebar-open" : "d-none"} d-md-block`}
                style={{ width: "220px", zIndex: 1050 }}
            >
                <div className="d-flex justify-content-between align-items-center mb-3 d-md-none">
                    <h4 className="fw-bold text-dark mb-0">Prep AI</h4>
                    <button className="btn btn-sm" onClick={() => setSidebarOpen(false)}>
                        <FaTimesCircle />
                    </button>
                </div>

                <h4 className="mb-4 fw-bold text-dark d-none d-md-block">Prep AI</h4>

                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link active fw-bold text-dark"><FaHome className="me-2" /> Dashboard</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-dark"><FaBuilding className="me-2" /> Colleges</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-dark"><FaFileAlt className="me-2" /> Logs</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link text-dark"><FaCog className="me-2" /> Settings</a>
                    </li>
                </ul>
            </div>

            {sidebarOpen && <div className="overlay position-fixed top-0 start-0 w-100 h-100 d-md-none"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1040 }}
                onClick={() => setSidebarOpen(false)}
            />}

            <div className="main-content" style={{ marginLeft: "220px" }}>
                <div className="content-container bg-white p-3 p-md-4 rounded">
                    <h2 className="mb-4">Dashboard</h2>

                    <section className="mb-4">
                        <h5 className="mb-3">Summary</h5>
                        {loading && <div className="alert alert-info">Loading...</div>}
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="row g-3 mb-2">
                            {summaryData.map((item, idx) => (
                                <div key={idx} className="col-12 col-sm-6 col-md-3 d-flex">
                                    <div className="card text-center border-0 bg-light flex-fill summary-card">
                                        <div className="card-body d-flex flex-column justify-content-center">
                                            <p className="mb-0 summary-label">{item.label}</p>
                                            <h4 className="fw-bold summary-value">{item.value}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="fw-bold mt-2">Total Count: {totalCount}</p>
                    </section>

                    <section className="mb-4">
                        <h5 className="mb-3">Requested Colleges</h5>
                        <div className="table-responsive">
                            <table className="table table-hover mb-0 align-middle">
                                <thead className="table-light">
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
                                            <td>{college.collegeName}</td>
                                            <td>{college.type}</td>
                                            <td>{college.universityType}</td>
                                            <td>{college.counselingCode}</td>
                                            <td>{college.dateRequested}</td>
                                            <td>{getStatusBadge(college.status)}</td>
                                            <td className="actions-cell">
                                                {college.status.toLowerCase() === "pending" ? (
                                                    <>
                                                        <button
                                                            className="btn btn-sm btn-success me-1"
                                                            onClick={() => handleStatusChange(college.id, "APPROVED")}
                                                        >
                                                            Approve
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-danger me-1"
                                                            onClick={() => handleStatusChange(college.id, "REJECTED")}
                                                        >
                                                            Reject
                                                        </button>
                                                        <button className="btn btn-sm btn-primary">View</button>
                                                    </>
                                                ) : (
                                                    <button className="btn btn-sm btn-primary">View</button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h5 className="mb-3">Recent Activity Log</h5>
                        <ul className="list-unstyled activity-log">
                            {recentActivity.map((act, idx) => (
                                <li key={idx} className="activity-item mb-3">
                                    <div className="d-flex align-items-start">
                                        <div className="me-2 mt-1">
                                            {act.type === "approve" ? (
                                                <FaCheck style={{ color: "#28A745", marginRight: "8px" }} />
                                            ) : act.type === "reject" ? (
                                                <FaTimes style={{ color: "#DC3545", marginRight: "8px" }} />
                                            ) : (
                                                <FaPlus style={{ color: "#007BFF", marginRight: "8px" }} /> // Default Blue Plus
                                            )}
                                        </div>
                                        <div>
                                            <div className="activity-message">{act.message}</div>
                                            <small className="text-muted activity-date">{act.date}</small>
                                        </div>
                                    </div>


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
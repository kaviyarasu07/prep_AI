import React, { useState, useEffect } from "react";
import profile from "../assets/img/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { getMentorRequest, studentsWithoutMentorRequest } from "../Redux-Saga/Actions/MentordashboardAction";

export default function MentorDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const dispatch = useDispatch();
  const { mentors, studentsWithoutMentor, loading, error } = useSelector((state) => state.mentordashboard);

  useEffect(() => {
    dispatch(getMentorRequest());
     dispatch(studentsWithoutMentorRequest());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-4 position-relative">
        <span className="navbar-brand fw-bold" style={{ fontSize: isMobile ? "0.95rem" : "1.25rem" }}>
          <i className="fa-solid fa-graduation-cap me-2"></i>
          Acme University Admin
        </span>

        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-3">Dashboard</li>
            <li className="nav-item px-3">Mentors</li>
            <li className="nav-item px-3">Students</li>
            <li className="nav-item px-3">Courses</li>
            <li className="nav-item px-3">Settings</li>
          </ul>
        </div>

        <div className={`position-${isMobile ? "absolute top-0 end-0 m-2" : "relative ms-auto"}`}>
          <img src={profile} alt="profile" className="rounded-circle" width={isMobile ? "30" : "45"} height={isMobile ? "30" : "45"} style={{ cursor: isMobile ? "pointer" : "default" }} onClick={() => isMobile && setMenuOpen(!menuOpen)} />

          {isMobile && menuOpen && (
            <div className="position-absolute bg-white shadow rounded py-2 mt-2" style={{ right: 0, zIndex: 1000, minWidth: "180px" }}>
              <ul className="list-unstyled mb-0">
                <li className="px-3 py-2 border-bottom">Dashboard</li>
                <li className="px-3 py-2 border-bottom">Mentors</li>
                <li className="px-3 py-2 border-bottom">Students</li>
                <li className="px-3 py-2 border-bottom">Courses</li>
                <li className="px-3 py-2">Settings</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="container py-4">
        <h3 className="fw-bold mt-3">Mentors Overview</h3>
        <p className="text-primary mt-3">Manage and monitor mentor performance within the Computer Science and Engineering department.</p>

        <div className="mb-4 mt-5">
          <h6 className="fw-bold">Department Information</h6>
          <hr className="mt-4 mb-3" />

          <div className="row mt-3">
            <div className="col-md-3 text-primary">College Name</div>
            <div className="col-md-9"></div>
            <div className="col-12"><hr className="mt-3 mb-3" /></div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3 text-primary">Department</div>
            <div className="col-md-9"></div>
            <div className="col-12"><hr className="mt-3 mb-3" /></div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3 text-primary">Department Admin</div>
            <div className="col-md-9"></div>
          </div>
        </div>

        <h6 className="fw-bold mb-4">Mentor Summary</h6>
        <div className="row mb-4">
          <div className="col-6 col-md-3 mb-3">
            <div className="card p-3 shadow-sm">
              <h6>Total Mentors</h6>
              <h4 className="fw-bold">{mentors?.["Total Mentors"] || 0}</h4>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="card p-3 shadow-sm">
              <h6>Students Without Mentor</h6>
              <h4 className="fw-bold">{studentsWithoutMentor?.count || 0}</h4>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="card p-3 shadow-sm">
              <h6>Avg. Students per Mentor</h6>
              <h4 className="fw-bold">--</h4>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="card p-3 shadow-sm">
              <h6>Top Performing Mentor</h6>
              <h5 className="fw-bold">--</h5>
            </div>
          </div>
        </div>

        <h6 className="fw-bold mt-5">Mentor Details</h6>
        <div className="mb-3 mt-4 position-relative">
          <input type="text" className="form-control ps-5" placeholder="Search by name or email" style={{ backgroundColor: "rgb(237 239 244)" }} />
          <i
            className="fa-solid fa-magnifying-glass position-absolute"
            style={{ top: "50%", left: "15px", transform: "translateY(-50%)", color: "#6c757d" }}></i>
        </div>

        <div className="table-responsive">
          <table className="table text-center align-middle mt-4" style={{ border: "1px solid #dee2e6", fontSize: isMobile ? "0.75rem" : "1rem" }}>
            <thead className="table-light">
              <tr>
                <th>Mentor Name</th>
                <th>Email</th>
                <th>Total Students</th>
                <th>Avg CGPA of Students</th>
                <th>Assessments Monitored</th>
                <th>Mock Interviews Conducted</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="6">Loading...</td></tr>
              ) : error ? (
                <tr>
                  <td colSpan="6" className="text-danger">{error}</td>
                </tr>
              ) : mentors?.mentors?.length > 0 ? (
                mentors.mentors.map((m) => (
                  <tr key={m.id}>
                    <td>{m.name}</td>
                    <td>{m.email}</td>
                    <td>{m.total_no_Students}</td>
                    <td>{m.avg_cpa_of_students}</td>
                    <td>{m.assessment_mentioned}</td>
                    <td>{m.mock_interview_Conducted}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No mentors found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

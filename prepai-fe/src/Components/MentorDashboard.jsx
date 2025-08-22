import React, { useState, useEffect } from "react";
import profile from "../assets/img/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { averageStudentsRequest, departmentInformationRequest, getMentorRequest, studentsWithoutMentorRequest, topPerformingRequest, searchMentorRequest } from "../Redux-Saga/Actions/MentordashboardAction";

export default function MentorDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const { mentors, studentsWithoutMentor, averageStudents, topPerforming, departmentInfo, searchmentor, loading, error } = useSelector((state) => state.mentordashboard);

  useEffect(() => {
    dispatch(getMentorRequest());
    dispatch(studentsWithoutMentorRequest());
    dispatch(averageStudentsRequest());
    dispatch(topPerformingRequest());
    const deptId = 2;
    dispatch(departmentInformationRequest(deptId));
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

  const handleSearch = () => {
    if (!searchText.trim()) return;
    if (searchText.includes("@")) {
      dispatch(searchMentorRequest({ name: "", email: searchText }));
    } else {
      dispatch(searchMentorRequest({ name: searchText, email: "" }));
    }
  };

  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg shadow-sm px-4" style={{ background: "linear-gradient(90deg, #3b82f6, #2563eb)" }}>
        <span className="navbar-brand fw-bold text-white" style={{ fontSize: isMobile ? "1rem" : "1.3rem" }}>
          <i className="fa-solid fa-graduation-cap me-2"></i>
          Madras Christian Admin
        </span>

        <div className="collapse navbar-collapse d-none d-lg-flex">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-3 text-white fw-semibold">Dashboard</li>
            <li className="nav-item px-3 text-white fw-semibold">Mentors</li>
            <li className="nav-item px-3 text-white fw-semibold">Students</li>
            <li className="nav-item px-3 text-white fw-semibold">Courses</li>
            <li className="nav-item px-3 text-white fw-semibold">Settings</li>
          </ul>
        </div>

        <div className={`position-${ isMobile ? "absolute top-0 end-0 m-2" : "relative ms-auto" }`}>
          <img src={profile} alt="profile" className="rounded-circle border border-white shadow" width={isMobile ? "32" : "45"} height={isMobile ? "32" : "45"} style={{ cursor: isMobile ? "pointer" : "default" }} onClick={() => isMobile && setMenuOpen(!menuOpen)} />

          {isMobile && menuOpen && (
            <div
              className="position-absolute bg-white shadow rounded py-2 mt-2"
              style={{ right: 0, zIndex: 1000, minWidth: "180px" }}
            >
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

      <div className="container py-5">
        <h3 className="fw-bold">Mentors Overview</h3>
        <p className="text-muted">
          Manage and monitor mentor performance within the Computer Science and
          Engineering department.
        </p>

        <div className="card border-0 shadow-sm rounded-3 p-4 mb-5">
          <h6 className="fw-bold text-primary">Department Information</h6>
          <hr />
          <div className="row mt-3">
            <div className="col-md-3 text-secondary">College Name</div>
            <div className="col-md-9 fw-semibold">
              {departmentInfo?.collegeName}
            </div>
            <div className="col-12">
              <hr />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-3 text-secondary">Department</div>
            <div className="col-md-9 fw-semibold">
              {departmentInfo?.departmentName}
            </div>
            <div className="col-12">
              <hr />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-3 text-secondary">Department Admin</div>
            <div className="col-md-9 fw-semibold">
              {departmentInfo?.departmentAdmin}
            </div>
          </div>
        </div>

        <h6 className="fw-bold mb-3">Mentor Summary</h6>
        <div className="row mb-4">
          {[
            {
              label: "Total Mentors",
              value: mentors?.["Total Mentors"] || 0,
              color: "primary",
            },
            {
              label: "Students Without Mentor",
              value: studentsWithoutMentor?.count || 0,
              color: "danger",
            },
            {
              label: "Avg. Students per Mentor",
              value: averageStudents?.["Average Students Per Mentor"] || 0,
              color: "success",
            },
            {
              label: "Top Performing Mentor",
              value: topPerforming?.["Top performing mentor "] || "--",
              color: "warning",
            },
          ].map((item, i) => (
            <div key={i} className="col-6 col-md-3 mb-3 d-flex">
              <div
                className={`card shadow-sm border-0 w-100 h-100 text-${item.color}`}
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body text-center">
                  <h6 className="mb-2">{item.label}</h6>
                  <h4 className="fw-bold">{item.value}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h6 className="fw-bold mt-5">Mentor Details</h6>
        <div className="mb-3 mt-3 position-relative">
          <input
            type="text"
            className="form-control ps-5 rounded-pill"
            placeholder="Search by name or email"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            style={{ backgroundColor: "#f1f5f9" }}
          />
          <i
            className="fa-solid fa-magnifying-glass position-absolute"
            style={{
              top: "50%",
              left: "18px",
              transform: "translateY(-50%)",
              color: "#6c757d",
              cursor: "pointer",
            }}
            onClick={handleSearch}
          ></i>
        </div>

        <div className="table-responsive">
          <table
            className="table align-middle text-center shadow-sm mt-4"
            style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}
          >
            <thead
              className="table-primary"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
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
                <tr>
                  <td colSpan="6" className="text-muted">
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="6" className="text-danger">
                    {error}
                  </td>
                </tr>
              ) : searchmentor?.id ? (
                <tr>
                  <td>{searchmentor.name}</td>
                  <td>{searchmentor.email}</td>
                  <td>{searchmentor.total_no_Students}</td>
                  <td>{searchmentor.avg_cpa_of_students}</td>
                  <td>{searchmentor.assessment_mentioned}</td>
                  <td>{searchmentor.mock_interview_Conducted}</td>
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
                  <td colSpan="6" className="text-muted">
                    No mentors found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

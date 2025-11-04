import React from "react";
import Navbar from "../../Layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Assessments() {
  return (
    <>
      <Navbar />
      <div className="container py-4" style={{ maxWidth: "1200px" }}>
        {/* ===== Heading Section ===== */}
        <div className="mb-4 border-bottom pb-2">
          <h4 className="fw-bold mb-1">Department Assessments</h4>
          <p className="text-secondary mb-0">
            Computer Science and Engineering | Admin:{" "}
            <span className="fw-semibold text-dark">Dr. Eleanor Vance</span>
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
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }}
      >
        <div className="card-body py-4">
          <h6 className="text-secondary mb-2 fw-semibold">
            {item.title}
          </h6>
          <h4 className="fw-bold text-primary mb-0">{item.value}</h4>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* ===== Upcoming Assessments ===== */}
       <div className="mb-5">
  <h5 className="fw-bold text-dark mb-3">Upcoming Assessments</h5>
  <div className="table-responsive">
    <table
      className="table align-middle table-bordered"
      style={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <thead className="table-light">
        <tr className="text-primary text-uppercase small fw-semibold">
          <th>Topic</th>
          <th>Type</th>
          <th>Scheduled On</th>
          <th>Created By</th>
          <th>Difficulty</th>
          <th>Students Assigned</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            topic: "Data Structures",
            type: "MCQ",
            date: "2024-08-15",
            created: "Dr. Eleanor Vance",
            diff: "Medium",
            students: 150,
          },
          {
            topic: "Algorithms",
            type: "Written",
            date: "2024-08-22",
            created: "Dr. Eleanor Vance",
            diff: "Hard",
            students: 120,
          },
          {
            topic: "Operating Systems",
            type: "MCQ",
            date: "2024-09-05",
            created: "Dr. Eleanor Vance",
            diff: "Medium",
            students: 180,
          },
          {
            topic: "Database Management",
            type: "Written",
            date: "2024-09-12",
            created: "Dr. Eleanor Vance",
            diff: "Easy",
            students: 160,
          },
          {
            topic: "Computer Networks",
            type: "MCQ",
            date: "2024-09-19",
            created: "Dr. Eleanor Vance",
            diff: "Medium",
            students: 140,
          },
        ].map((a, i) => (
          <tr
            key={i}
            style={{
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#f8f9fa")
            }
            onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
          >
            <td className="fw-semibold text-dark">{a.topic}</td>
            <td className="fw-semibold " style={{color: "#5a7fa3"}} >{a.type}</td>
            <td className="fw-semibold " style={{color: "#5a7fa3"}}>{a.date}</td>
            <td className="fw-semibold " style={{color: "#5a7fa3"}}>{a.created}</td>
            <td>
              <span
                className="px-3 py-1 rounded-pill fw-semibold"
                style={{
                  backgroundColor: "#e9f5ff",
                  color: "#0077b6",
                }}
              >
                {a.diff}
              </span>
            </td>
            <td className="fw-semibold " style={{color: "#5a7fa3"}}>{a.students}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


        {/* ===== Past Assessments ===== */}
      <div>
  <h5 className="fw-bold text-dark mb-3">Past Assessments</h5>
  <div className="table-responsive">
    <table
      className="table align-middle table-bordered"
      style={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <thead className="table-light">
        <tr className="text-primary text-uppercase small fw-semibold">
          <th>Topic</th>
          <th>Type</th>
          <th>Date Conducted</th>
          <th>Avg Score</th>
          <th>Top Scorer</th>
          <th>No. of Students</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            topic: "Introduction to Programming",
            type: "MCQ",
            date: "2024-07-01",
            score: "85%",
            top: "Ethan Carter",
            students: 200,
          },
          {
            topic: "Object-Oriented Programming",
            type: "Written",
            date: "2024-07-08",
            score: "78%",
            top: "Olivia Bennett",
            students: 180,
          },
          {
            topic: "Data Structures",
            type: "MCQ",
            date: "2024-07-15",
            score: "72%",
            top: "Noah Thompson",
            students: 150,
          },
          {
            topic: "Algorithms",
            type: "Written",
            date: "2024-07-22",
            score: "65%",
            top: "Ava Harper",
            students: 120,
          },
          {
            topic: "Operating Systems",
            type: "MCQ",
            date: "2024-08-01",
            score: "80%",
            top: "Liam Foster",
            students: 180,
          },
        ].map((p, i) => (
          <tr
            key={i}
            style={{
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#f8f9fa")
            }
            onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
          >
            <td className="fw-semibold " >{p.topic}</td>
            <td className="fw-semibold " style={{color: "#5a7fa3"}}>{p.type}</td>
            <td className="fw-semibold " style={{color: "#5a7fa3"}}> {p.date}</td>
            <td>
              <span
                className="px-3 py-1 rounded-pill fw-semibold"
                style={{
                  backgroundColor: "#e9f5ff",
                  color: "#0077b6",
                }}
              >
                {p.score}
              </span>
            </td>
            <td className="fw-semibold " style={{color: "#5a7fa3"}}>  {p.top}</td>
            <td className="fw-semibold " style={{color: "#5a7fa3"}}>{p.students}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      </div>
    </>
  );
}

export default Assessments;

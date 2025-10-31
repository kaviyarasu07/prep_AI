// // import React from 'react'

// // function MockInterviews() {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default MockInterviews

// // import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { FaPlayCircle, FaCalendarAlt, FaClock } from 'react-icons/fa';
// // import Navbar from '../../Layout/Navbar';

// // function MockInterviews() {
  

// //   return (
// //     <>
// //       <Navbar />
      
// //     </>
// //   );
// // }

// // export default MockInterviews;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaClock, FaCalendarAlt, FaPlay } from 'react-icons/fa';
// import Navbar from '../../Layout/Navbar';

// const mockInterviewsData = [
//   { id: 1, title: "College Name", duration: "30 mins", date: "2025-10-01" },
//   { id: 2, title: "Backend Developer Interview", duration: "45 mins", date: "2025-10-03" },
//   { id: 3, title: "Fullstack Developer Interview", duration: "60 mins", date: "2025-10-05" },
//   { id: 4, title: "Frontend Developer Interview", duration: "40 mins", date: "2025-10-07" },
// ];

// function MockInterviews() {
//   return (
//     <>
//       <Navbar />
//       <div className="py-5 bg-gradient" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #6a11cb, #2575fc)' }}>
//         <h2 className="text-center fw-bold text-white mb-2">Mock Interviews</h2>
//         <p className="text-center text-light mb-5">
//           Choose an interview & boost your confidence!
//         </p>

//         <div className="container">
//           <div className="row">
//             {mockInterviewsData.map((item) => (
//               <div key={item.id} className="col-12 col-md-4 mb-4 d-flex">
//                 <div 
//                   className="card text-white bg-transparent border-light shadow-lg rounded-4 w-100 p-3"
//                   style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
//                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)' }}
//                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)' }}
//                 >
//                   <div className="card-body d-flex flex-column justify-content-between">
//                     <h5 className="fw-bold text-warning">{item.title}</h5>
//                     <div className="mt-3">
//                       <p className="mb-2"><FaClock className="me-2" /> {item.duration}</p>
//                       <p className="mb-3"><FaCalendarAlt className="me-2" /> {item.date}</p>
//                     </div>
//                     <button className="btn btn-warning fw-bold rounded-pill">
//                       <FaPlay className="me-2" /> Start Interview
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MockInterviews;




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlay, FaClock, FaCalendarAlt, FaStar, FaList } from "react-icons/fa";
import Navbar from '../../Layout/Navbar';  

const summaryCards = [
  { id: 1, title: "Total Interviews", value: 82, hint: "All time", icon: <FaList /> , accent: "linear-gradient(135deg,#8ec5fc,#e0c3fc)"},
  { id: 2, title: "Upcoming", value: 5, hint: "Next 7 days", icon: <FaCalendarAlt /> , accent: "linear-gradient(135deg,#f6d365,#fda085)"},
  { id: 3, title: "Avg Score", value: "74%", hint: "All candidates", icon: <FaStar /> , accent: "linear-gradient(135deg,#d4fc79,#96e6a1)"},
  { id: 4, title: "Interviewers", value: 12, hint: "Active", icon: <FaClock /> , accent: "linear-gradient(135deg,#a1c4fd,#c2e9fb)"},
];

const upcoming = [
  { id: 1, title: "TechCorp — Software Engineer", mode: "Speech", when: "2025-10-01 10:00 AM", interviewer: "Ethan C", duration: "60m" },
  { id: 2, title: "Innovate — Data Analyst", mode: "Text", when: "2025-10-03 02:00 PM", interviewer: "Sophia C", duration: "45m" },
  { id: 3, title: "Global — Product Manager", mode: "Speech", when: "2025-10-05 11:00 AM", interviewer: "Daniel R", duration: "75m" },
];

const past = [
  { id: 1, company: "TechCorp", role: "Software Eng", mode: "Speech", date: "2025-09-20", score: "85%", feedback: "Strong algorithms", interviewer: "Ethan C" },
  { id: 2, company: "Innovate", role: "Data Analyst", mode: "Text", date: "2025-09-18", score: "70%", feedback: "Needs practice", interviewer: "Sophia C" },
];

export default function MockInterviewsCreative() {
 
  const handleEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 18px 40px rgba(30, 30, 60, 0.12)";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "";
  };

  const startInterview = (title) => {
   
    alert(`Starting interview: ${title}`);
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mb-4 gap-3">
          <div>
            <h1 className="h3 fw-bold mb-1">Mock Interviews</h1>
            <p className="text-muted mb-0">Department: Computer Science & Engineering — Dashboard</p>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary d-flex align-items-center">
              <FaList className="me-2" /> Manage
            </button>
            <button className="btn btn-primary d-flex align-items-center">
              <FaPlay className="me-2" /> Create Interview
            </button>
          </div>
        </div>

        
        <div className="row g-3 mb-4">
          {summaryCards.map(card => (
            <div className="col-12 col-sm-6 col-md-3" key={card.id}>
              <div
                className="rounded-4 p-3 text-dark"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{
                  cursor: "pointer",
                  minHeight: 120,
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  background: card.accent,
                  color: "#0f172a",
                }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <div className="small text-uppercase fw-semibold" style={{opacity: 0.85}}>{card.title}</div>
                    <div className="h4 fw-bold mt-2">{card.value}</div>
                    <div className="small text-muted">{card.hint}</div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center rounded-circle" style={{width:54, height:54, background:'rgba(255,255,255,0.6)'}}>
                    <div style={{fontSize:20}}>{card.icon}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h5 fw-bold mb-0">Upcoming Interviews</h2>
            <div className="text-muted small">Next scheduled interviews</div>
          </div>

          <div className="p-3 rounded-4" style={{background: "#f8fbff"}}>
            <div className="table-responsive">
              <table className="table table-borderless align-middle mb-0">
                <thead>
                  <tr className="small text-uppercase text-muted">
                    <th>Interview</th>
                    <th>Mode</th>
                    <th>When</th>
                    <th>Interviewer</th>
                    <th>Duration</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {upcoming.map(item => (
                    <tr key={item.id} className="bg-white mb-2 rounded-3" style={{borderRadius:12}}>
                      <td>
                        <div className="fw-semibold">{item.title}</div>
                        <div className="small text-muted">Batch: CS-2025</div>
                      </td>
                      <td><span className="badge bg-info text-dark rounded-pill">{item.mode}</span></td>
                      <td className="text-nowrap">{item.when}</td>
                      <td>{item.interviewer}</td>
                      <td>{item.duration}</td>
                      <td className="text-end">
                        <div className="d-inline-flex gap-2">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => alert(`View details: ${item.title}`)}
                          >
                            View
                          </button>
                          <button
                            className="btn btn-sm btn-primary d-flex align-items-center"
                            onClick={() => startInterview(item.title)}
                          >
                            <FaPlay className="me-2" /> Start
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Past Interviews */}
        <div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h5 fw-bold mb-0">Past Interviews</h2>
            <div className="text-muted small">Recent history</div>
          </div>

          <div className="p-3 rounded-4" style={{background: "#fff9f8"}}>
            <div className="table-responsive">
              <table className="table table-borderless align-middle mb-0">
                <thead>
                  <tr className="small text-uppercase text-muted">
                    <th>Company</th>
                    <th>Role</th>
                    <th>Mode</th>
                    <th>Date</th>
                    <th>Score</th>
                    <th>Feedback</th>
                    <th>Interviewer</th>
                  </tr>
                </thead>
                <tbody>
                  {past.map(p => (
                    <tr key={p.id} className="bg-white mb-2 rounded-3">
                      <td className="fw-semibold">{p.company}</td>
                      <td>{p.role}</td>
                      <td><span className="badge bg-info text-dark rounded-pill">{p.mode}</span></td>
                      <td>{p.date}</td>
                      <td><span className="badge bg-warning text-dark rounded-pill">{p.score}</span></td>
                      <td className="text-truncate" style={{maxWidth:250}}>{p.feedback}</td>
                      <td>{p.interviewer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-end">
              <button className="btn btn-outline-primary btn-sm">View all history</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}


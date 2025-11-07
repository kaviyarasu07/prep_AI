import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Layout/Navbar";

export default function MockInterviewsDashboard() {
  const summaryCards = [
    { id: 1, title: "Total Mock Interviews Conducted", value: 82 },
    { id: 2, title: "Upcoming Mock Interviews", value: 5 },
    { id: 3, title: "Average Mock Score", value: "74%" },
    { id: 4, title: "Interviewers Participated", value: 12 },
  ];

  const upcoming = [
    {
      id: 1,
      company: "TechCorp Inc.",
      role: "Software Engineer",
      mode: "Speech",
      date: "2025-10-20 10:00 AM",
      interviewer: "Mr. Ethan Carter",
      students: "Liam Harper, Olivia Bennett",
      duration: "60 mins",
      status: "Scheduled",
    },
    {
      id: 2,
      company: "Innovate Solutions",
      role: "Data Analyst",
      mode: "Text",
      date: "2025-10-21 02:00 PM",
      interviewer: "Ms. Sophia Clark",
      students: "Noah Foster, Ava Turner",
      duration: "45 mins",
      status: "Scheduled",
    },
    {
      id: 3,
      company: "Global Dynamics",
      role: "Product Manager",
      mode: "Speech",
      date: "2025-10-22 11:00 AM",
      interviewer: "Dr. Daniel Reed",
      students: "Isabella Hayes, Jackson Reed",
      duration: "75 mins",
      status: "Scheduled",
    },
  ];

  const past = [
    {
      id: 1,
      company: "TechCorp Inc.",
      role: "Software Engineer",
      mode: "Speech",
      date: "2025-09-10",
      score: "85%",
      feedback:
        "Excellent technical skills, needs improvement in communication.",
      interviewer: "Mr. Ethan Carter",
    },
    {
      id: 2,
      company: "Innovate Solutions",
      role: "Data Analyst",
      mode: "Text",
      date: "2025-09-11",
      score: "70%",
      feedback: "Good analytical abilities, but lacks practical experience.",
      interviewer: "Ms. Sophia Clark",
    },
    {
      id: 3,
      company: "Global Dynamics",
      role: "Product Manager",
      mode: "Speech",
      date: "2025-09-12",
      score: "60%",
      feedback: "Needs to work on leadership and strategic thinking.",
      interviewer: "Dr. Daniel Reed",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container my-5">
        {/* ---- Page Header ---- */}
        <div className="mb-4">
          <h3 className="fw-bold text-dark">Mock Interviews Dashboard</h3>
          <p className="text-secondary mb-0">
            Computer Science and Engineering Department
          </p>
        </div>

       {/* ---- Info Cards ---- */}

       <div className="container py-4">

  {/* --- Top Info Cards --- */}
  <div className="row justify-content-center g-3 mb-4">
    {[
      { label: "College Name", value: "Acme University" },
      { label: "Department", value: "Computer Science and Engineering" },
      { label: "Department Admin", value: "Dr. Eleanor Vance" },
    ].map((info, index) => (
      <div key={index} className="col-12 col-md-4 d-flex justify-content-center">
        <div
          className="p-4 bg-white border rounded-4 text-start w-100 shadow-sm"
          style={{
            maxWidth: "360px",
            borderColor: "#e5e7eb",
            fontFamily: "system-ui"
          }}
        >
          <h6 className="text-secondary small text-uppercase mb-2 fw-semibold">
            {info.label}
          </h6>
          <h5 className="fw-bold text-dark mb-0">{info.value}</h5>
        </div>
      </div>
    ))}
  </div>

  {/* --- Summary Stats Cards --- */}
 <div className="row justify-content-center g-3">
  {[
    { id: 1, title: "Total Mock Interviews Conducted", value: "82" },
    { id: 2, title: "Upcoming Mock Interviews", value: "5" },
    { id: 3, title: "Average Mock Score", value: "74%" },
    { id: 4, title: "Interviewers Participated", value: "12" },
  ].map((card) => (
    <div key={card.id} className="col-6 col-md-3 d-flex justify-content-center">
      <div
        className="p-4 bg-light rounded-4 text-center border shadow-sm w-100 stat-card"
        style={{
          maxWidth: "260px",
          backgroundColor: "#f8fafc",
          transition: "all 0.3s ease-in-out",
          
        }}
      >
        <h6 className="text-secondary small mb-2" >{card.title}</h6>
        <h4 className="fw-bold text-dark mb-0">{card.value}</h4>
      </div>
    </div>
  ))}
</div>

<style>
{`
  .stat-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
  }
`}
</style>

</div>


{/* ---- Upcoming Interviews ---- */}
<div className="mb-5">
  <div className="bg-white border rounded-2 shadow-sm p-3">
    <div className="">
  <h5 className="fw-bold text-dark mb-3">Upcoming Mock Interviews</h5>

      <table className="table align-middle mb-0 table-bordered">
        <thead className="bg-light">
          <tr className="text-secondary fw-semibold small text-uppercase">
            <th>Company / Role</th>
            <th style={{ borderLeft: "1px solid #cbd5e1" }}>Mode</th>
            <th style={{ borderLeft: "1px solid #cbd5e1" }}>Scheduled On</th>
            <th style={{ borderLeft: "1px solid #cbd5e1" }}>Interviewer</th>
            <th style={{ borderLeft: "1px solid #cbd5e1" }}>Students</th>
            <th style={{ borderLeft: "1px solid #cbd5e1" }}>Duration</th>
            <th style={{ borderLeft: "1px solid #cbd5e1" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {upcoming.map((item) => (
            <tr
              key={item.id}
              style={{
                borderTop: "1px solid #e2e8f0",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              {/* 🏢 Company / Role in same line */}
              <td>
                <span className="fw-semibold text-dark">
                  {item.company}
                </span>{" "}
                <span className="text-muted">/ {item.role}</span>
              </td>

              <td style={{ borderLeft: "1px solid #cbd5e1" }}>
                <span className="fw-semibold" style={{ color: "#5a7fa3" }}>
                  {item.mode}
                </span>
              </td>

              <td style={{ borderLeft: "1px solid #cbd5e1" }}>
                <span className="fw-semibold" style={{ color: "#5a7fa3" }}>
                  {item.date}
                </span>
              </td>

              <td style={{ borderLeft: "1px solid #b1b6bbff" }}>
                <span className="fw-semibold" style={{ color: "#5a7fa3" }}>
                  {item.interviewer}
                </span>
              </td>

              <td style={{ borderLeft: "1px solid #cbd5e1" }}>
                <span className="fw-semibold" style={{ color: "#5a7fa3" }}>
                  {item.students}
                </span>
              </td>

              <td style={{ borderLeft: "1px solid #cbd5e1" }}>
                <span className="fw-semibold" style={{ color: "#5a7fa3" }}>
                  {item.duration}
                </span>
              </td>

              {/* 🎯 Styled Status */}
              <td style={{ borderLeft: "1px solid #cbd5e1" }}>
                <span
                  style={{
                    backgroundColor: "#dbeafe",
                    color: "#1d4ed8",
                    fontWeight: "600",
                    borderRadius: "999px",
                    padding: "6px 16px",
                    display: "inline-block",
                    fontSize: "14px",
                  }}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>



        {/* ---- Past Interviews ---- */}
      <div>
  <div className="bg-white border rounded-2  p-3" style={{boxShadow:' rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'}}>
    <div className="">
  <h5 className="fw-bold text-dark mb-3">Past Mock Interviews</h5>

      <table className="table align-middle mb-0 table-bordered">
        <thead className="bg-light">
          <tr className="text-secondary fw-semibold small text-uppercase">
            <th>Company</th>
            <th style={{ }}>Role</th>
            <th >Mode</th>
            <th >Date</th>
            <th >Score</th>
            <th >AI Feedback Summary</th>
            <th >Interviewer</th>
          </tr>
        </thead>
        <tbody>
          {past.map((p) => (
            <tr
              key={p.id}
            
            >
              <td>
               
                  {p.company}
                
              </td>

              <td >
                <span className="fw-semibold" style={{ color: "#5a7fa3" }}>
                  {p.role}
                </span>
              </td>

              <td>
                <span className="fw-semibold" style={{ color: "#5a7fa3" }}>
                  {p.mode}
                </span>
              </td>

              <td>
                <span className="fw-semibold" style={{ color: "#5a7fa3" }}>
                  {p.date}
                </span>
              </td>

              <td>
                <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                  {p.score}
                </span>
              </td>

              <td style={{ maxWidth: 350 }}>
                <span className="fw-semibold" style={{ color: "#5a7fa3" }}>
                  {p.feedback}
                </span>
              </td>

              <td style={{  color: "#5a7fa3" }}>
                {p.interviewer}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

      </div>
    </>
  );
}


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../Layout/Navbar";

// export default function MockInterviewsDashboard() {
//   const summaryCards = [
//     { id: 1, title: "Total Mock Interviews Conducted", value: 82 },
//     { id: 2, title: "Upcoming Mock Interviews", value: 5 },
//     { id: 3, title: "Average Mock Score", value: "74%" },
//     { id: 4, title: "Interviewers Participated", value: 12 },
//   ];

//   const upcoming = [
//     {
//       id: 1,
//       company: "TechCorp Inc.",
//       role: "Software Engineer",
//       mode: "Speech",
//       date: "2025-10-20 10:00 AM",
//       interviewer: "Mr. Ethan Carter",
//       students: "Liam Harper, Olivia Bennett",
//       duration: "60 mins",
//       status: "Scheduled",
//     },
//     {
//       id: 2,
//       company: "Innovate Solutions",
//       role: "Data Analyst",
//       mode: "Text",
//       date: "2025-10-21 02:00 PM",
//       interviewer: "Ms. Sophia Clark",
//       students: "Noah Foster, Ava Turner",
//       duration: "45 mins",
//       status: "Scheduled",
//     },
//     {
//       id: 3,
//       company: "Global Dynamics",
//       role: "Product Manager",
//       mode: "Speech",
//       date: "2025-10-22 11:00 AM",
//       interviewer: "Dr. Daniel Reed",
//       students: "Isabella Hayes, Jackson Reed",
//       duration: "75 mins",
//       status: "Scheduled",
//     },
//   ];

//   const past = [
//     {
//       id: 1,
//       company: "TechCorp Inc.",
//       role: "Software Engineer",
//       mode: "Speech",
//       date: "2025-09-10",
//       score: "85%",
//       feedback:
//         "Excellent technical skills, needs improvement in communication.",
//       interviewer: "Mr. Ethan Carter",
//     },
//     {
//       id: 2,
//       company: "Innovate Solutions",
//       role: "Data Analyst",
//       mode: "Text",
//       date: "2025-09-11",
//       score: "70%",
//       feedback: "Good analytical abilities, but lacks practical experience.",
//       interviewer: "Ms. Sophia Clark",
//     },
//     {
//       id: 3,
//       company: "Global Dynamics",
//       role: "Product Manager",
//       mode: "Speech",
//       date: "2025-09-12",
//       score: "60%",
//       feedback: "Needs to work on leadership and strategic thinking.",
//       interviewer: "Dr. Daniel Reed",
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="container my-5"
//       >
        
//         {/* ---- Page Header ---- */}
//         <div
//           className="card border-0 rounded-4 mb-4 p-4"
//           style={{

//           }}
//         >
//           <h3 className="fw-bold text-dark mb-1">Mock Interviews Dashboard</h3>
//           <p className="text-secondary mb-0">
//             Computer Science and Engineering Department
//           </p>
//         </div>

//         {/* ---- Info Cards ---- */}
//         <div
//           className="card border-1 rounded-4 mb-4 p-4"
//           style={{
//             boxShadow:
//               "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
//           }}
//         >
//            <div
//           className="card border-0 rounded-4 mb-4 p-4"
//           style={{
//            boxshadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px ",
             
//           }}
//         >
//           <div className="row justify-content-center g-3 mb-4">
//             {[
//               { label: "College Name", value: "Acme University" },
//               { label: "Department", value: "Computer Science and Engineering" },
//               { label: "Department Admin", value: "Dr. Eleanor Vance" },
//             ].map((info, index) => (
//               <div
//                 key={index}
//                 className="col-12 col-md-4 d-flex justify-content-center"
//               >
//                 <div
//                   className="p-4 bg-white border rounded-4 text-start w-100"
//                   style={{
//                     maxWidth: "360px",
//                     borderColor: "#e5e7eb",
//                     fontFamily: "system-ui",
//                     boxShadow:
//                       "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
//                   }}
//                 >
//                   <h6 className="text-secondary small text-uppercase mb-2 fw-semibold">
//                     {info.label}
//                   </h6>
//                   <h5 className="fw-bold text-dark mb-0">{info.value}</h5>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* --- Summary Stats Cards --- */}
//           <div className="row justify-content-center g-3">
//             {summaryCards.map((card) => (
//               <div
//                 key={card.id}
//                 className="col-6 col-md-3 d-flex justify-content-center"
//               >
//                 <div
//                   className="p-4 rounded-4 text-center w-100 stat-card"
//                   style={{
//                     maxWidth: "260px",
//                     backgroundColor: "#f8fafc",
//                     transition: "all 0.3s ease-in-out",
//                     boxShadow:
//                       "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
//                   }}
//                 >
//                   <h6 className="text-secondary small mb-2">{card.title}</h6>
//                   <h4 className="fw-bold text-dark mb-0">{card.value}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <style>
//             {`
//               .stat-card:hover {
//                 transform: translateY(-5px);
//                 box-shadow: rgba(9, 30, 66, 0.35) 0px 6px 12px -2px,
//                             rgba(9, 30, 66, 0.1) 0px 0px 0px 2px;
//                 background-color: #ffffff;
//               }
//             `}
//           </style>
//         </div>

//         {/* ---- Upcoming Interviews ---- */}
//         <div
//           className="card border-0 rounded-4 mb-4 p-4"
//           style={{
//             boxShadow:
//               "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
//           }}
//         >
//           <h5 className="fw-bold text-dark mb-3">Upcoming Mock Interviews</h5>
//           <table className="table align-middle mb-0 table-bordered">
//             <thead className="bg-light">
//               <tr className="text-secondary fw-semibold small text-uppercase">
//                 <th>Company / Role</th>
//                 <th>Mode</th>
//                 <th>Scheduled On</th>
//                 <th>Interviewer</th>
//                 <th>Students</th>
//                 <th>Duration</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {upcoming.map((item) => (
//                 <tr key={item.id}>
//                   <td>
//                     <span className="fw-semibold text-dark">{item.company}</span>{" "}
//                     <span className="text-muted">/ {item.role}</span>
//                   </td>
//                   <td className="text-primary fw-semibold">{item.mode}</td>
//                   <td className="text-primary fw-semibold">{item.date}</td>
//                   <td className="text-primary fw-semibold">
//                     {item.interviewer}
//                   </td>
//                   <td className="text-primary fw-semibold">{item.students}</td>
//                   <td className="text-primary fw-semibold">{item.duration}</td>
//                   <td>
//                     <span
//                       style={{
//                         backgroundColor: "#dbeafe",
//                         color: "#1d4ed8",
//                         fontWeight: "600",
//                         borderRadius: "999px",
//                         padding: "6px 16px",
//                         display: "inline-block",
//                         fontSize: "14px",
//                       }}
//                     >
//                       {item.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        

//         {/* ---- Past Interviews ---- */}
//         <div
//           className="card border-0 rounded-4 p-4"
//           style={{
//             boxShadow:
//               "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
//           }}
//         >
//           <h5 className="fw-bold text-dark mb-3">Past Mock Interviews</h5>
//           <table className="table align-middle mb-0 table-bordered">
//             <thead className="bg-light">
//               <tr className="text-secondary fw-semibold small text-uppercase">
//                 <th>Company</th>
//                 <th>Role</th>
//                 <th>Mode</th>
//                 <th>Date</th>
//                 <th>Score</th>
//                 <th>AI Feedback Summary</th>
//                 <th>Interviewer</th>
//               </tr>
//             </thead>
//             <tbody>
//               {past.map((p) => (
//                 <tr key={p.id}>
//                   <td>{p.company}</td>
//                   <td className="text-primary fw-semibold">{p.role}</td>
//                   <td className="text-primary fw-semibold">{p.mode}</td>
//                   <td className="text-primary fw-semibold">{p.date}</td>
//                   <td>
//                     <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
//                       {p.score}
//                     </span>
//                   </td>
//                   <td style={{ maxWidth: 350 }}>
//                     <span className="text-primary fw-semibold">
//                       {p.feedback}
//                     </span>
//                   </td>
//                   <td className="text-primary">{p.interviewer}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }


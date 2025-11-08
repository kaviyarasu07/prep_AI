// // import React from "react";


// // function Navbar() {
// //   return (
// //     <nav
// //       className="navbar navbar-expand-lg navbar-dark"
// //       style={{
// //         background: "linear-gradient(90deg, #0d6efd 0%, #004080 100%)",
// //         boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// //       }}
// //     >
// //       <div className="container-fluid px-4">
// //         {/* Logo / Title */}
// //         <a className="navbar-brand fw-bold fs-4" href="#">
// //        Department Dashboard
// //         </a>

// //         {/* Toggle button (for mobile) */}
// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarNav"
// //           aria-controls="navbarNav"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         {/* Navbar Links */}
// //         <div className="collapse navbar-collapse" id="navbarNav">
// //           <ul className="navbar-nav ms-auto align-items-center">
// //             <li className="nav-item">
// //               <a className="nav-link active" href="#">
// //               Dashboard
// //               </a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">
// //  Students
// //               </a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">
// //                  Mentors
// //               </a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">
// //               Course
// //               </a>
// //             </li>
// //               <li className="nav-item">
// //               <a className="nav-link" href="#">
// //  Departement
// //               </a>
// //             </li>

// //             {/* Profile Dropdown */}
// //             <li className="nav-item dropdown ms-3">
// //               <a
// //                 className="nav-link dropdown-toggle d-flex align-items-center"
// //                 href="#"
// //                 id="navbarDropdown"
// //                 role="button"
// //                 data-bs-toggle="dropdown"
// //                 aria-expanded="false"
// //               >
             
// //                 <span className="fw-semibold">Profile</span>
// //               </a>
             
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function Navbar() {
//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-dark py-3"
//       style={{
//         background: "linear-gradient(90deg, #0d6efd 0%, #004080 100%)",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//       }}
//     >
//       <div className="container-fluid px-4">
//         {/* Logo / Title */}
//         <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="#">
//           <i className="bi bi-building me-2"></i>
//           Department Dashboard
//         </a>

//         {/* Toggle button (for mobile view) */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto align-items-center">
//             {["Dashboard", "Students", "Mentors", "Course", "Department"].map((item) => (
//               <li className="nav-item mx-2" key={item}>
//                 <a
//                   className="nav-link text-white fw-semibold"
//                   href="#"
//                   style={{
//                     transition: "color 0.3s ease, transform 0.2s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.color = "#ffc107";
//                     e.target.style.transform = "scale(1.05)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.color = "#fff";
//                     e.target.style.transform = "scale(1)";
//                   }}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}

//             {/* Profile Dropdown */}
//             <li className="nav-item dropdown ms-3">
//               <a
//                 className="nav-link dropdown-toggle d-flex align-items-center"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <i className="bi bi-person-circle me-2 fs-5"></i>
//                 <span className="fw-semibold">Profile</span>
//               </a>
//               <ul className="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="navbarDropdown">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     <i className="bi bi-person me-2"></i>My Account
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     <i className="bi bi-gear me-2"></i>Settings
//                   </a>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   <a className="dropdown-item text-danger" href="#">
//                     <i className="bi bi-box-arrow-right me-2"></i>Logout
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-3 sticky-top"
      style={{
        background: "linear-gradient(90deg, #a1a0a1ff 0%, #747882ff 100%)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
      }}
    >
      <div className="container-fluid px-4">
        {/* Logo / Title */}
        <a
          className="navbar-brand fw-bold fs-4 d-flex align-items-center"
          href="#"
          style={{
            color: "black",
            letterSpacing: "0.5px",
          }}
        >
         
          Department Dashboard
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {["Dashboard", "Students", "Mentors", "Courses", "Departments"].map(
              (item) => (
                <li className="nav-item mx-2" key={item}>
                  <a
                    className="nav-link fw-semibold"
                    href="#"
                    style={{
                      color: "#d0d0d0",
                      padding: "8px 14px",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      
                      e.target.style.color = "#5da9ff";
                      e.target.style.transform = "scale(1.05)";
                     
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#d0d0d0";
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}

            {/* Profile Dropdown */}
            <li className="nav-item dropdown ms-3">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "#5da9ff",
                  backgroundColor: "#202a3c",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = "0 0 10px rgba(93,169,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = "none";
                }}
              >
                <i className="bi bi-person-circle me-2 fs-5"></i>
                <span className="fw-semibold">Profile</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end shadow border-0"
                aria-labelledby="navbarDropdown"
                style={{
                  backgroundColor: "#1c1f2b",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <li>
                  <a className="dropdown-item text-light py-2" href="#">
                    <i className="bi bi-person me-2 text-primary"></i>My Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light py-2" href="#">
                    <i className="bi bi-gear me-2 text-primary"></i>Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider bg-secondary m-0" />
                </li>
                <li>
                  <a className="dropdown-item text-danger fw-semibold py-2" href="#">
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



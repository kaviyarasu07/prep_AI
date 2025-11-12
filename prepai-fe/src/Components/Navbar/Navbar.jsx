// // // // import React from "react";


// // // // function Navbar() {
// // // //   return (
// // // //     <nav
// // // //       className="navbar navbar-expand-lg navbar-dark"
// // // //       style={{
// // // //         background: "linear-gradient(90deg, #0d6efd 0%, #004080 100%)",
// // // //         boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// // // //       }}
// // // //     >
// // // //       <div className="container-fluid px-4">
// // // //         {/* Logo / Title */}
// // // //         <a className="navbar-brand fw-bold fs-4" href="#">
// // // //        Department Dashboard
// // // //         </a>

// // // //         {/* Toggle button (for mobile) */}
// // // //         <button
// // // //           className="navbar-toggler"
// // // //           type="button"
// // // //           data-bs-toggle="collapse"
// // // //           data-bs-target="#navbarNav"
// // // //           aria-controls="navbarNav"
// // // //           aria-expanded="false"
// // // //           aria-label="Toggle navigation"
// // // //         >
// // // //           <span className="navbar-toggler-icon"></span>
// // // //         </button>

// // // //         {/* Navbar Links */}
// // // //         <div className="collapse navbar-collapse" id="navbarNav">
// // // //           <ul className="navbar-nav ms-auto align-items-center">
// // // //             <li className="nav-item">
// // // //               <a className="nav-link active" href="#">
// // // //               Dashboard
// // // //               </a>
// // // //             </li>
// // // //             <li className="nav-item">
// // // //               <a className="nav-link" href="#">
// // // //  Students
// // // //               </a>
// // // //             </li>
// // // //             <li className="nav-item">
// // // //               <a className="nav-link" href="#">
// // // //                  Mentors
// // // //               </a>
// // // //             </li>
// // // //             <li className="nav-item">
// // // //               <a className="nav-link" href="#">
// // // //               Course
// // // //               </a>
// // // //             </li>
// // // //               <li className="nav-item">
// // // //               <a className="nav-link" href="#">
// // // //  Departement
// // // //               </a>
// // // //             </li>

// // // //             {/* Profile Dropdown */}
// // // //             <li className="nav-item dropdown ms-3">
// // // //               <a
// // // //                 className="nav-link dropdown-toggle d-flex align-items-center"
// // // //                 href="#"
// // // //                 id="navbarDropdown"
// // // //                 role="button"
// // // //                 data-bs-toggle="dropdown"
// // // //                 aria-expanded="false"
// // // //               >
             
// // // //                 <span className="fw-semibold">Profile</span>
// // // //               </a>
             
// // // //             </li>
// // // //           </ul>
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // }

// // // // export default Navbar;


// // // import React from "react";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import "bootstrap-icons/font/bootstrap-icons.css";

// // // function Navbar() {
// // //   return (
// // //     <nav
// // //       className="navbar navbar-expand-lg navbar-dark py-3"
// // //       style={{
// // //         background: "linear-gradient(90deg, #0d6efd 0%, #004080 100%)",
// // //         boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
// // //       }}
// // //     >
// // //       <div className="container-fluid px-4">
// // //         {/* Logo / Title */}
// // //         <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="#">
// // //           <i className="bi bi-building me-2"></i>
// // //           Department Dashboard
// // //         </a>

// // //         {/* Toggle button (for mobile view) */}
// // //         <button
// // //           className="navbar-toggler"
// // //           type="button"
// // //           data-bs-toggle="collapse"
// // //           data-bs-target="#navbarNav"
// // //           aria-controls="navbarNav"
// // //           aria-expanded="false"
// // //           aria-label="Toggle navigation"
// // //         >
// // //           <span className="navbar-toggler-icon"></span>
// // //         </button>

// // //         {/* Navbar Links */}
// // //         <div className="collapse navbar-collapse" id="navbarNav">
// // //           <ul className="navbar-nav ms-auto align-items-center">
// // //             {["Dashboard", "Students", "Mentors", "Course", "Department"].map((item) => (
// // //               <li className="nav-item mx-2" key={item}>
// // //                 <a
// // //                   className="nav-link text-white fw-semibold"
// // //                   href="#"
// // //                   style={{
// // //                     transition: "color 0.3s ease, transform 0.2s ease",
// // //                   }}
// // //                   onMouseEnter={(e) => {
// // //                     e.target.style.color = "#ffc107";
// // //                     e.target.style.transform = "scale(1.05)";
// // //                   }}
// // //                   onMouseLeave={(e) => {
// // //                     e.target.style.color = "#fff";
// // //                     e.target.style.transform = "scale(1)";
// // //                   }}
// // //                 >
// // //                   {item}
// // //                 </a>
// // //               </li>
// // //             ))}

// // //             {/* Profile Dropdown */}
// // //             <li className="nav-item dropdown ms-3">
// // //               <a
// // //                 className="nav-link dropdown-toggle d-flex align-items-center"
// // //                 href="#"
// // //                 id="navbarDropdown"
// // //                 role="button"
// // //                 data-bs-toggle="dropdown"
// // //                 aria-expanded="false"
// // //               >
// // //                 <i className="bi bi-person-circle me-2 fs-5"></i>
// // //                 <span className="fw-semibold">Profile</span>
// // //               </a>
// // //               <ul className="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="navbarDropdown">
// // //                 <li>
// // //                   <a className="dropdown-item" href="#">
// // //                     <i className="bi bi-person me-2"></i>My Account
// // //                   </a>
// // //                 </li>
// // //                 <li>
// // //                   <a className="dropdown-item" href="#">
// // //                     <i className="bi bi-gear me-2"></i>Settings
// // //                   </a>
// // //                 </li>
// // //                 <li><hr className="dropdown-divider" /></li>
// // //                 <li>
// // //                   <a className="dropdown-item text-danger" href="#">
// // //                     <i className="bi bi-box-arrow-right me-2"></i>Logout
// // //                   </a>
// // //                 </li>
// // //               </ul>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;




// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap-icons/font/bootstrap-icons.css";

// // function Navbar() {
// //   return (
// //     <nav
// //       className="navbar navbar-expand-lg navbar-dark py-3 sticky-top"
// //       style={{
// //         background: "linear-gradient(90deg, #a1a0a1ff 0%, #747882ff 100%)",
// //         boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
// //       }}
// //     >
// //       <div className="container-fluid px-4">
// //         {/* Logo / Title */}
// //         <a
// //           className="navbar-brand fw-bold fs-4 d-flex align-items-center"
// //           href="#"
// //           style={{
// //             color: "black",
// //             letterSpacing: "0.5px",
// //           }}
// //         >
         
// //           Department Dashboard
// //         </a>

// //         {/* Mobile Toggle Button */}
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
// //             {["Dashboard", "Students", "Mentors", "Courses", "Departments"].map(
// //               (item) => (
// //                 <li className="nav-item mx-2" key={item}>
// //                   <a
// //                     className="nav-link fw-semibold"
// //                     href="#"
// //                     style={{
// //                       color: "#d0d0d0",
// //                       padding: "8px 14px",
// //                       borderRadius: "8px",
// //                       transition: "all 0.3s ease",
                      
// //                     }}
// //                     onMouseEnter={(e) => {
                      
// //                       e.target.style.color = "#5da9ff";
// //                       e.target.style.transform = "scale(1.05)";
                     
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.target.style.backgroundColor = "transparent";
// //                       e.target.style.color = "#d0d0d0";
// //                       e.target.style.transform = "scale(1)";
// //                       e.target.style.boxShadow = "none";
// //                     }}
// //                   >
// //                     {item}
// //                   </a>
// //                 </li>
// //               )
// //             )}

// //             {/* Profile Dropdown */}
// //             <li className="nav-item dropdown ms-3">
// //               <a
// //                 className="nav-link dropdown-toggle d-flex align-items-center"
// //                 href="#"
// //                 id="navbarDropdown"
// //                 role="button"
// //                 data-bs-toggle="dropdown"
// //                 aria-expanded="false"
// //                 style={{
// //                   color: "#5da9ff",
// //                   backgroundColor: "#202a3c",
// //                   borderRadius: "8px",
// //                   padding: "8px 14px",
// //                   transition: "0.3s",
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.target.style.boxShadow = "0 0 10px rgba(93,169,255,0.5)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.target.style.boxShadow = "none";
// //                 }}
// //               >
// //                 <i className="bi bi-person-circle me-2 fs-5"></i>
// //                 <span className="fw-semibold">Profile</span>
// //               </a>
// //               <ul
// //                 className="dropdown-menu dropdown-menu-end shadow border-0"
// //                 aria-labelledby="navbarDropdown"
// //                 style={{
// //                   backgroundColor: "#1c1f2b",
// //                   borderRadius: "10px",
// //                   overflow: "hidden",
                   
// //                 }}
// //               >
// //                 <li>
// //                   <a className="dropdown-item text-light py-2" href="#">
// //                     <i className="bi bi-person me-2 text-primary"></i>My Account
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a className="dropdown-item text-light py-2" href="#">
// //                     <i className="bi bi-gear me-2 text-primary"></i>Settings
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <hr className="dropdown-divider bg-secondary m-0" />
// //                 </li>
// //                 <li>
// //                   <a className="dropdown-item text-danger fw-semibold py-2" href="#">
// //                     <i className="bi bi-box-arrow-right me-2"></i>Logout
// //                   </a>
// //                 </li>
// //               </ul>
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
//       className="navbar navbar-expand-lg navbar-dark py-3 sticky-top"
//       style={{
//         background: "linear-gradient(90deg, #a1a0a1 0%, #747882 100%)",
//         boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
//       }}
//     >
//       <div className="container-fluid px-4">
//         {/* Logo / Title */}
//         <a
//           className="navbar-brand fw-bold fs-4 d-flex align-items-center"
//           href="#"
//           style={{
//             color: "#000",
//             letterSpacing: "0.5px",
//           }}
//         >
//            <i className="fa-solid fa-graduation-cap me-2"></i>
//            Acme University Admin
//         </a>

//         {/* Mobile Toggle Button */}
//         <button
//           className="navbar-toggler border-0"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           style={{ boxShadow: "none" }}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto align-items-center">
//             {["Dashboard", "Students", "Mentors", "Courses", "Departments"].map(
//               (item) => (
//                 <li className="nav-item mx-2" key={item}>
//                   <a
//                     className="nav-link fw-semibold"
//                     href="#"
//                     style={{
//                       color: "#f1f1f1",
//                       padding: "8px 16px",
//                       borderRadius: "10px",
//                       transition: "all 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.backgroundColor = "#ffffff22";
//                       e.target.style.color = "#5da9ff";
//                       e.target.style.transform = "scale(1.05)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.backgroundColor = "transparent";
//                       e.target.style.color = "#f1f1f1";
//                       e.target.style.transform = "scale(1)";
//                     }}
//                   >
//                     {item}
//                   </a>
//                 </li>
//               )
//             )}

//             {/* Profile Dropdown */}
//             <li className="nav-item dropdown ms-3">
//               <a
//                 className="nav-link dropdown-toggle d-flex align-items-center"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{
//                   color: "#ffffff",
//                   backgroundColor: "#1f2533",
//                   borderRadius: "10px",
//                   padding: "8px 16px",
//                   transition: "0.3s",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.boxShadow = "0 0 10px rgba(93,169,255,0.6)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.boxShadow = "none";
//                 }}
//               >
//                 <i className="bi bi-person-circle me-2 fs-5"></i>
//                 <span className="fw-semibold">Profile</span>
//               </a>
//               <ul
//                 className="dropdown-menu dropdown-menu-end shadow border-0"
//                 aria-labelledby="navbarDropdown"
//                 style={{
//                   backgroundColor: "#1c1f2b",
//                   borderRadius: "12px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <li>
//                   <a className="dropdown-item text-light py-2" href="#">
//                     <i className="bi bi-person me-2 text-primary"></i>My Account
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item text-light py-2" href="#">
//                     <i className="bi bi-gear me-2 text-primary"></i>Settings
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider bg-secondary m-0" />
//                 </li>
//                 <li>
//                   <a
//                     className="dropdown-item text-danger fw-semibold py-2"
//                     href="#"
//                   >
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



import React, { useState, useEffect } from "react";


import profile from "../../assets/img/profile.png"; // ✅ Correct path

function Navbar() {
  // ✅ State to detect mobile screen
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Resize listener to update when screen changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-4 position-relative">
      <span
        className="navbar-brand fw-bold"
        style={{ fontSize: isMobile ? "0.95rem" : "1.25rem" }}
      >
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

      {/* ✅ Responsive profile icon */}
      <div
        className={`position-${
          isMobile ? "absolute top-0 end-0 m-2" : "relative ms-auto"
        }`}
      >
        <img
          src={profile}
          alt="profile"
          className="rounded-circle"
          width={isMobile ? "30" : "45"}
          height={isMobile ? "30" : "45"}
          style={{ cursor: isMobile ? "pointer" : "default" }}
          onClick={() => isMobile && setMenuOpen(!menuOpen)}
        />

        {/* ✅ Dropdown menu (mobile only) */}
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
  );
}

export default Navbar;

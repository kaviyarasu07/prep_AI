


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//       <div className="container">
//         <a className="navbar-brand fw-bold" href="#">Acme University</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav align-items-center">
//             <li className="nav-item">
//               <a className="nav-link" href="#">Dashboard</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Students</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Faculty</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Departments</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Courses</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Admissions</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 <img 
//                   src={"src/assest/Profile.jpg"} 
//                   alt="Profile" 
//                   className="rounded-circle" 
//                   style={{ width: "40px", height: "40px" }}
//                 />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronDown } from 'react-icons/fa';

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Dashboard');

  const navItems = ['Dashboard', 'Students', 'Faculty', 'Departments', 'Courses', 'Admissions'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold fs-3 text-primary" href="#">
          Acme University
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item}>
                <a
                  href="#"
                  className={`nav-link fw-medium ${activeLink === item ? 'text-primary border-bottom border-3 border-primary' : 'text-dark'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Profile Dropdown */}
            <li className="nav-item ms-4 dropdown">
              <a
                href="#"
                className="d-flex align-items-center nav-link dropdown-toggle"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={'src/assest/Profile.jpg'}
                  alt="Profile"
                  className="rounded-circle border border-2 border-primary shadow-sm"
                  style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm" aria-labelledby="profileDropdown">
                <li><a className="dropdown-item" href="#">My Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

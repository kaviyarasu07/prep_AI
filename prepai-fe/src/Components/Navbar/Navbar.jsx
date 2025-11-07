import React from "react";


function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #0d6efd 0%, #004080 100%)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid px-4">
        {/* Logo / Title */}
        <a className="navbar-brand fw-bold fs-4" href="#">
          <i className="bi bi-mortarboard-fill me-2"></i> Department Dashboard
        </a>

        {/* Toggle button (for mobile) */}
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
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="bi bi-house-door me-1"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person-lines-fill me-1"></i> Students
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person-workspace me-1"></i> Mentors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-bar-chart me-1"></i> Reports
              </a>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item dropdown ms-3">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle fs-5 me-1"></i>
                <span className="fw-semibold">Admin</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end shadow-sm"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-gear me-2"></i> Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
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

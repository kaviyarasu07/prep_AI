import React, { useState } from "react";
import pic1 from "../assets/pic1.avif"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCalendar2DateFill, BsRobot, BsBuildingsFill } from "react-icons/bs";
import { RiRobot3Fill, RiUserVoiceFill } from "react-icons/ri";
import { GiUnicorn } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./Landing.css"

const LandingPage = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const navigate = useNavigate();
  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold ml-2" href="#">
            <GiUnicorn size={32} className="mb-3" />
            Prep AI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${!isCollapsed ? "show" : ""
              }`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <button
              className="btn btn-primary fw-bold"
              href="#"
              onClick={() => navigate("LoginPage")}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container-fluid bg-light py-5 ">
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start">
            <div className="w-100 mb-4 mb-md-0">
              <img
                src={pic1}
                className="img-fluid rounded"
                alt="Prep AI Team"
              />
            </div>
            <div className="w-100 ps-md-5">
              <h1 className="fw-bold mb-3">Prep AI</h1>
              <p className="mb-4">Your AI Assistant for Interview Success</p>
              <button className="btn btn-primary btn-lg fw-bold" onClick={()=> navigate("CollegeRegisterForm")}>Get Started</button>
            </div>
          </div>
        </div>

      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container">

          <h3 className="fw-bold mb-4">How It Works</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-4 border rounded h-100">
                <i className="bi bi-building fs-2"></i>
               <span className="icon-hover">
                      <BsBuildingsFill size={32} className="mb-3" /></span>
                <h5 className="fw-bold">College Registers</h5>
                <p className="text-muted">
                  Colleges register on the platform to manage their students’
                  interview preparation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border rounded h-100">
                <i className="bi bi-calendar-check fs-2"></i>
                <span className="icon-hover"><BsCalendar2DateFill size={32} className="mb-3" /></span>
                <h5 className="fw-bold">
                  Schedule Assessments & Mock Interviews
                </h5>
                <p className="text-muted">
                  Students schedule assessments and mock interviews through the
                  platform.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border rounded h-100">
                <i className="bi bi-bar-chart-line fs-2"></i>
                <span className="icon-hover"><BsRobot size={32} className="mb-3" /></span>
                <h5 className="fw-bold">AI Evaluates & Gives Feedback</h5>
                <p className="text-muted">
                  AI evaluates performance and provides detailed feedback to
                  students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-4">Features</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-4 border rounded h-100">
                <span className="icon-hover"><RiUserVoiceFill size={32} className="mb-3" /></span>
                <h5 className="fw-bold">
                  Department-wise Performance Tracking
                </h5>
                <p className="text-muted">
                  Track student performance across different departments and
                  identify areas for improvement.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border rounded h-100">
                <span className="icon-over"><RiRobot3Fill size={32} className="mb-3" /></span>
                <h5 className="fw-bold">
                  AI-based Assessments and Scoring
                </h5>
                <p className="text-muted">
                  Receive AI-generated scores and detailed feedback on
                  assessments to gauge student readiness.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border rounded h-100">
                <span><BsCalendar2DateFill size={32} className="mb-3" /></span>
                <h5 className="fw-bold">Custom Mock Interview Scheduling</h5>
                <p className="text-muted">
                  Schedule mock interviews tailored to individual student needs
                  and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-5">
        <h2 className="text-center mb-5">Testimonials</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 d-flex">
            <div className="card h-100 text-center shadow-sm">
              <img src="https://randomuser.me/api/portraits/men/46.jpg"
                className="card-img-top rounded" alt="Person 1" />
              <div className="card-body-img">
                <p className="card-text">
                  "PrepMentor AI has been instrumental in helping our students prepare for interviews. The AI feedback is incredibly insightful."
                </p>
                <small className="text-muted">Dr. Emily Carter, <span className="text-primary">Career Services Director</span></small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="card h-100 text-center shadow-sm">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" className="card-img-top rounded" alt="Person 2" />
              <div className="card-body-img">
                <p className="card-text">
                  "The platform’s scheduling feature is a game-changer. It’s so easy to manage mock interviews for all our students."
                </p>
                <small className="text-muted">Mr. David Lee, <span className="text-primary">Placement Coordinator</span></small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="card h-100 text-center shadow-sm">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" className="card-img-top rounded" alt="Person 3" />
              <div className="card-body-img">
                <p className="card-text">
                  "The department-wise performance tracking gives us a clear picture of where our students stand and what needs to be improved."
                </p>
                <small className="text-muted">Ms. Sarah Chen, <span className="text-primary">Training and Placement Officer</span></small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-light text-left small">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-left gap-3 mb-2">
            <a href="#" className="text-muted text-decoration-none">
              Privacy Policy
            </a>
            <a href="#" className="text-muted text-decoration-none">
              Terms
            </a>
            <a href="#" className="text-muted text-decoration-none">
              Contact
            </a>
          </div>
          <p className="mb-0 text-muted">
            &copy; 2024 Prep AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

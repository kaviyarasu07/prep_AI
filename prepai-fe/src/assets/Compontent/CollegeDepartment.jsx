// // CollegeDepartment.jsx
// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs, FaCalendarAlt } from 'react-icons/fa';
// import {
//   fetchCollegeSummaryRequest,
//   fetchDepartmentByIdRequest,
//   fetchDepartmentsRequest,
//   searchDepartmentsRequest
// } from "../Redux_saga/Action/College_Action";

// function CollegeDepartment() {
//   const [activeItem, setActiveItem] = useState("Department Management");
//   const [searchTerm, setSearchTerm] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const collegeData = useSelector((state) => state.collegeData || {});
//   const { summary = {}, departments = [], interviews = [], loading = false, error = null } = collegeData;

//   useEffect(() => {
//     dispatch(fetchCollegeSummaryRequest());
//     dispatch(fetchDepartmentsRequest());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log("Departments:", departments);
//   }, [departments]);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     dispatch(searchDepartmentsRequest(value));
//   };

//   const summaryData = Object.keys(summary).length === 0
//     ? [
//         { title: "Total Departments", value: 0 },
//         { title: "Total Students", value: 0 },
//         { title: "Total Department Admins", value: 0 }
//       ]
//     : [
//         { title: "Total Departments", value: summary.totalDepartments || 0 },
//         { title: "Total Students", value: summary.totalStudents || 0 },
//         { title: "Total Department Admins", value: summary.totalDepartmentAdmins || 0 }
//       ];

//   return (
//     <div className="container-fluid">
//       <div className="row vh-100">
//         {/* Sidebar */}
//         <div className="col-md-2 bg-white border-end d-flex flex-column justify-content-between" style={{ minHeight: '100vh' }}>
//           <div>
//             <div className="p-3 border-bottom">
//               <h5>PrepMentor AI</h5>
//             </div>
//             <ul className="nav flex-column mt-3">
//               <SidebarItem name="Dashboard" icon={<FaHome />} activeItem={activeItem} setActiveItem={setActiveItem}  />
//               <SidebarItem name="Department Management" icon={<FaBuilding />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Department Admins" icon={<FaUserCheck />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Students" icon={<FaUsers />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Assessments" icon={<FaClipboardList />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Mock Interviews" icon={<FaCalendarAlt />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Reports" icon={<FaCogs />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//             </ul>
//           </div>
//           <div className="p-3 border-top text-center">
//             <button className="btn btn-outline-secondary btn-sm">Settings</button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-md-10 p-4 bg-light overflow-auto" style={{ minHeight: '100vh' }}>
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h3>Welcome, Amelia</h3>
//             <div
//               className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
//               style={{ width: '40px', height: '40px' }}
//             >
//               A
//             </div>
//           </div>

//           {loading && <div className="alert alert-info">Loading data...</div>}
//           {error && <div className="alert alert-danger">Error: {error}</div>}

//           <h6>Summary</h6>
//           <div className="row g-3 mb-4">
//             {summaryData.map((item, index) => (
//               <div key={index} className="col-md-3">
//                 <div className="p-3 bg-white rounded shadow-sm">
//                   <div className="text-muted small">{item.title}</div>
//                   <div className="h5">{item.value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <h6>Department Summary</h6>
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search by department or admin name"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <div className="table-responsive mb-4">
//             <table className="table table-bordered bg-white shadow-sm">
//               <thead className="table-light">
//                 <tr>
//                   <th>Department Name</th>
//                   <th>Assigned Admin</th>
//                   <th>No. of Students</th>
//                   <th>Assessments Conducted</th>
//                   <th>Mock Interviews Conducted</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {departments.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="text-center">No departments available</td>
//                   </tr>
//                 ) : (
//                   departments.map((dept) => (
//                     <tr key={dept.id}>
//                       <td>{dept.departmentName}</td>
//                       <td>{dept.assignedAdmins}</td>
//                       <td>{dept.numberOfStudents}</td>
//                       <td>{dept.assessments || 0}</td>
//                       <td>{dept.mockInterviews || 0}</td>
//                       <td>
//                         <span className={`badge ${dept.status === "Active" ? "bg-success" : "bg-secondary"}`}>
//                           {dept.status}
//                         </span>
//                       </td>
//                       <td>
//                         <button
//                           className="btn btn-sm btn-primary me-2"
//                           onClick={() => dispatch(fetchDepartmentByIdRequest(dept.id))}
//                         >
//                           View
//                         </button>
//                         <a href="#!" className="me-2">Edit</a>
//                         <a href="#!" className="text-danger">Remove</a>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <h6>Upcoming Interviews</h6>
//           <div className="table-responsive mb-3">
//             <table className="table table-bordered bg-white shadow-sm">
//               <thead className="table-light">
//                 <tr>
//                   <th>Date</th>
//                   <th>Time</th>
//                   <th>Student Name</th>
//                   <th>Department</th>
//                   <th>Assigned Admin</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {interviews.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">No interviews scheduled</td>
//                   </tr>
//                 ) : (
//                   interviews.map((interview, index) => (
//                     <tr key={index}>
//                       <td>{interview.date}</td>
//                       <td>{interview.time}</td>
//                       <td>{interview.name}</td>
//                       <td>{interview.department}</td>
//                       <td>{interview.admin}</td>
//                       <td><span className="badge bg-secondary">Scheduled</span></td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <div className="text-end">
//             <button className="btn btn-outline-primary btn-sm">View All</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const SidebarItem = ({ name, icon, activeItem, setActiveItem, navigate }) => {
//   const handleClick = () => {
//     setActiveItem(name);
//     switch(name) {
      
//       case "Department Management":
//         navigate("/Departmentmanger");
//         break;
//       case "Department Admins":
//         navigate("/DepartmentAdmins");
//         break;
//       case "Students":
//         navigate("/Students");
//         break;
//       case "Assessments":
//         navigate("/Assessment");
//         break;
//       case "Mock Interviews":
//         navigate("/Mockinterview");
//         break;
//       case "Reports":
//         navigate("/report");
//         break;
//       default:
//         navigate("/");
//     }
//   };

//   return (
//     <li className="nav-item">
//       <button
//         className={`nav-link d-flex align-items-center ${activeItem === name ? 'active bg-light text-dark' : 'text-muted'}`}
//         onClick={handleClick}
//         style={{ borderRadius: '0.375rem' }}
//       >
//         <span className="me-2">{icon}</span>
//         {name}
//       </button>
//     </li>
//   );
// };

// export default CollegeDepartment;

// CollegeDepartment.jsx
// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs, FaCalendarAlt } from 'react-icons/fa';
// import {
//   fetchCollegeSummaryRequest,
//   fetchDepartmentByIdRequest,
//   fetchDepartmentsRequest,
//   searchDepartmentsRequest
// } from "../Redux_saga/Action/College_Action";

// function CollegeDepartment() {
//   const [activeItem, setActiveItem] = useState("Department Management");
//   const [searchTerm, setSearchTerm] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const collegeData = useSelector((state) => state.collegeData || {});
//   const { summary = {}, departments = [], interviews = [], loading = false, error = null } = collegeData;

//   useEffect(() => {
//     dispatch(fetchCollegeSummaryRequest());
//     dispatch(fetchDepartmentsRequest());
//   }, [dispatch]);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     dispatch(searchDepartmentsRequest(value));
//   };

//   const summaryData = Object.keys(summary).length === 0
//     ? [
//         { title: "Total Departments", value: 0 },
//         { title: "Total Students", value: 0 },
//         { title: "Total Department Admins", value: 0 }
//       ]
//     : [
//         { title: "Total Departments", value: summary.totalDepartments || 0 },
//         { title: "Total Students", value: summary.totalStudents || 0 },
//         { title: "Total Department Admins", value: summary.totalDepartmentAdmins || 0 }
//       ];

//   return (
//     <div className="container-fluid">
//       <div className="row vh-100">
//         {/* Sidebar */}
//         <div className="col-md-2 bg-white border-end d-flex flex-column justify-content-between" style={{ minHeight: '100vh' }}>
//           <div>
//             <div className="p-3 border-bottom text-center bg-light">
//               <h5 className="m-0">PrepMentor AI</h5>
//             </div>
//             <ul className="nav flex-column mt-3 px-2">
//               <SidebarItem name="Dashboard" icon={<FaHome />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Department Management" icon={<FaBuilding />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Department Admins" icon={<FaUserCheck />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Students" icon={<FaUsers />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Assessments" icon={<FaClipboardList />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Mock Interviews" icon={<FaCalendarAlt />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Reports" icon={<FaCogs />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//             </ul>
//           </div>
//           <div className="p-3 border-top text-center bg-light">
//             <button className="btn btn-outline-secondary btn-sm">Settings</button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-md-10 p-4 bg-light overflow-auto" style={{ minHeight: '100vh' }}>
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h3 className="fw-bold">Welcome, Amelia</h3>
//             <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', fontSize: '1.25rem' }}>
//               A
//             </div>
//           </div>

//           {loading && <div className="alert alert-info">Loading data...</div>}
//           {error && <div className="alert alert-danger">Error: {error}</div>}

//           <h6 className="text-muted mb-3">Summary</h6>
//           <div className="row g-3 mb-4">
//             {summaryData.map((item, index) => (
//               <div key={index} className="col-md-4">
//                 <div className="p-4 bg-white rounded shadow-sm h-100">
//                   <div className="text-muted small">{item.title}</div>
//                   <div className="h4 fw-bold">{item.value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <h6 className="text-muted mb-3">Department Summary</h6>
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control rounded-pill"
//               placeholder="Search by department or admin name"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <div className="table-responsive mb-5">
//             <table className="table table-hover table-bordered bg-white shadow-sm">
//               <thead className="table-light">
//                 <tr>
//                   <th>Department Name</th>
//                   <th>Assigned Admin</th>
//                   <th>No. of Students</th>
//                   <th>Assessments Conducted</th>
//                   <th>Mock Interviews Conducted</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {departments.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="text-center">No departments available</td>
//                   </tr>
//                 ) : (
//                   departments.map((dept) => (
//                     <tr key={dept.id}>
//                       <td>{dept.departmentName}</td>
//                       <td>{dept.assignedAdmins}</td>
//                       <td>{dept.numberOfStudents}</td>
//                       <td>{dept.assessments || 0}</td>
//                       <td>{dept.mockInterviews || 0}</td>
//                       <td>
//                         <span className={`badge ${dept.status === "Active" ? "bg-success" : "bg-secondary"}`}>
//                           {dept.status}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="btn-group" role="group">
//                           <button className="btn btn-sm btn-primary" onClick={() => dispatch(fetchDepartmentByIdRequest(dept.id))}>View</button>
//                           <button className="btn btn-sm btn-warning">Edit</button>
//                           <button className="btn btn-sm btn-danger">Delete</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <h6 className="text-muted mb-3">Upcoming Interviews</h6>
//           <div className="table-responsive mb-4">
//             <table className="table table-hover table-bordered bg-white shadow-sm">
//               <thead className="table-light">
//                 <tr>
//                   <th>Date</th>
//                   <th>Time</th>
//                   <th>Student Name</th>
//                   <th>Department</th>
//                   <th>Assigned Admin</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {interviews.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">No interviews scheduled</td>
//                   </tr>
//                 ) : (
//                   interviews.map((interview, index) => (
//                     <tr key={index}>
//                       <td>{interview.date}</td>
//                       <td>{interview.time}</td>
//                       <td>{interview.name}</td>
//                       <td>{interview.department}</td>
//                       <td>{interview.admin}</td>
//                       <td><span className="badge bg-secondary">Scheduled</span></td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <div className="text-end mb-5">
//             <button className="btn btn-outline-primary btn-sm">View All Interviews</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const SidebarItem = ({ name, icon, activeItem, setActiveItem, navigate }) => {
//   const handleClick = () => {
//     setActiveItem(name);
//     switch(name) {
//       case "Department Management":
//         navigate("/Departmentmanger");
//         break;
//       case "Department Admins":
//         navigate("/DepartmentAdmins");
//         break;
//       case "Students":
//         navigate("/Students");
//         break;
//       case "Assessments":
//         navigate("/Assessment");
//         break;
//       case "Mock Interviews":
//         navigate("/Mockinterview");
//         break;
//       case "Reports":
//         navigate("/report");
//         break;
//       default:
//         navigate("/");
//     }
//   };

//   return (
//     <li className="nav-item mb-1">
//       <button
//         className={`nav-link d-flex align-items-center ${activeItem === name ? 'bg-light text-dark' : 'text-muted'}`}
//         onClick={handleClick}
//         style={{ borderRadius: '0.375rem', padding: '10px' }}
//       >
//         <span className="me-2">{icon}</span>
//         {name}
//       </button>
//     </li>
//   );
// };

// export default CollegeDepartment;



// // CollegeDepartment.jsx
// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs, FaCalendarAlt } from 'react-icons/fa';
// import {
//   fetchCollegeSummaryRequest,
//   fetchDepartmentByIdRequest,
//   fetchDepartmentsRequest,
//   searchDepartmentsRequest,
//   updateDepartmentRequest
// } from "../Redux_saga/Action/College_Action";

// function CollegeDepartment() {
//   const [activeItem, setActiveItem] = useState("Department Management");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [editData, setEditData] = useState({
//     id: null,
//     departmentName: "",
//     assignedAdmins: "",
//     status: true
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const collegeData = useSelector((state) => state.collegeData || {});
//   const { summary = {}, departments = [], interviews = [], loading = false, error = null } = collegeData;

//   useEffect(() => {
//     dispatch(fetchCollegeSummaryRequest());
//     dispatch(fetchDepartmentsRequest());
//   }, [dispatch]);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     dispatch(searchDepartmentsRequest(value));
//   };

//   const summaryData = Object.keys(summary).length === 0
//     ? [
//         { title: "Total Departments", value: 0 },
//         { title: "Total Students", value: 0 },
//         { title: "Total Department Admins", value: 0 }
//       ]
//     : [
//         { title: "Total Departments", value: summary.totalDepartments || 0 },
//         { title: "Total Students", value: summary.totalStudents || 0 },
//         { title: "Total Department Admins", value: summary.totalDepartmentAdmins || 0 }
//       ];

//   return (
//     <div className="container-fluid">
//       <div className="row vh-100">
//         {/* Sidebar */}
//         <div className="col-md-2 bg-white border-end d-flex flex-column justify-content-between" style={{ minHeight: '100vh' }}>
//           <div>
//             <div className="p-3 border-bottom text-center bg-light">
//               <h5 className="m-0">PrepMentor AI</h5>
//             </div>
//             <ul className="nav flex-column mt-3 px-2">
//               <SidebarItem name="Dashboard" icon={<FaHome />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Department Management" icon={<FaBuilding />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Department Admins" icon={<FaUserCheck />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Students" icon={<FaUsers />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Assessments" icon={<FaClipboardList />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Mock Interviews" icon={<FaCalendarAlt />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//               <SidebarItem name="Reports" icon={<FaCogs />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
//             </ul>
//           </div>
//           <div className="p-3 border-top text-center bg-light">
//             <button className="btn btn-outline-secondary btn-sm">Settings</button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-md-10 p-4 bg-light overflow-auto" style={{ minHeight: '100vh' }}>
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h3 className="fw-bold">Welcome, Amelia</h3>
//             <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', fontSize: '1.25rem' }}>
//               A
//             </div>
//           </div>

//           {loading && <div className="alert alert-info">Loading data...</div>}
//           {error && <div className="alert alert-danger">Error: {error}</div>}

//           <h6 className="text-muted mb-3">Summary</h6>
//           <div className="row g-3 mb-4">
//             {summaryData.map((item, index) => (
//               <div key={index} className="col-md-4">
//                 <div className="p-4 bg-white rounded shadow-sm h-100">
//                   <div className="text-muted small">{item.title}</div>
//                   <div className="h4 fw-bold">{item.value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <h6 className="text-muted mb-3">Department Summary</h6>
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control rounded-pill"
//               placeholder="Search by department or admin name"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <div className="table-responsive mb-5">
//             <table className="table table-hover table-bordered bg-white shadow-sm">
//               <thead className="table-light">
//                 <tr>
//                   <th>Department Name</th>
//                   <th>Assigned Admin</th>
//                   <th>No. of Students</th>
//                   <th>Assessments Conducted</th>
//                   <th>Mock Interviews Conducted</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {departments.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="text-center">No departments available</td>
//                   </tr>
//                 ) : (
//                   departments.map((dept) => (
//                     <tr key={dept.id}>
//                       <td>{dept.departmentName}</td>
//                       <td>{dept.assignedAdmins}</td>
//                       <td>{dept.numberOfStudents}</td>
//                       <td>{dept.assessments || 0}</td>
//                       <td>{dept.mockInterviews || 0}</td>
//                       <td>
//                         <span className={`badge ${dept.status === "Active" ? "bg-success" : "bg-secondary"}`}>
//                           {dept.status}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="btn-group" role="group">
//                           <button className="btn btn-sm btn-primary" onClick={() => dispatch(fetchDepartmentByIdRequest(dept.id))}>View</button>
//                           <button
//                             className="btn btn-sm btn-warning"
//                             onClick={() => {
//                               setEditData({
//                                 id: dept.id,
//                                 departmentName: dept.departmentName,
//                                 assignedAdmins: dept.assignedAdmins,
//                                 status: dept.status === "Active"
//                               });
//                               setShowEditForm(true);
//                             }}
//                           >
//                             Edit
//                           </button>
//                           <button className="btn btn-sm btn-danger">Delete</button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <h6 className="text-muted mb-3">Upcoming Interviews</h6>
//           <div className="table-responsive mb-4">
//             <table className="table table-hover table-bordered bg-white shadow-sm">
//               <thead className="table-light">
//                 <tr>
//                   <th>Date</th>
//                   <th>Time</th>
//                   <th>Student Name</th>
//                   <th>Department</th>
//                   <th>Assigned Admin</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {interviews.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">No interviews scheduled</td>
//                   </tr>
//                 ) : (
//                   interviews.map((interview, index) => (
//                     <tr key={index}>
//                       <td>{interview.date}</td>
//                       <td>{interview.time}</td>
//                       <td>{interview.name}</td>
//                       <td>{interview.department}</td>
//                       <td>{interview.admin}</td>
//                       <td><span className="badge bg-secondary">Scheduled</span></td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <div className="text-end mb-5">
//             <button className="btn btn-outline-primary btn-sm">View All Interviews</button>
//           </div>
//         </div>

//         {/* Edit Modal */}
//         {showEditForm && (
//           <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title">Edit Department</h5>
//                   <button type="button" className="btn-close" onClick={() => setShowEditForm(false)}></button>
//                 </div>
//                 <div className="modal-body">
//                   <div className="mb-3">
//                     <label className="form-label">Department Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={editData.departmentName}
//                       onChange={(e) => setEditData({ ...editData, departmentName: e.target.value })}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Assigned Admins</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={editData.assignedAdmins}
//                       onChange={(e) => setEditData({ ...editData, assignedAdmins: e.target.value })}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Status</label>
//                     <select
//                       className="form-select"
//                       value={editData.status ? "Active" : "Inactive"}
//                       onChange={(e) => setEditData({ ...editData, status: e.target.value === "Active" })}
//                     >
//                       <option value="Active">Active</option>
//                       <option value="Inactive">Inactive</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
//                   <button
//                     type="button"
//                     className="btn btn-primary"
//                     onClick={() => {
//                       dispatch(updateDepartmentRequest(editData.id, {
//                         departmentName: editData.departmentName,
//                         assignedAdmins: editData.assignedAdmins,
//                         status: editData.status
//                       }));
//                       setShowEditForm(false);
//                     }}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// const SidebarItem = ({ name, icon, activeItem, setActiveItem, navigate }) => {
//   const handleClick = () => {
//     setActiveItem(name);
//     switch(name) {
//       case "Department Management":
//         navigate("/Departmentmanger");
//         break;
//       case "Department Admins":
//         navigate("/DepartmentAdmins");
//         break;
//       case "Students":
//         navigate("/Students");
//         break;
//       case "Assessments":
//         navigate("/Assessment");
//         break;
//       case "Mock Interviews":
//         navigate("/Mockinterview");
//         break;
//       case "Reports":
//         navigate("/report");
//         break;
//       default:
//         navigate("/");
//     }
//   };

//   return (
//     <li className="nav-item mb-1">
//       <button
//         className={`nav-link d-flex align-items-center ${activeItem === name ? 'bg-light text-dark' : 'text-muted'}`}
//         onClick={handleClick}
//         style={{ borderRadius: '0.375rem', padding: '10px' }}
//       >
//         <span className="me-2">{icon}</span>
//         {name}
//       </button>
//     </li>
//   );
// };

// export default CollegeDepartment;

// CollegeDepartment.jsx
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs, FaCalendarAlt } from 'react-icons/fa';
import {
  fetchCollegeSummaryRequest,
  fetchDepartmentByIdRequest,
  fetchDepartmentsRequest,
  searchDepartmentsRequest,
  updateDepartmentRequest,
  deleteDepartmentRequest   // ✅ Import delete action
} from "../Redux_saga/Action/College_Action";

function CollegeDepartment() {
  const [activeItem, setActiveItem] = useState("Department Management");
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);
  const [editData, setEditData] = useState({
    id: null,
    departmentName: "",
    assignedAdmins: "",
    status: true
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const collegeData = useSelector((state) => state.collegeData || {});
  const { summary = {}, departments = [], interviews = [], loading = false, error = null } = collegeData;

  useEffect(() => {
    dispatch(fetchCollegeSummaryRequest());
    dispatch(fetchDepartmentsRequest());
  }, [dispatch]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(searchDepartmentsRequest(value));
  };

  const summaryData = Object.keys(summary).length === 0
    ? [
        { title: "Total Departments", value: 0 },
        { title: "Total Students", value: 0 },
        { title: "Total Department Admins", value: 0 }
      ]
    : [
        { title: "Total Departments", value: summary.totalDepartments || 0 },
        { title: "Total Students", value: summary.totalStudents || 0 },
        { title: "Total Department Admins", value: summary.totalDepartmentAdmins || 0 }
      ];

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <div className="col-md-2 bg-white border-end d-flex flex-column justify-content-between" style={{ minHeight: '100vh' }}>
          <div>
            <div className="p-3 border-bottom text-center bg-light">
              <h5 className="m-0">PrepMentor AI</h5>
            </div>
            <ul className="nav flex-column mt-3 px-2">
              <SidebarItem name="Dashboard" icon={<FaHome />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
              <SidebarItem name="Department Management" icon={<FaBuilding />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
              <SidebarItem name="Department Admins" icon={<FaUserCheck />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
              <SidebarItem name="Students" icon={<FaUsers />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
              <SidebarItem name="Assessments" icon={<FaClipboardList />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
              <SidebarItem name="Mock Interviews" icon={<FaCalendarAlt />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
              <SidebarItem name="Reports" icon={<FaCogs />} activeItem={activeItem} setActiveItem={setActiveItem} navigate={navigate} />
            </ul>
          </div>
          <div className="p-3 border-top text-center bg-light">
            <button className="btn btn-outline-secondary btn-sm">Settings</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4 bg-light overflow-auto" style={{ minHeight: '100vh' }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold">Welcome, Amelia</h3>
            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', fontSize: '1.25rem' }}>
              A
            </div>
          </div>

          {loading && <div className="alert alert-info">Loading data...</div>}
          {error && <div className="alert alert-danger">Error: {error}</div>}

          <h6 className="text-muted mb-3">Summary</h6>
          <div className="row g-3 mb-4">
            {summaryData.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <div className="text-muted small">{item.title}</div>
                  <div className="h4 fw-bold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <h6 className="text-muted mb-3">Department Summary</h6>
          <div className="mb-3">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search by department or admin name"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="table-responsive mb-5">
            <table className="table table-hover table-bordered bg-white shadow-sm">
              <thead className="table-light">
                <tr>
                  <th>Department Name</th>
                  <th>Assigned Admin</th>
                  <th>No. of Students</th>
                  <th>Assessments Conducted</th>
                  <th>Mock Interviews Conducted</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">No departments available</td>
                  </tr>
                ) : (
                  departments.map((dept) => (
                    <tr key={dept.id}>
                      <td>{dept.departmentName}</td>
                      <td>{dept.assignedAdmins}</td>
                      <td>{dept.numberOfStudents}</td>
                      <td>{dept.assessments || 0}</td>
                      <td>{dept.mockInterviews || 0}</td>
                      <td>
                        <span className={`badge ${dept.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                          {dept.status}
                        </span>
                      </td>
                      <td>
                        <div className="btn-group" role="group">
                          <button className="btn btn-sm btn-primary" onClick={() => dispatch(fetchDepartmentByIdRequest(dept.id))}>View</button>
                          <button
                            className="btn btn-sm btn-warning"
                            onClick={() => {
                              setEditData({
                                id: dept.id,
                                departmentName: dept.departmentName,
                                assignedAdmins: dept.assignedAdmins,
                                status: dept.status === "Active"
                              });
                              setShowEditForm(true);
                            }}
                          >
                            Edit
                          </button>
                          {/* ✅ Delete button with dispatch */}
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                              if(window.confirm("Are you sure you want to delete this department?")) {
                                dispatch(deleteDepartmentRequest(dept.id));
                              }
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <h6 className="text-muted mb-3">Upcoming Interviews</h6>
          <div className="table-responsive mb-4">
            <table className="table table-hover table-bordered bg-white shadow-sm">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Student Name</th>
                  <th>Department</th>
                  <th>Assigned Admin</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {interviews.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">No interviews scheduled</td>
                  </tr>
                ) : (
                  interviews.map((interview, index) => (
                    <tr key={index}>
                      <td>{interview.date}</td>
                      <td>{interview.time}</td>
                      <td>{interview.name}</td>
                      <td>{interview.department}</td>
                      <td>{interview.admin}</td>
                      <td><span className="badge bg-secondary">Scheduled</span></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="text-end mb-5">
            <button className="btn btn-outline-primary btn-sm">View All Interviews</button>
          </div>
        </div>

        {/* Edit Modal */}
        {showEditForm && (
          <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Department</h5>
                  <button type="button" className="btn-close" onClick={() => setShowEditForm(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Department Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editData.departmentName}
                      onChange={(e) => setEditData({ ...editData, departmentName: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Assigned Admins</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editData.assignedAdmins}
                      onChange={(e) => setEditData({ ...editData, assignedAdmins: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      value={editData.status ? "Active" : "Inactive"}
                      onChange={(e) => setEditData({ ...editData, status: e.target.value === "Active" })}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(updateDepartmentRequest(editData.id, {
                        departmentName: editData.departmentName,
                        assignedAdmins: editData.assignedAdmins,
                        status: editData.status
                      }));
                      setShowEditForm(false);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const SidebarItem = ({ name, icon, activeItem, setActiveItem, navigate }) => {
  const handleClick = () => {
    setActiveItem(name);
    switch(name) {
      case "Department Management":
        navigate("/Departmentmanger");
        break;
      case "Department Admins":
        navigate("/DepartmentAdmins");
        break;
      case "Students":
        navigate("/Students");
        break;
      case "Assessments":
        navigate("/Assessment");
        break;
      case "Mock Interviews":
        navigate("/Mockinterview");
        break;
      case "Reports":
        navigate("/report");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <li className="nav-item mb-1">
      <button
        className={`nav-link d-flex align-items-center ${activeItem === name ? 'bg-light text-dark' : 'text-muted'}`}
        onClick={handleClick}
        style={{ borderRadius: '0.375rem', padding: '10px' }}
      >
        <span className="me-2">{icon}</span>
        {name}
      </button>
    </li>
  );
};

export default CollegeDepartment;

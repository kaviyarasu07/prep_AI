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
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs, FaCalendarAlt, FaUser } from 'react-icons/fa';
import {
  fetchCollegeSummaryRequest,
  fetchDepartmentByIdRequest,
  searchDepartmentsRequest,
  updateDepartmentRequest,
  deleteDepartmentRequest,   
  fetchCollegeDepartmentsRequest
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
  dispatch(fetchCollegeDepartmentsRequest());
}, [dispatch]);

useEffect(() => {
  if (!loading && departments.length > 0) {
    toast.success("Departments loaded successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  }
  if (error) {
    toast.error("Failed to fetch departments!", {
      position: "top-right",
      autoClose: 2000,
    });
  }
}, [loading, departments, error]);


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
  
 
    <ToastContainer />

      <div className="row vh-100">
        {/* Sidebar */}
        {/* <div className="col-md-2 bg-white border-end d-flex flex-column justify-content-between" style={{ minHeight: '100vh' }}>
          <div>
            <div className="p-3 border-bottom text-center bg-light">
              <h5 className="m-0">PrepMentor AI</h5>
            </div>
            <ul className="nav flex-column mt-3 px-2">
              <SidebarItem name="Dashboard" icon={<FaHome />} activeItem={activeItem} setActiveItem={setActiveItem}  />
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
        </div> */}


{/* Sidebar */}
<div
  className="col-md-2 d-flex flex-column justify-content-between shadow-sm"
  style={{
    backgroundColor: "#ffffff",
    borderRight: "1px solid #dee2e6",
    minHeight: "100vh",
    padding: "0",
  }}
>
  {/* --- Brand Header --- */}
  <div className="p-3 border-bottom text-center" style={{ backgroundColor: "#f8f9fa" }}>
    <h5 className="m-0 fw-bold" style={{ color: "#333" }}>
      PrepMentor AI
    </h5>
  </div>

  {/* --- Navigation Menu --- */}
  <ul className="nav flex-column px-3 py-3" style={{ flex: "1" }}>
  
    <SidebarItem
      name="Department Management"
      icon={<FaBuilding className="me-2 fs-5" />}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
    />
    <SidebarItem
      name="Department Admins"
      icon={<FaUserCheck className="me-2 fs-5" />}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
    />
    <SidebarItem
      name="Students"
      icon={<FaUsers className="me-2 fs-5" />}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
    />
    <SidebarItem
      name="Assessments"
      icon={<FaClipboardList className="me-2 fs-5" />}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
    />
    <SidebarItem
      name="Mock Interviews"
      icon={<FaCalendarAlt className="me-2 fs-5" />}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
    />
    <SidebarItem
      name="Reports"
      icon={<FaCogs className="me-2 fs-5" />}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
    />
  </ul>

  {/* --- Bottom Settings Button --- */}
  <div className="border-top text-center py-3" style={{ backgroundColor: "#f8f9fa" }}>
    <button
      className="btn btn-outline-secondary btn-sm px-4"
      style={{
        borderRadius: "20px",
        fontWeight: "500",
      }}
    >
      <i className="bi bi-gear me-2"></i>Settings
    </button>
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
    <div className="mb-3" style={{ maxWidth: "300px" }}>
  <div className="input-group shadow-sm rounded-pill border">
    <span className="input-group-text bg-white border-0 rounded-start-pill ps-2">
      <i className="bi bi-search text-secondary"></i>
    </span>
    <input
      type="text"
      className="form-control border-0 rounded-end-pill py-1"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
      style={{
        fontSize: "14px",
        height: "36px",
        backgroundColor: "#f8f9fa",
        color: "#333",
        transition: "all 0.3s ease",
      }}
    />
  </div>
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
  {Array.isArray(departments) && departments.length > 0 ? (
    departments.map((dept) => (
      <tr key={dept.id}>
        <td>{dept.departmentName}</td>
        <td>{dept.assignedAdmins}</td>
        <td>{dept.numberOfStudents}</td>
        <td>{dept.assessments || 0}</td>
        <td>{dept.mockInterviews || 0}</td>
        <td>
          <span className={`badge ${dept.status === "Active" ? "bg-primary" : "bg-secondary"}`}>
            {dept.status}
          </span>
        </td>
<td className="text-center">
  <div className="dropdown">
    {/* --- Three Dots Button --- */}
    <button
      className="btn btn-light btn-sm border-0 shadow-sm"
      type="button"
      id={`dropdownMenuButton${dept.id}`}
      data-bs-toggle="dropdown"
      aria-expanded="false"
      style={{
        borderRadius: "50%",
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i className="bi bi-three-dots-vertical fs-5 text-secondary"></i>
    </button>

    {/* --- Dropdown Menu --- */}
    <ul
      className="dropdown-menu dropdown-menu-end shadow-lg border-0 p-2"
      aria-labelledby={`dropdownMenuButton${dept.id}`}
      style={{
        borderRadius: "12px",
        minWidth: "160px",
        backgroundColor: "rgba(248, 244, 244, 0.95)",
        fontSize:"15px"
      }}
    >
      {/* View */}
      <li>
        <button
          className="dropdown-item d-flex align-items-center rounded-3 mb-1"
          style={{
            color: "#111213ff",
            fontWeight: 500,
          }}
          onClick={() => dispatch(fetchDepartmentByIdRequest(dept.id))}
        >
          <i className="bi bi-eye me-2 fs-6 text-primary"></i>
          View
        </button>
      </li>

      {/* Edit */}
      <li>
        <button
          className="dropdown-item d-flex align-items-center rounded-3 mb-1"
          style={{
            color: "#151411ff",
            fontWeight: 500,
          }}
          onClick={() => {
            setEditData({
              id: dept.id,
              departmentName: dept.departmentName,
              assignedAdmins: dept.assignedAdmins,
              status: dept.status === "Active",
            });
            setShowEditForm(true);
          }}
        >
          <i className="bi bi-pencil-square me-2 fs-6 text-warning"></i>
          Edit
        </button>
      </li>

      {/* Delete */}
      <li>
        <button
          className="dropdown-item d-flex align-items-center rounded-3 mb-1"
          style={{
            color: "#020202ff",
            fontWeight: 500,
          }}
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this department?")) {
              dispatch(deleteDepartmentRequest(dept.id));
            }
          }}
        >
          <i className="bi bi-trash3 me-2 fs-6 text-danger"></i>
          Delete
        </button>
      </li>

      {/* Divider */}
      <li>
        <hr className="dropdown-divider" />
      </li>

      {/* Cancel */}
      <li>
        <button
          className="dropdown-item d-flex align-items-center rounded-3"
          style={{
            color: "#090a0cff",
            fontWeight: 500,
          }}
        >
          <i className="bi bi-x-circle me-2 fs-6 text-secondary"></i>
          Cancel
        </button>
      </li>
    </ul>
  </div>
</td>


      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7" className="text-center">No departments available</td>
    </tr>
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
// const SidebarItem = ({ name, icon, activeItem, setActiveItem }) => {
//   const navigate = useNavigate(); // ✅ hook call

//   const handleClick = () => {
//     setActiveItem(name);
//     switch(name) {
//       case "Department Management":
//         navigate("/Departmentmanger");
//         break;
//       case "Department Admins":
//         navigate("/Departmentadmin");
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

const SidebarItem = ({ name, icon, activeItem, setActiveItem }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setActiveItem(name);

    // ✅ When clicking Department Management
    if (name === "Department Management") {
      toast.success("Navigating to Department Management...", {
        position: "top-right",
        autoClose: 2000, // toast visible for 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });

      // 👇 Navigate only after toast disappears
      setTimeout(() => {
        navigate("/Departmentmanger");
      }, 2000);
      return; // stop here so it doesn’t go to switch below
    }

    // ✅ Navigation for other menu items
    switch (name) {
      case "Department Admins":
        navigate("/Departmentadmin");
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
        className={`nav-link d-flex align-items-center ${
          activeItem === name ? "bg-light text-dark fw-semibold shadow-sm" : "text-muted"
        }`}
        onClick={handleClick}
        style={{
          borderRadius: "0.5rem",
          padding: "10px 12px",
          transition: "0.3s",
        }}
      >
        <span className="me-2">{icon}</span>
        {name}
      </button>
    </li>
  );
};


// Full Sidebar Example
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");

  const menuItems = [
    { name: "Department Management", icon: <FaBuilding /> },
    { name: "Department Admins", icon: <FaUser/> },
    { name: "Students", icon: <FaBook /> },
    { name: "Assessments", icon: <FaBook /> },
    { name: "Mock Interviews", icon: <FaBook /> },
    { name: "Reports", icon: <FaBook /> },
  ];

  return (
    <ul className="nav flex-column">
      {menuItems.map((item, idx) => (
        <SidebarItem
          key={idx}
          name={item.name}
          icon={item.icon}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ))}
    </ul>
  );
};


export default CollegeDepartment;
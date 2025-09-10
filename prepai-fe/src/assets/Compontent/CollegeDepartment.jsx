// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function CollegeDepartment() {

//   // Summary data
//   const summaryData = [
//     { title: "Total Departments", value: "12" },
//     { title: "Total Students", value: "450" },
//     { title: "Total Department Admins", value: "10" },
//     { title: "Completed Assessments", value: "30" }
//   ];

//   // Department data
//   const departments = [
//     {
//       name: "Computer Science",
//       admin: "Dr. Eleanor Bennett",
//       students: 85,
//       assessments: 120,
//       mockInterviews: 60,
//       status: "Active"
//     },
//     {
//       name: "Electrical Engineering",
//       admin: "Dr. Samuel Carter",
//       students: 70,
//       assessments: 105,
//       mockInterviews: 55,
//       status: "Active"
//     },
//     {
//       name: "Mechanical Engineering",
//       admin: "Dr. Olivia Davis",
//       students: 90,
//       assessments: 130,
//       mockInterviews: 65,
//       status: "Active"
//     },
//     {
//       name: "Civil Engineering",
//       admin: "Dr. Ethan Foster",
//       students: 65,
//       assessments: 95,
//       mockInterviews: 50,
//       status: "Active"
//     },
//     {
//       name: "Chemical Engineering",
//       admin: "Dr. Sophia Green",
//       students: 80,
//       assessments: 115,
//       mockInterviews: 60,
//       status: "Active"
//     }
//   ];

//   // Interview data
//   const interviews = [
//     { date: "2024-07-20", time: "10:00 AM", name: "Liam Harper", department: "Computer Science", admin: "Dr. Eleanor Bennett" },
//     { date: "2024-07-20", time: "11:00 AM", name: "Ava Montgomery", department: "Electrical Engineering", admin: "Dr. Samuel Carter" },
//     { date: "2024-07-21", time: "09:00 AM", name: "Noah Hayes", department: "Mechanical Engineering", admin: "Dr. Olivia Davis" },
//     { date: "2024-07-21", time: "10:00 AM", name: "Isabella Reed", department: "Civil Engineering", admin: "Dr. Ethan Foster" },
//     { date: "2024-07-22", time: "11:00 AM", name: "Jackson Cole", department: "Chemical Engineering", admin: "Dr. Sophia Green" }
//   ];

//   return (
//     <div className="container-fluid">
//       <div className="row vh-100">
//         {/* Sidebar */}
//         <div className="col-2 bg-light border-end position-relative">
//           <Sidebar />
//         </div>

//         {/* Main content */}
//         <div className="col-10 p-4 overflow-auto">
//           <Header name="Amelia" />
//           <div className="row my-4">
//             {summaryData.map((item, index) => (
//               <SummaryCard key={index} title={item.title} value={item.value} />
//             ))}
//           </div>

//           <h5>Department Summary</h5>
//           <DepartmentTable departments={departments} />

//           <h5 className="mt-5">Upcoming Interviews</h5>
//           <UpcomingInterviews interviews={interviews} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Sidebar Component
// const Sidebar = () => (
//   <div>
//     <h5 className="p-3">PrepMentor AI</h5>
//     <ul className="list-group list-group-flush">
//       <li className="list-group-item">Dashboard</li>
//       <li className="list-group-item">Department Management</li>
//       <li className="list-group-item">Department Admins</li>
//       <li className="list-group-item">Students</li>
//       <li className="list-group-item">Assessments</li>
//       <li className="list-group-item">Mock Interviews</li>
//       <li className="list-group-item">Reports</li>
//     </ul>
//     <div className="position-absolute bottom-0 mb-3 w-100 text-center">
//       <button className="btn btn-outline-secondary btn-sm">Settings</button>
//     </div>
//   </div>
// );

// // Header Component
// const Header = ({ name }) => (
//   <div className="d-flex justify-content-between align-items-center mb-4">
//     <h4>Welcome, {name}</h4>
//   </div>
// );

// // SummaryCard Component
// const SummaryCard = ({ title, value }) => (
//   <div className="col-md-3 mb-3">
//     <div className="card text-center shadow-sm">
//       <div className="card-body">
//         <h6>{title}</h6>
//         <h4>{value}</h4>
//       </div>
//     </div>
//   </div>
// );

// // DepartmentTable Component
// const DepartmentTable = ({ departments }) => (
//   <div className="table-responsive">
//     <table className="table table-bordered table-striped">
//       <thead>
//         <tr>
//           <th>Department Name</th>
//           <th>Assigned Admin</th>
//           <th>No. of Students</th>
//           <th>Assessments Conducted</th>
//           <th>Mock Interviews Conducted</th>
//           <th>Status</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {departments.map((dept, index) => (
//           <tr key={index}>
//             <td>{dept.name}</td>
//             <td>{dept.admin}</td>
//             <td>{dept.students}</td>
//             <td>{dept.assessments}</td>
//             <td>{dept.mockInterviews}</td>
//             <td><span className="badge bg-success">{dept.status}</span></td>
//             <td>
//               <button className="btn btn-link btn-sm">View</button>
//               <button className="btn btn-link btn-sm">Edit</button>
//               <button className="btn btn-link btn-sm text-danger">Remove</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// // UpcomingInterviews Component
// const UpcomingInterviews = ({ interviews }) => (
//   <div className="table-responsive">
//     <table className="table table-bordered table-striped">
//       <thead>
//         <tr>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Student Name</th>
//           <th>Department</th>
//           <th>Assigned Admin</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {interviews.map((interview, index) => (
//           <tr key={index}>
//             <td>{interview.date}</td>
//             <td>{interview.time}</td>
//             <td>{interview.name}</td>
//             <td>{interview.department}</td>
//             <td>{interview.admin}</td>
//             <td><span className="badge bg-secondary">Scheduled</span></td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// export default CollegeDepartment;



// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs } from 'react-icons/fa';

// function CollegeDepartment() {

//   const summaryData = [
//     { title: "Total Departments", value: "12", icon: <FaBuilding size={25} /> },
//     { title: "Total Students", value: "450", icon: <FaUsers size={25} /> },
//     { title: "Total Department Admins", value: "10", icon: <FaUserCheck size={25} /> },
//     { title: "Completed Assessments", value: "30", icon: <FaClipboardList size={25} /> }
//   ];

//   const departments = [
//     { name: "Computer Science", admin: "Dr. Eleanor Bennett", students: 85, assessments: 120, mockInterviews: 60, status: "Active" },
//     { name: "Electrical Engineering", admin: "Dr. Samuel Carter", students: 70, assessments: 105, mockInterviews: 55, status: "Active" },
//     { name: "Mechanical Engineering", admin: "Dr. Olivia Davis", students: 90, assessments: 130, mockInterviews: 65, status: "Active" },
//     { name: "Civil Engineering", admin: "Dr. Ethan Foster", students: 65, assessments: 95, mockInterviews: 50, status: "Active" },
//     { name: "Chemical Engineering", admin: "Dr. Sophia Green", students: 80, assessments: 115, mockInterviews: 60, status: "Active" }
//   ];

//   const interviews = [
//     { date: "2024-07-20", time: "10:00 AM", name: "Liam Harper", department: "Computer Science", admin: "Dr. Eleanor Bennett" },
//     { date: "2024-07-20", time: "11:00 AM", name: "Ava Montgomery", department: "Electrical Engineering", admin: "Dr. Samuel Carter" },
//     { date: "2024-07-21", time: "09:00 AM", name: "Noah Hayes", department: "Mechanical Engineering", admin: "Dr. Olivia Davis" },
//     { date: "2024-07-21", time: "10:00 AM", name: "Isabella Reed", department: "Civil Engineering", admin: "Dr. Ethan Foster" },
//     { date: "2024-07-22", time: "11:00 AM", name: "Jackson Cole", department: "Chemical Engineering", admin: "Dr. Sophia Green" }
//   ];

//   return (
//     <div className="container-fluid">
//       <div className="row vh-100">
//         {/* Sidebar */}
//         <div className="col-2 bg-light border-end position-relative d-flex flex-column">
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <div className="col-10 p-4 overflow-auto">
//           <Header name="Amelia" />

//           {/* Summary Cards */}
//           <div className="row my-4">
//             {summaryData.map((item, index) => (
//               <SummaryCard key={index} title={item.title} value={item.value} icon={item.icon} />
//             ))}
//           </div>

//           {/* Department Table */}
//           <h5 className="mt-4 mb-3">Department Summary</h5>
//           <DepartmentTable departments={departments} />

//           {/* Upcoming Interviews */}
//           <h5 className="mt-5 mb-3">Upcoming Interviews</h5>
//           <UpcomingInterviews interviews={interviews} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Sidebar Component
// const Sidebar = () => (
//   <div className="d-flex flex-column h-100">
//     <div className="p-3 text-center bg-primary text-white">
//       <h5>PrepMentor AI</h5>
//     </div>
//     <ul className="list-group list-group-flush flex-grow-1">
//       <li className="list-group-item d-flex align-items-center"><FaHome className="me-2" /> Dashboard</li>
//       <li className="list-group-item d-flex align-items-center"><FaBuilding className="me-2" /> Department Management</li>
//       <li className="list-group-item d-flex align-items-center"><FaUserCheck className="me-2" /> Department Admins</li>
//       <li className="list-group-item d-flex align-items-center"><FaUsers className="me-2" /> Students</li>
//       <li className="list-group-item d-flex align-items-center"><FaClipboardList className="me-2" /> Assessments</li>
//       <li className="list-group-item d-flex align-items-center"><FaClipboardList className="me-2" /> Mock Interviews</li>
//       <li className="list-group-item d-flex align-items-center"><FaCogs className="me-2" /> Reports</li>
//     </ul>
//     <div className="p-3 text-center">
//       <button className="btn btn-outline-secondary btn-sm">Settings</button>
//     </div>
//   </div>
// );

// // Header Component
// const Header = ({ name }) => (
//   <div className="d-flex justify-content-between align-items-center mb-4">
//     <h4>Welcome, {name}</h4>
//     <button className="btn btn-outline-primary btn-sm">Profile</button>
//   </div>
// );

// // SummaryCard Component
// const SummaryCard = ({ title, value, icon }) => (
//   <div className="col-md-3 mb-3">
//     <div className="card shadow-sm h-100">
//       <div className="card-body d-flex align-items-center">
//         <div className="me-3 text-primary">{icon}</div>
//         <div>
//           <h6 className="text-muted">{title}</h6>
//           <h4>{value}</h4>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // DepartmentTable Component
// const DepartmentTable = ({ departments }) => (
//   <div className="table-responsive">
//     <table className="table table-bordered table-hover align-middle">
//       <thead className="table-light">
//         <tr>
//           <th>Department Name</th>
//           <th>Assigned Admin</th>
//           <th>No. of Students</th>
//           <th>Assessments Conducted</th>
//           <th>Mock Interviews Conducted</th>
//           <th>Status</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {departments.map((dept, index) => (
//           <tr key={index}>
//             <td>{dept.name}</td>
//             <td>{dept.admin}</td>
//             <td>{dept.students}</td>
//             <td>{dept.assessments}</td>
//             <td>{dept.mockInterviews}</td>
//             <td>
//               <span className={`badge ${dept.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
//                 {dept.status}
//               </span>
//             </td>
//             <td>
//               <button className="btn btn-outline-primary btn-sm me-1">View</button>
//               <button className="btn btn-outline-warning btn-sm me-1">Edit</button>
//               <button className="btn btn-outline-danger btn-sm">Remove</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// // UpcomingInterviews Component
// const UpcomingInterviews = ({ interviews }) => (
//   <div className="table-responsive">
//     <table className="table table-bordered table-hover align-middle">
//       <thead className="table-light">
//         <tr>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Student Name</th>
//           <th>Department</th>
//           <th>Assigned Admin</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {interviews.map((interview, index) => (
//           <tr key={index}>
//             <td>{interview.date}</td>
//             <td>{interview.time}</td>
//             <td>{interview.name}</td>
//             <td>{interview.department}</td>
//             <td>{interview.admin}</td>
//             <td><span className="badge bg-secondary">Scheduled</span></td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// export default CollegeDepartment;

// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs } from 'react-icons/fa';
 
// function CollegeDepartment() {
//   const [activeItem, setActiveItem] = useState("Dashboard");
 
//   const summaryData = [
//     { title: "Total Departments", value: "12", icon: <FaBuilding size={22} /> },
//     { title: "Total Students", value: "450", icon: <FaUsers size={22} /> },
//     { title: "Total Department Admins", value: "10", icon: <FaUserCheck size={22} /> },
//     { title: "Completed Assessments", value: "30", icon: <FaClipboardList size={22} /> }
//   ];
 
//   const departments = [
//     { name: "Computer Science", admin: "Dr. Eleanor Bennett", students: 85, assessments: 120, mockInterviews: 60, status: "Active" },
//     { name: "Electrical Engineering", admin: "Dr. Samuel Carter", students: 70, assessments: 105, mockInterviews: 55, status: "Active" },
//     { name: "Mechanical Engineering", admin: "Dr. Olivia Davis", students: 90, assessments: 130, mockInterviews: 65, status: "Active" },
//     { name: "Civil Engineering", admin: "Dr. Ethan Foster", students: 65, assessments: 95, mockInterviews: 50, status: "Active" },
//     { name: "Chemical Engineering", admin: "Dr. Sophia Green", students: 80, assessments: 115, mockInterviews: 60, status: "Active" }
//   ];
 
//   const interviews = [
//     { date: "2024-07-20", time: "10:00 AM", name: "Liam Harper", department: "Computer Science", admin: "Dr. Eleanor Bennett" },
//     { date: "2024-07-20", time: "11:00 AM", name: "Ava Montgomery", department: "Electrical Engineering", admin: "Dr. Samuel Carter" },
//     { date: "2024-07-21", time: "09:00 AM", name: "Noah Hayes", department: "Mechanical Engineering", admin: "Dr. Olivia Davis" },
//     { date: "2024-07-21", time: "10:00 AM", name: "Isabella Reed", department: "Civil Engineering", admin: "Dr. Ethan Foster" },
//     { date: "2024-07-22", time: "11:00 AM", name: "Jackson Cole", department: "Chemical Engineering", admin: "Dr. Sophia Green" }
//   ];
 
//   return (
// <div className="container-fluid">
// <div className="row vh-100">
//         {/* Sidebar */}
// <div className="col-2 bg-white border-end p-0">
// <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
// </div>
 
//         {/* Main Content */}
// <div className="col-10 p-4 bg-light overflow-auto">
// <Header name="Amelia" />
 
//           {/* Summary Cards */}
// <div className="row my-4">
//             {summaryData.map((item, index) => (
// <SummaryCard key={index} title={item.title} value={item.value} icon={item.icon} />
//             ))}
// </div>
 
//           {/* Department Table */}
// <h5 className="mt-4 mb-3">Department Summary</h5>
// <DepartmentTable departments={departments} />
 
//           {/* Upcoming Interviews */}
// <h5 className="mt-5 mb-3">Upcoming Interviews</h5>
// <UpcomingInterviews interviews={interviews} />
// </div>
// </div>
// </div>
//   );
// }
 
// // Sidebar Component
// const Sidebar = ({ activeItem, setActiveItem }) => {
//   const menuItems = [
//     { name: "Dashboard", icon: <FaHome /> },
//     { name: "Department Management", icon: <FaBuilding /> },
//     { name: "Department Admins", icon: <FaUserCheck /> },
//     { name: "Students", icon: <FaUsers /> },
//     { name: "Assessments", icon: <FaClipboardList /> },
//     { name: "Mock Interviews", icon: <FaClipboardList /> },
//     { name: "Reports", icon: <FaCogs /> }
//   ];
 
//   return (
// <div className="d-flex flex-column h-100">
// <div className="p-3 text-center bg-primary text-white">
// <h5 className="m-0">PrepMentor AI</h5>
// </div>
// <ul className="list-group list-group-flush flex-grow-1">
//         {menuItems.map((item, index) => (
// <li
//             key={index}
//             className={`list-group-item border-0 d-flex align-items-center ${activeItem === item.name ? 'bg-primary text-white' : ''}`}
//             style={{ cursor: 'pointer' }}
//             onClick={() => setActiveItem(item.name)}
// >
// <span className="me-2">{item.icon}</span> {item.name}
// </li>
//         ))}
// </ul>
// <div className="p-3 text-center border-top">
// <button className="btn btn-outline-secondary btn-sm w-100">
// <FaCogs className="me-1" /> Settings
// </button>
// </div>
// </div>
//   );
// };
 
// // Header Component
// const Header = ({ name }) => (
// <div className="d-flex justify-content-between align-items-center mb-4">
// <h4>Welcome, {name}</h4>
// <div className="d-flex align-items-center">
// <button className="btn btn-light border rounded-circle me-2">
// <i className="bi bi-person-fill"></i>
// </button>
// </div>
// </div>
// );
 
// // SummaryCard Component
// const SummaryCard = ({ title, value, icon }) => (
// <div className="col-md-3 mb-3">
// <div className="card shadow-sm h-100 border-0 rounded-3">
// <div className="card-body d-flex align-items-center">
// <div className="me-3 text-primary">{icon}</div>
// <div>
// <h6 className="text-muted mb-1">{title}</h6>
// <h4 className="mb-0">{value}</h4>
// </div>
// </div>
// </div>
// </div>
// );
 
// // DepartmentTable Component
// const DepartmentTable = ({ departments }) => (
// <div className="table-responsive">
// <table className="table table-bordered table-hover align-middle bg-white shadow-sm">
// <thead className="table-light">
// <tr>
// <th>Department Name</th>
// <th>Assigned Admin</th>
// <th>No. of Students</th>
// <th>Assessments Conducted</th>
// <th>Mock Interviews Conducted</th>
// <th>Status</th>
// <th>Actions</th>
// </tr>
// </thead>
// <tbody>
//         {departments.map((dept, index) => (
// <tr key={index}>
// <td>{dept.name}</td>
// <td>{dept.admin}</td>
// <td>{dept.students}</td>
// <td>{dept.assessments}</td>
// <td>{dept.mockInterviews}</td>
// <td>
// <span className={`badge ${dept.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
//                 {dept.status}
// </span>
// </td>
// <td>
// <a href="#!" className="text-primary me-2">View</a>
// <a href="#!" className="text-warning me-2">Edit</a>
// <a href="#!" className="text-danger">Remove</a>
// </td>
// </tr>
//         ))}
// </tbody>
// </table>
// </div>
// );
 
// // UpcomingInterviews Component
// const UpcomingInterviews = ({ interviews }) => (
// <div className="table-responsive">
// <table className="table table-bordered table-hover align-middle bg-white shadow-sm">
// <thead className="table-light">
// <tr>
// <th>Date</th>
// <th>Time</th>
// <th>Student Name</th>
// <th>Department</th>
// <th>Assigned Admin</th>
// <th>Status</th>
// </tr>
// </thead>
// <tbody>
//         {interviews.map((interview, index) => (
// <tr key={index}>
// <td>{interview.date}</td>
// <td>{interview.time}</td>
// <td>{interview.name}</td>
// <td>{interview.department}</td>
// <td>{interview.admin}</td>
// <td><span className="badge bg-secondary">Scheduled</span></td>
// </tr>
//         ))}
// </tbody>
// </table>
// <div className="text-end mt-2">
// <button className="btn btn-outline-primary btn-sm">View All</button>
// </div>
// </div>
// );
 
// export default CollegeDepartment;


// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs, FaEllipsisH, FaEllipsisV } from 'react-icons/fa';

// function CollegeDepartment() {
//   const [activeItem, setActiveItem] = useState("Dashboard");

//   const summaryData = [
//     { title: "Total Departments", value: "12", icon: <FaBuilding size={22} /> },
//     { title: "Total Students", value: "450", icon: <FaUsers size={22} /> },
//     { title: "Total Department Admins", value: "10", icon: <FaUserCheck size={22} /> },
//     { title: "Completed Assessments", value: "30", icon: <FaClipboardList size={22} /> }
//   ];

//   const departments = [
//     { name: "Computer Science", admin: "Dr. Eleanor Bennett", students: 85, assessments: 120, mockInterviews: 60, status: "Active" },
//     { name: "Electrical Engineering", admin: "Dr. Samuel Carter", students: 70, assessments: 105, mockInterviews: 55, status: "Active" },
//     { name: "Mechanical Engineering", admin: "Dr. Olivia Davis", students: 90, assessments: 130, mockInterviews: 65, status: "Active" },
//     { name: "Civil Engineering", admin: "Dr. Ethan Foster", students: 65, assessments: 95, mockInterviews: 50, status: "Active" },
//     { name: "Chemical Engineering", admin: "Dr. Sophia Green", students: 80, assessments: 115, mockInterviews: 60, status: "Active" }
//   ];

//   const interviews = [
//     { date: "2024-07-20", time: "10:00 AM", name: "Liam Harper", department: "Computer Science", admin: "Dr. Eleanor Bennett" },
//     { date: "2024-07-20", time: "11:00 AM", name: "Ava Montgomery", department: "Electrical Engineering", admin: "Dr. Samuel Carter" },
//     { date: "2024-07-21", time: "09:00 AM", name: "Noah Hayes", department: "Mechanical Engineering", admin: "Dr. Olivia Davis" },
//     { date: "2024-07-21", time: "10:00 AM", name: "Isabella Reed", department: "Civil Engineering", admin: "Dr. Ethan Foster" },
//     { date: "2024-07-22", time: "11:00 AM", name: "Jackson Cole", department: "Chemical Engineering", admin: "Dr. Sophia Green" }
//   ];

//   return (
//     <div className="container-fluid">
//       <div className="row vh-100">
//         {/* Sidebar */}
//         <div className="col-auto p-0">
//           <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
//         </div>

//         {/* Main Content */}
//        <div className="col p-4 bg-light overflow-auto" style={{ minHeight: '100vh' }}>
//   {/* Header Section */}
//   <Header name="Amelia" />

//   {/* Summary Cards */}
//   <div className="row g-3 my-4">
//     {summaryData.map((item, index) => (
//       <SummaryCard key={index} title={item.title} value={item.value} icon={item.icon} />
//     ))}
//   </div>

//   {/* Department Summary Table */}
//   <h5 className="mt-5 mb-3 text-primary fw-bold">Department Summary</h5>
//   <DepartmentTable departments={departments} />

//   {/* Upcoming Interviews Section */}
//   <h5 className="mt-5 mb-3 text-primary fw-bold">Upcoming Interviews</h5>
//   <UpcomingInterviews interviews={interviews} />
// </div>

//       </div>
//     </div>
//   );
// }

// const Sidebar = ({ activeItem, setActiveItem }) => {
//   const menuItems = [
//     { name: "Dashboard", icon: <FaHome /> },
//     { name: "Departments", icon: <FaBuilding /> },
//     { name: "Admins", icon: <FaUserCheck /> },
//     { name: "Students", icon: <FaUsers /> },
//     { name: "Assessments", icon: <FaClipboardList /> },
//     { name: "Reports", icon: <FaCogs /> }
//   ];

//   return (
//     <div className="d-flex flex-column " style={{ width: '180px',height:"900px", backgroundColor: '#6c757d', color: 'white' }}>
//       <div className="p-3 text-center border-bottom border-dark">
//         <h6 className="m-0">PrepMentor</h6>
//       </div>
//       <ul className="list-group list-group-flush mt-3">
//         {menuItems.map((item, index) => (
//           <li
//             key={index}
//             className={`list-group-item border-0 d-flex align-items-center px-3 py-2 ${activeItem === item.name ? 'rounded' : ''}`}
//             style={{
//               cursor: 'pointer',
//               backgroundColor: activeItem === item.name ? '#5a6268' : 'transparent',
//               color: 'white'
//             }}
//             onClick={() => setActiveItem(item.name)}
//           >
//             <span className="me-2">{item.icon}</span>
//             <span style={{ fontSize: '0.9rem' }}>{item.name}</span>
//           </li>
//         ))}
//       </ul>
//       <div className="mt-auto p-3 text-center border-top border-dark">
//         <button className="btn btn-outline-light btn-sm w-100">
//           <FaCogs className="me-1" /> Settings
//         </button>
//       </div>
//     </div>
//   );
// };



// const Header = ({ name }) => (
//   <div className="d-flex justify-content-between align-items-center mb-4">
//     <h4>Welcome, {name}</h4>
//     <div className="d-flex align-items-center">
//       <button className="btn btn-light border rounded-circle me-2">
//         <FaUserCheck />
//       </button>
//     </div>
//   </div>
// );


// const SummaryCard = ({ title, value, icon }) => (
//   <div className="col-md-3 mb-3">
//     <div className="card shadow-sm h-100 border-0 rounded-3">
//       <div className="card-body d-flex align-items-center">
//         <div className="me-3 text-primary fs-3">{icon}</div>
//         <div>
//           <h6 className="text-muted mb-1">{title}</h6>
//           <h4 className="mb-0">{value}</h4>
//         </div>
//       </div>
//     </div>
//   </div>
// );




// const DepartmentTable = ({ departments }) => (
//   <div className="table-responsive">
//     <table className="table table-bordered table-hover align-middle bg-white shadow-sm">
//       <thead className="table-light">
//         <tr>
//           <th>Department Name</th>
//           <th>Assigned Admin</th>
//           <th>No. of Students</th>
//           <th>Assessments Conducted</th>
//           <th>Mock Interviews</th>
//           <th>Status</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {departments.map((dept, index) => (
//           <tr key={index}>
//             <td>{dept.name}</td>
//             <td>{dept.admin}</td>
//             <td>{dept.students}</td>
//             <td>{dept.assessments}</td>
//             <td>{dept.mockInterviews}</td>
//             <td>
//               <span className={`badge ${dept.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
//                 {dept.status}
//               </span>
//             </td>
//             <td>
//               <div className="dropdown">
//                 <button 
//                   className="btn btn-sm p-0" 
//                   type="button" 
//                   id={`dropdownMenu${index}`} 
//                   data-bs-toggle="dropdown" 
//                   aria-expanded="false"
//                   style={{ background: 'none', marginLeft:"20px", border: 'none', color: '#000' ,fontFamily: "Helvetica, Arial, sans-serif"}}
//                 >
//                   <FaEllipsisV />
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby={`dropdownMenu${index}`}>
//                   <li><a className="dropdown-item" href="#!">View</a></li>
//                   <li><a className="dropdown-item" href="#!">Edit</a></li>
//                   <li><a className="dropdown-item text-danger" href="#!">Remove</a></li>
//                 </ul>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// const UpcomingInterviews = ({ interviews }) => (
//   <div className="table-responsive">
//     <table className="table table-bordered table-hover align-middle bg-white shadow-sm">
//       <thead className="table-light">
//         <tr>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Student Name</th>
//           <th>Department</th>
//           <th>Assigned Admin</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {interviews.map((interview, index) => (
//           <tr key={index}>
//             <td>{interview.date}</td>
//             <td>{interview.time}</td>
//             <td>{interview.name}</td>
//             <td>{interview.department}</td>
//             <td>{interview.admin}</td>
//             <td><span className="badge bg-secondary">Scheduled</span></td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     <div className="text-end mt-2">
//       <button className="btn btn-outline-primary btn-sm">View All</button>
//     </div>
//   </div>
// );

// export default CollegeDepartment;
   



// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs, FaCalendarAlt } from 'react-icons/fa';

// function CollegeDepartment() {
//   const [activeItem, setActiveItem] = useState("Dashboard");

//   const summaryData = [
//     { title: "Total Departments", value: "12" },
//     { title: "Total Students", value: "450" },
//     { title: "Total Department Admins", value: "10" },
//     { title: "Completed Assessments", value: "30" }
//   ];

//   const departments = [
//     { name: "Computer Science", admin: "Dr. Eleanor Bennett", students: 85, assessments: 120, mockInterviews: 60, status: "Active" },
//     { name: "Electrical Engineering", admin: "Dr. Samuel Carter", students: 70, assessments: 105, mockInterviews: 55, status: "Active" },
//     { name: "Mechanical Engineering", admin: "Dr. Olivia Davis", students: 90, assessments: 130, mockInterviews: 65, status: "Active" },
//     { name: "Civil Engineering", admin: "Dr. Ethan Foster", students: 65, assessments: 95, mockInterviews: 50, status: "Active" },
//     { name: "Chemical Engineering", admin: "Dr. Sophia Green", students: 80, assessments: 115, mockInterviews: 60, status: "Active" }
//   ];

//   const interviews = [
//     { date: "2024-07-20", time: "10:00 AM", name: "Liam Harper", department: "Computer Science", admin: "Dr. Eleanor Bennett" },
//     { date: "2024-07-20", time: "11:00 AM", name: "Ava Montgomery", department: "Electrical Engineering", admin: "Dr. Samuel Carter" },
//     { date: "2024-07-21", time: "09:00 AM", name: "Noah Hayes", department: "Mechanical Engineering", admin: "Dr. Olivia Davis" },
//     { date: "2024-07-21", time: "10:00 AM", name: "Isabella Reed", department: "Civil Engineering", admin: "Dr. Ethan Foster" },
//     { date: "2024-07-22", time: "11:00 AM", name: "Jackson Cole", department: "Chemical Engineering", admin: "Dr. Sophia Green" }
//   ];

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
//               <SidebarItem name="Dashboard" icon={<FaHome />} activeItem={activeItem} setActiveItem={setActiveItem} />
//               <SidebarItem name="Department Management" icon={<FaBuilding />} activeItem={activeItem} setActiveItem={setActiveItem} />
//               <SidebarItem name="Department Admins" icon={<FaUserCheck />} activeItem={activeItem} setActiveItem={setActiveItem} />
//               <SidebarItem name="Students" icon={<FaUsers />} activeItem={activeItem} setActiveItem={setActiveItem} />
//               <SidebarItem name="Assessments" icon={<FaClipboardList />} activeItem={activeItem} setActiveItem={setActiveItem} />
//               <SidebarItem name="Mock Interviews" icon={<FaCalendarAlt />} activeItem={activeItem} setActiveItem={setActiveItem} />
//               <SidebarItem name="Reports" icon={<FaCogs />} activeItem={activeItem} setActiveItem={setActiveItem} />
//             </ul>
//           </div>
//           <div className="p-3 border-top text-center">
//             <button className="btn btn-outline-secondary btn-sm">Settings</button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-md-10 p-4 bg-light overflow-auto" style={{ minHeight: '100vh' }}>
//           {/* Header with profile image */}
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h3>Welcome, Amelia</h3>
//             <img 
//               src="https://via.placeholder.com/40" 
//               alt="Profile" 
//               className="rounded-circle" 
//               style={{ width: '40px', height: '40px' }} 
//             />
//           </div>

//           {/* Summary Cards */}
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

//           {/* Department Summary */}
//           <h6>Department Summary</h6>
//           <div className="mb-3">
//             <input type="text" className="form-control" placeholder="Search by department or admin name" />
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
//                 {departments.map((dept, index) => (
//                   <tr key={index}>
//                     <td>{dept.name}</td>
//                     <td><a href="#!">{dept.admin}</a></td>
//                     <td>{dept.students}</td>
//                     <td>{dept.assessments}</td>
//                     <td>{dept.mockInterviews}</td>
//                     <td><span className={`badge ${dept.status === "Active" ? "bg-success" : "bg-secondary"}`}>{dept.status}</span></td>
//                     <td>
//                       <a href="#!" className="text-decoration-none me-2">View</a>
//                       <a href="#!" className="text-decoration-none me-2">Edit</a>
//                       <a href="#!" className="text-decoration-none text-danger">Remove</a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Upcoming Interviews */}
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
//                 {interviews.map((interview, index) => (
//                   <tr key={index}>
//                     <td>{interview.date}</td>
//                     <td>{interview.time}</td>
//                     <td>{interview.name}</td>
//                     <td>{interview.department}</td>
//                     <td>{interview.admin}</td>
//                     <td><span className="badge bg-secondary">Scheduled</span></td>
//                   </tr>
//                 ))}
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

// const SidebarItem = ({ name, icon, activeItem, setActiveItem }) => (
//   <li className="nav-item">
//     <button
//       className={`nav-link d-flex align-items-center ${activeItem === name ? 'active bg-light text-dark' : 'text-muted'}`}
//       onClick={() => setActiveItem(name)}
//       style={{ borderRadius: '0.375rem' }}
//     >
//       <span className="me-2">{icon}</span>
//       {name}
//     </button>
//   </li>
// );

// export default CollegeDepartment;


import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs, FaCalendarAlt } from 'react-icons/fa';
import { fetchCollegeSummaryRequest, fetchDepartmentsRequest, searchDepartmentsRequest } from "../Redux_saga/Action/College_Action";

function CollegeDepartment() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const dispatch = useDispatch();

  // Safely get college data from Redux
  const collegeData = useSelector((state) => state.collegeData || {});
  const { summary = {}, departments = [], interviews = [], loading = false, error = null } = collegeData;

  // Fetch data when component mounts
  useEffect(() => {
    dispatch(fetchCollegeSummaryRequest());
     
  }, [dispatch]);

   // Fetch data when component mounts
  useEffect(() => {
   
      dispatch(fetchDepartmentsRequest());  //
  }, [dispatch]);

   const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(searchDepartmentsRequest(value)); // call the search API with adminName
  };

  // Correct summaryData mapping
const summaryData = Object.keys(summary || {}).length === 0
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
            <div className="p-3 border-bottom">
              <h5>PrepMentor AI</h5>
            </div>
            <ul className="nav flex-column mt-3">
              <SidebarItem name="Dashboard" icon={<FaHome />} activeItem={activeItem} setActiveItem={setActiveItem} />
              <SidebarItem name="Department Management" icon={<FaBuilding />} activeItem={activeItem} setActiveItem={setActiveItem} />
              <SidebarItem name="Department Admins" icon={<FaUserCheck />} activeItem={activeItem} setActiveItem={setActiveItem} />
              <SidebarItem name="Students" icon={<FaUsers />} activeItem={activeItem} setActiveItem={setActiveItem} />
              <SidebarItem name="Assessments" icon={<FaClipboardList />} activeItem={activeItem} setActiveItem={setActiveItem} />
              <SidebarItem name="Mock Interviews" icon={<FaCalendarAlt />} activeItem={activeItem} setActiveItem={setActiveItem} />
              <SidebarItem name="Reports" icon={<FaCogs />} activeItem={activeItem} setActiveItem={setActiveItem} />
            </ul>
          </div>
          <div className="p-3 border-top text-center">
            <button className="btn btn-outline-secondary btn-sm">Settings</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4 bg-light overflow-auto" style={{ minHeight: '100vh' }}>
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Welcome, Amelia</h3>
            <div 
              className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
            >
              A
            </div>
          </div>

          {/* Loading/Error */}
          {loading && <div className="alert alert-info">Loading data...</div>}
          {error && <div className="alert alert-danger">Error: {error}</div>}

          {/* Summary Cards */}
          <h6>Summary</h6>
          <div className="row g-3 mb-4">
            {summaryData.map((item, index) => (
              <div key={index} className="col-md-3">
                <div className="p-3 bg-white rounded shadow-sm">
                  <div className="text-muted small">{item.title}</div>
                  <div className="h5">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Department Table */}
          <h6>Department Summary</h6>
          <div className="mb-3">
            <input
          type="text"
          className="form-control"
          placeholder="Search by department or admin name"
          onChange={handleSearch}
        />
          </div>
          <div className="table-responsive mb-4">
            <table className="table table-bordered bg-white shadow-sm">
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
  {departments && departments.length > 0 ? (
    departments.map((dept, index) => (
      <tr key={index}>
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
          <a href="#!" className="me-2">View</a>
          <a href="#!" className="me-2">Edit</a>
          <a href="#!" className="text-danger">Remove</a>
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

          {/* Upcoming Interviews Table */}
          <h6>Upcoming Interviews</h6>
          <div className="table-responsive mb-3">
            <table className="table table-bordered bg-white shadow-sm">
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
                ) : interviews.map((interview, index) => (
                  <tr key={index}>
                    <td>{interview.date}</td>
                    <td>{interview.time}</td>
                    <td>{interview.name}</td>
                    <td>{interview.department}</td>
                    <td>{interview.admin}</td>
                    <td><span className="badge bg-secondary">Scheduled</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-end">
            <button className="btn btn-outline-primary btn-sm">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const SidebarItem = ({ name, icon, activeItem, setActiveItem }) => (
  <li className="nav-item">
    <button
      className={`nav-link d-flex align-items-center ${activeItem === name ? 'active bg-light text-dark' : 'text-muted'}`}
      onClick={() => setActiveItem(name)}
      style={{ borderRadius: '0.375rem' }}
    >
      <span className="me-2">{icon}</span>
      {name}
    </button>
  </li>
);

export default CollegeDepartment;

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
   



import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaBuilding, FaUsers, FaClipboardList, FaUserCheck, FaCogs, 
         FaEllipsisV, FaBell, FaSearch, FaChartLine, FaCalendarAlt } from 'react-icons/fa';

function CollegeDepartment() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [showBox, setShowBox] = useState(false); // ✅ State for full screen box

  const summaryData = [
    { title: "Total Departments", value: "12", icon: <FaBuilding size={22} />, color: "primary" },
    { title: "Total Students", value: "450", icon: <FaUsers size={22} />, color: "success" },
    { title: "Department Admins", value: "10", icon: <FaUserCheck size={22} />, color: "warning" },
    { title: "Completed Assessments", value: "30", icon: <FaClipboardList size={22} />, color: "info" }
  ];

  const departments = [
    { name: "Computer Science", admin: "Dr. Eleanor Bennett", students: 85, assessments: 120, mockInterviews: 60, status: "Active" },
    { name: "Electrical Engineering", admin: "Dr. Samuel Carter", students: 70, assessments: 105, mockInterviews: 55, status: "Active" },
    { name: "Mechanical Engineering", admin: "Dr. Olivia Davis", students: 90, assessments: 130, mockInterviews: 65, status: "Active" },
    { name: "Civil Engineering", admin: "Dr. Ethan Foster", students: 65, assessments: 95, mockInterviews: 50, status: "Active" },
    { name: "Chemical Engineering", admin: "Dr. Sophia Green", students: 80, assessments: 115, mockInterviews: 60, status: "Active" }
  ];

  const interviews = [
    { date: "2024-07-20", time: "10:00 AM", name: "Liam Harper", department: "Computer Science", admin: "Dr. Eleanor Bennett" },
    { date: "2024-07-20", time: "11:00 AM", name: "Ava Montgomery", department: "Electrical Engineering", admin: "Dr. Samuel Carter" },
    { date: "2024-07-21", time: "09:00 AM", name: "Noah Hayes", department: "Mechanical Engineering", admin: "Dr. Olivia Davis" },
    { date: "2024-07-21", time: "10:00 AM", name: "Isabella Reed", department: "Civil Engineering", admin: "Dr. Ethan Foster" },
    { date: "2024-07-22", time: "11:00 AM", name: "Jackson Cole", department: "Chemical Engineering", admin: "Dr. Sophia Green" }
  ];

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 vh-100">
        {/* Sidebar */}
        <div className="col-auto p-0">
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>

        {/* Main Content */}
        <div className="col p-0 bg-light overflow-auto" style={{ minHeight: '100vh' }}>
          <Header name="Amelia" />

          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h4 className="fw-bold text-dark">Dashboard Overview</h4>
                <p className="text-muted mb-0">Welcome back, Amelia! Here's what's happening today.</p>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px' }}>
                  <FaCalendarAlt className="text-primary" />
                </button>
                <span className="text-muted">July 19, 2024</span>
              </div>
            </div>

            {/* Button to open full screen box */}
            <button className="btn btn-primary mb-4" onClick={() => setShowBox(true)}>
              Open Full Screen Box
            </button>

            {/* Summary Cards */}
            <div className="row g-4 mb-5">
              {summaryData.map((item, index) => (
                <SummaryCard key={index} title={item.title} value={item.value} icon={item.icon} color={item.color} />
              ))}
            </div>

            {/* Department Summary Table */}
            <div className="card border-0 shadow-sm mb-5">
              <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 text-primary fw-bold">Department Summary</h5>
                <div className="d-flex">
                  <div className="input-group input-group-sm me-2" style={{ width: '200px' }}>
                    <span className="input-group-text bg-transparent border-end-0">
                      <FaSearch className="text-muted" />
                    </span>
                    <input type="text" className="form-control border-start-0" placeholder="Search departments..." />
                  </div>
                  <button className="btn btn-sm btn-outline-primary">
                    Export
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <DepartmentTable departments={departments} />
              </div>
            </div>

            {/* Upcoming Interviews Section */}
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 text-primary fw-bold">Upcoming Interviews</h5>
                <button className="btn btn-sm btn-outline-primary">View All</button>
              </div>
              <div className="card-body p-0">
                <UpcomingInterviews interviews={interviews} />
              </div>
            </div>
          </div>

          {/* ✅ Full Screen Box */}
          {showBox && <FullScreenBox onClose={() => setShowBox(false)} />}
        </div>
      </div>
    </div>
  );
}

// Sidebar component
const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Departments", icon: <FaBuilding /> },
    { name: "Admins", icon: <FaUserCheck /> },
    { name: "Students", icon: <FaUsers /> },
    { name: "Assessments", icon: <FaClipboardList /> },
    { name: "Reports", icon: <FaChartLine /> },
    { name: "Settings", icon: <FaCogs /> }
  ];

  return (
    <div className="d-flex flex-column" style={{ width: '250px', height: '100vh', backgroundColor: '#2c3e50', color: 'white' }}>
      <div className="p-4 text-center border-bottom border-secondary">
        <h5 className="m-0 fw-bold">PrepMentor</h5>
        <small className="text-muted">College Administration Portal</small>
      </div>
      <ul className="list-unstyled mt-3 flex-grow-1">
        {menuItems.map((item, index) => (
          <li key={index} className="px-3 py-1">
            <div
              className={`d-flex align-items-center px-3 py-3 rounded ${activeItem === item.name ? 'bg-primary' : 'hover-bg-dark'}`}
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveItem(item.name)}
            >
              <span className="me-3">{item.icon}</span>
              <span style={{ fontSize: '0.95rem' }}>{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="p-4 text-center border-top border-secondary">
        <div className="d-flex align-items-center justify-content-center mb-2">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <FaUserCheck className="text-white" />
          </div>
          <div className="ms-2 text-start">
            <p className="mb-0 fw-bold">Amelia</p>
            <small className="text-muted">Admin</small>
          </div>
        </div>
        <button className="btn btn-outline-light btn-sm w-100">
          <FaCogs className="me-1" /> Logout
        </button>
      </div>
    </div>
  );
};

// Header component
const Header = ({ name }) => (
  <div className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
    <div className="d-flex align-items-center">
      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
        <FaUserCheck className="text-white" />
      </div>
      <div>
        <h6 className="mb-0 fw-bold">Hello, {name}</h6>
        <small className="text-muted">Welcome back to your dashboard</small>
      </div>
    </div>
    <div className="d-flex align-items-center">
      <div className="position-relative me-3">
        <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
          <FaBell className="text-muted" />
        </button>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
          3
        </span>
      </div>
      <div className="dropdown">
        <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }} data-bs-toggle="dropdown">
          <FaEllipsisV className="text-muted" />
        </button>
        <ul className="dropdown-menu dropdown-menu-end shadow">
          <li><a className="dropdown-item" href="#profile">Profile</a></li>
          <li><a className="dropdown-item" href="#settings">Settings</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item text-danger" href="#logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
);

// SummaryCard component
const SummaryCard = ({ title, value, icon, color }) => (
  <div className="col-xl-3 col-md-6">
    <div className={`card border-0 shadow-sm h-100 bg-${color} bg-opacity-10`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="card-title text-muted mb-1">{title}</h6>
            <h3 className="fw-bold mb-0">{value}</h3>
          </div>
          <div className={`text-${color} fs-3`}>
            {icon}
          </div>
        </div>
        <div className="mt-3">
          <div className="progress" style={{ height: '5px' }}>
            <div 
              className={`progress-bar bg-${color}`} 
              role="progressbar" 
              style={{ width: '75%' }} 
              aria-valuenow="75" 
              aria-valuemin="0" 
              aria-valuemax="100"
            ></div>
          </div>
          <small className="text-muted">Increased by 5% this month</small>
        </div>
      </div>
    </div>
  </div>
);

// DepartmentTable component
const DepartmentTable = ({ departments }) => (
  <div className="table-responsive">
    <table className="table table-hover align-middle mb-0">
      <thead className="table-light">
        <tr>
          <th className="ps-4">Department Name</th>
          <th>Assigned Admin</th>
          <th>Students</th>
          <th>Assessments</th>
          <th>Mock Interviews</th>
          <th>Status</th>
          <th className="text-end pe-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {departments.map((dept, index) => (
          <tr key={index}>
            <td className="ps-4 fw-bold">{dept.name}</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                  <FaUserCheck className="text-white" style={{ fontSize: '0.8rem' }} />
                </div>
                <span>{dept.admin}</span>
              </div>
            </td>
            <td>{dept.students}</td>
            <td>{dept.assessments}</td>
            <td>{dept.mockInterviews}</td>
            <td>
              <span className={`badge ${dept.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                {dept.status}
              </span>
            </td>
            <td className="text-end pe-4">
              <div className="dropdown">
                <button 
                  className="btn btn-sm p-0" 
                  type="button" 
                  id={`dropdownMenu${index}`} 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style={{ background: 'none', border: 'none' }}
                >
                  <FaEllipsisV className="text-muted" />
                </button>
                <ul className="dropdown-menu shadow" aria-labelledby={`dropdownMenu${index}`}>
                  <li><a className="dropdown-item" href="#view">View Details</a></li>
                  <li><a className="dropdown-item" href="#edit">Edit Department</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item text-danger" href="#remove">Remove</a></li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// UpcomingInterviews component
const UpcomingInterviews = ({ interviews }) => (
  <div className="table-responsive">
    <table className="table table-hover align-middle mb-0">
      <thead className="table-light">
        <tr>
          <th className="ps-4">Date & Time</th>
          <th>Student Name</th>
          <th>Department</th>
          <th>Assigned Admin</th>
          <th className="text-end pe-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {interviews.map((interview, index) => (
          <tr key={index}>
            <td className="ps-4">
              <div className="d-flex align-items-center">
                <FaCalendarAlt className="text-primary me-2" />
                <div>
                  <div>{interview.date}</div>
                  <small className="text-muted">{interview.time}</small>
                </div>
              </div>
            </td>
            <td className="fw-bold">{interview.name}</td>
            <td>{interview.department}</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                  <FaUserCheck className="text-white" style={{ fontSize: '0.8rem' }} />
                </div>
                <span>{interview.admin}</span>
              </div>
            </td>
            <td className="text-end pe-4">
              <span className="badge bg-warning text-dark">Scheduled</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ✅ New FullScreenBox component
const FullScreenBox = ({ onClose }) => (
  <div className="fullscreen-box d-flex justify-content-center align-items-center">
    <div className="box-content bg-white rounded shadow-lg p-4 text-center">
      <h3 className="mb-4">Welcome to the Full Screen Box</h3>
      <p>This box covers the entire screen and zooms in smoothly.</p>
      <button className="btn btn-danger mt-3" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default CollegeDepartment;

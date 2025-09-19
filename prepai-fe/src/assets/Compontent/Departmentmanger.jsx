// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import { FaSearch } from 'react-icons/fa';
// // // import Navbar from './Navbar'; // Navbar component import panna

// // function DepartmentManager() {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const departments = [
// //     {
// //       name: 'Computer Science',
// //       code: 'CS',
// //       totalStudents: 500,
// //       activeStudents: 450,
// //       status: 'Active',
// //       creationDate: '2021-08-15',
// //     },
// //     {
// //       name: 'Electrical Engineering',
// //       code: 'EE',
// //       totalStudents: 400,
// //       activeStudents: 380,
// //       status: 'Active',
// //       creationDate: '2021-09-01',
// //     },
// //     {
// //       name: 'Mechanical Engineering',
// //       code: 'ME',
// //       totalStudents: 350,
// //       activeStudents: 320,
// //       status: 'Active',
// //       creationDate: '2021-09-15',
// //     },
// //     {
// //       name: 'Civil Engineering',
// //       code: 'CE',
// //       totalStudents: 300,
// //       activeStudents: 280,
// //       status: 'Active',
// //       creationDate: '2021-10-01',
// //     },
// //     {
// //       name: 'Biology',
// //       code: 'BIO',
// //       totalStudents: 250,
// //       activeStudents: 230,
// //       status: 'Active',
// //       creationDate: '2021-10-15',
// //     },
// //   ];

// //   const filteredDepartments = departments.filter(dep =>
// //     dep.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="container my-5">
// //         <div className="d-flex justify-content-between align-items-center mb-3">
// //           <h2 className="fw-bold">Department Management</h2>
// //           <button className="btn btn-primary shadow-sm rounded-pill px-4 py-2 fw-semibold">
// //             Add Department
// //           </button>
// //         </div>
// //         <p className="text-muted mb-4">
// //           Manage all departments within the university, including student statistics and department details.
// //         </p>

// //         <ul className="nav nav-tabs mb-4 border-0">
// //           <li className="nav-item">
// //             <button className="nav-link active bg-light rounded-pill px-3">Single Entry</button>
// //           </li>
// //           <li className="nav-item">
// //             <button className="nav-link bg-light rounded-pill px-3">Bulk Upload</button>
// //           </li>
// //         </ul>

// //         <div className="card p-4 mb-5 shadow-sm rounded-4">
// //           <div className="mb-3">
// //             <label className="form-label fw-semibold">Department Name</label>
// //             <input type="text" className="form-control rounded-pill" placeholder="e.g., Computer Science" />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label fw-semibold">Department Code</label>
// //             <input type="text" className="form-control rounded-pill" placeholder="e.g., CS" />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label fw-semibold">Department Admin Name</label>
// //             <input type="text" className="form-control rounded-pill" placeholder="e.g., Dr. Emily Carter" />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label fw-semibold">Mail ID</label>
// //             <input type="email" className="form-control rounded-pill" placeholder="e.g., emily.carter@acme.edu" />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label fw-semibold">Total No. of Students</label>
// //             <input type="number" className="form-control rounded-pill" placeholder="e.g., 500" />
// //           </div>
// //           <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold">
// //             Submit
// //           </button>
// //         </div>

// //         <div className="mb-3 position-relative">
// //           <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
// //           <input
// //             type="text"
// //             className="form-control rounded-pill ps-5"
// //             placeholder="Search departments..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>

// //         <div className="table-responsive shadow-sm rounded-4 bg-white">
// //           <table className="table table-hover text-center align-middle mb-0">
// //             <thead className="table-light rounded-4">
// //               <tr>
// //                 <th>Department Name</th>
// //                 <th>Department Code</th>
// //                 <th>Total Students</th>
// //                 <th>Active Students</th>
// //                 <th>Status</th>
// //                 <th>Creation Date</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filteredDepartments.map((dep, index) => (
// //                 <tr key={index}>
// //                   <td>{dep.name}</td>
// //                   <td>{dep.code}</td>
// //                   <td>{dep.totalStudents}</td>
// //                   <td>{dep.activeStudents}</td>
// //                   <td><span className="badge bg-success">{dep.status}</span></td>
// //                   <td>{dep.creationDate}</td>
// //                   <td>
// //                     <button className="btn btn-sm btn-link">Edit</button> |{' '}
// //                     <button className="btn btn-sm btn-link text-danger">Deactivate</button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         <nav className="mt-4">
// //           <ul className="pagination justify-content-center">
// //             <li className="page-item disabled"><button className="page-link">Previous</button></li>
// //             <li className="page-item active"><button className="page-link">1</button></li>
// //             <li className="page-item"><button className="page-link">2</button></li>
// //             <li className="page-item"><button className="page-link">3</button></li>
// //             <li className="page-item"><button className="page-link">Next</button></li>
// //           </ul>
// //         </nav>
// //       </div>
// //     </>
// //   );
// // }

// // export default DepartmentManager;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaSearch } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// // import Navbar from '../../Layout/Navbar';
// // import { addDepartmentRequest } from '../../Redux_saga/Actions/departmentActions'; // path correct-a check pannunga
// import Navbar from '../../Layout/Navbar';

// function DepartmentManager() {
//   const dispatch = useDispatch();

//   const [searchTerm, setSearchTerm] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     code: '',
//     adminName: '',
//     mail: '',
//     totalStudents: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     code: '',
//     adminName: '',
//     mail: '',
//     totalStudents: ''
//   });

//   const departments = [
//     { name: 'Computer Science', code: 'CS', totalStudents: 500, activeStudents: 450, status: 'Active', creationDate: '2021-08-15' },
//     { name: 'Electrical Engineering', code: 'EE', totalStudents: 400, activeStudents: 380, status: 'Active', creationDate: '2021-09-01' },
//     { name: 'Mechanical Engineering', code: 'ME', totalStudents: 350, activeStudents: 320, status: 'Active', creationDate: '2021-09-15' },
//     { name: 'Civil Engineering', code: 'CE', totalStudents: 300, activeStudents: 280, status: 'Active', creationDate: '2021-10-01' },
//     { name: 'Biology', code: 'BIO', totalStudents: 250, activeStudents: 230, status: 'Active', creationDate: '2021-10-15' },
//   ];

//   const filteredDepartments = departments.filter(dep =>
//     dep.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;
//     let newErrors = {};

//     if (!formData.name.trim()) { newErrors.name = "Department Name is required"; valid = false; }
//     if (!formData.code.trim()) { newErrors.code = "Department Code is required"; valid = false; }
//     if (!formData.adminName.trim()) { newErrors.adminName = "Admin Name is required"; valid = false; }
//     if (!formData.mail.trim()) { newErrors.mail = "Mail ID is required"; valid = false; } 
//     else if (!/\S+@\S+\.\S+/.test(formData.mail)) { newErrors.mail = "Enter a valid email address"; valid = false; }
//     if (!formData.totalStudents.trim()) { newErrors.totalStudents = "Total number of students is required"; valid = false; } 
//     else if (isNaN(formData.totalStudents) || parseInt(formData.totalStudents) <= 0) { newErrors.totalStudents = "Enter a valid positive number"; valid = false; }

//     setErrors(newErrors);

//     if (valid) {
//       // ✅ Dispatch action to add department via Redux-Saga
//       dispatch(addDepartmentRequest(formData));

//       // Reset form
//       setFormData({
//         name: '',
//         code: '',
//         adminName: '',
//         mail: '',
//         totalStudents: ''
//       });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-5">
//         {/* Header & Add Department button */}
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h2 className="fw-bold">Department Management</h2>
//           <button className="btn btn-primary shadow-sm rounded-pill px-4 py-2 fw-semibold">
//             Add Department
//           </button>
//         </div>
//         <p className="text-muted mb-4">Manage all departments within the university, including student statistics and department details.</p>

//         {/* Tabs */}
//         <ul className="nav nav-tabs mb-4 border-0">
//           <li className="nav-item">
//             <button className="nav-link active bg-light rounded-pill px-3">Single Entry</button>
//           </li>
//           <li className="nav-item">
//             <button className="nav-link bg-light rounded-pill px-3">Bulk Upload</button>
//           </li>
//         </ul>

//         {/* Form */}
//         <div className="card p-4 mb-5 shadow-sm rounded-4">
//           <form onSubmit={handleSubmit}>
//             {/* Department Name */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Name</label>
//               <input type="text" name="name" className={`form-control rounded-pill ${errors.name ? 'is-invalid' : ''}`} placeholder="e.g., Computer Science" value={formData.name} onChange={handleChange} />
//               {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//             </div>
//             {/* Department Code */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Code</label>
//               <input type="text" name="code" className={`form-control rounded-pill ${errors.code ? 'is-invalid' : ''}`} placeholder="e.g., CS" value={formData.code} onChange={handleChange} />
//               {errors.code && <div className="invalid-feedback">{errors.code}</div>}
//             </div>
//             {/* Admin Name */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Admin Name</label>
//               <input type="text" name="adminName" className={`form-control rounded-pill ${errors.adminName ? 'is-invalid' : ''}`} placeholder="e.g., Dr. Emily Carter" value={formData.adminName} onChange={handleChange} />
//               {errors.adminName && <div className="invalid-feedback">{errors.adminName}</div>}
//             </div>
//             {/* Mail */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Mail ID</label>
//               <input type="email" name="mail" className={`form-control rounded-pill ${errors.mail ? 'is-invalid' : ''}`} placeholder="e.g., emily.carter@acme.edu" value={formData.mail} onChange={handleChange} />
//               {errors.mail && <div className="invalid-feedback">{errors.mail}</div>}
//             </div>
//             {/* Total Students */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Total No. of Students</label>
//               <input type="number" name="totalStudents" className={`form-control rounded-pill ${errors.totalStudents ? 'is-invalid' : ''}`} placeholder="e.g., 500" value={formData.totalStudents} onChange={handleChange} />
//               {errors.totalStudents && <div className="invalid-feedback">{errors.totalStudents}</div>}
//             </div>

//             <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold">Submit</button>
//           </form>
//         </div>

//         {/* Search */}
//         <div className="mb-3 position-relative">
//           <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
//           <input type="text" className="form-control rounded-pill ps-5" placeholder="Search departments..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//         </div>

//         {/* Table */}
//         <div className="table-responsive shadow-sm rounded-4 bg-white">
//           <table className="table table-hover text-center align-middle mb-0">
//             <thead className="table-light rounded-4">
//               <tr>
//                 <th>Department Name</th>
//                 <th>Department Code</th>
//                 <th>Total Students</th>
//                 <th>Active Students</th>
//                 <th>Status</th>
//                 <th>Creation Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDepartments.map((dep, index) => (
//                 <tr key={index}>
//                   <td>{dep.name}</td>
//                   <td>{dep.code}</td>
//                   <td>{dep.totalStudents}</td>
//                   <td>{dep.activeStudents}</td>
//                   <td><span className="badge bg-success">{dep.status}</span></td>
//                   <td>{dep.creationDate}</td>
//                   <td>
//                     <button className="btn btn-sm btn-link">Edit</button> |{' '}
//                     <button className="btn btn-sm btn-link text-danger">Deactivate</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DepartmentManager;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaSearch } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import Navbar from '../../Layout/Navbar';
// import { addDepartmentRequest } from '../Redux_saga/Action/Department_Action';

// function DepartmentManager() {
//   const dispatch = useDispatch();

//   // Form state
//   const [formData, setFormData] = useState({
//   name: '',
//   code: '',
//   adminName: '',
//   mail: '',
//   totalStudents: '',
//   collegeId: ''
// });


//   const [errors, setErrors] = useState({
//     name: '',
//     code: '',
//     adminName: '',
//     mail: '',
//     totalStudents: '',
//     collegeId: ''
//   });

//   const [searchTerm, setSearchTerm] = useState('');

//   // Sample table data
//   const departments = [
//     { name: 'Computer Science', code: 'CS', totalStudents: 500, activeStudents: 450, status: 'Active', creationDate: '2021-08-15' },
//     { name: 'Electrical Engineering', code: 'EE', totalStudents: 400, activeStudents: 380, status: 'Active', creationDate: '2021-09-01' },
//     { name: 'Mechanical Engineering', code: 'ME', totalStudents: 350, activeStudents: 320, status: 'Active', creationDate: '2021-09-15' },
//     { name: 'Civil Engineering', code: 'CE', totalStudents: 300, activeStudents: 280, status: 'Active', creationDate: '2021-10-01' },
//     { name: 'Biology', code: 'BIO', totalStudents: 250, activeStudents: 230, status: 'Active', creationDate: '2021-10-15' },
//   ];

//   const filteredDepartments = departments.filter(dep =>
//     dep.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   // Form submit
//   const handleSubmit = (e) => {
//   e.preventDefault();
//   let valid = true;
//   let newErrors = {};

//   // Validation
//   if (!formData.name.trim()) { newErrors.name = "Department Name is required"; valid = false; }
//   if (!formData.code.trim()) { newErrors.code = "Department Code is required"; valid = false; }
//   if (!formData.adminName.trim()) { newErrors.adminName = "Admin Name is required"; valid = false; }
//   if (!formData.mail.trim()) { newErrors.mail = "Mail ID is required"; valid = false; }
//   else if (!/\S+@\S+\.\S+/.test(formData.mail)) { newErrors.mail = "Enter a valid email address"; valid = false; }
//   if (!formData.totalStudents || formData.totalStudents <= 0) {
//   newErrors.totalStudents = "Enter a valid number of students";
//   valid = false;
// }

//   setErrors(newErrors);

//   if (valid) {
//    const payload = {
//   departmentName: formData.name,
//   departmentCode: formData.code,
//   degreeType: "UG",
//   departmentAdminName: formData.adminName,
//   mailId: formData.mail,
//   collegeId: parseInt(formData.collegeId)||0 ,
//   totalNoOfStudents: parseInt(formData.totalStudents) || 0
// };


// dispatch(addDepartmentRequest(payload));
// console.log('Payload:', payload);
//   }
// }

// const handleDepartmentChange = (e) => {
//   const selectedDeptName = e.target.value;
//   const selectedDept = departments.find(dep => dep.name === selectedDeptName);

//   setFormData({
//     ...formData,
//     name: selectedDeptName,
//     totalStudents: selectedDept ? selectedDept.totalStudents : ''
//   });

//   setErrors({ ...errors, name: '' });
// };



//   return (
//     <>
//       <Navbar />
//       <div className="container my-5">
//         {/* Header */}
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h2 className="fw-bold">Department Management</h2>
//           <button className="btn btn-primary shadow-sm rounded-pill px-4 py-2 fw-semibold">Add Department</button>
//         </div>
//         <p className="text-muted mb-4">Manage all departments within the university, including student statistics and department details.</p>

//         {/* Tabs */}
//         <ul className="nav nav-tabs mb-4 border-0">
//           <li className="nav-item">
//             <button className="nav-link active bg-light rounded-pill px-3">Single Entry</button>
//           </li>
//           <li className="nav-item">
//             <button className="nav-link bg-light rounded-pill px-3">Bulk Upload</button>
//           </li>
//         </ul>

//         {/* Form */}
//         <div className="card p-4 mb-5 shadow-sm rounded-4">
//           <form onSubmit={handleSubmit}>
//             {/* <div className="mb-3">
//               <label className="form-label fw-semibold">Department Name</label>
//               <input type="text" name="name" className={`form-control rounded-pill ${errors.name ? 'is-invalid' : ''}`} placeholder="e.g., Computer Science" value={formData.name} onChange={handleChange} />
//               {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//             </div> */}

//             <div className="mb-3">
//   <label className="form-label fw-semibold">Department Name</label>
//   <select
//     name="name"
//     className={`form-select rounded-pill ${errors.name ? 'is-invalid' : ''}`}
//     value={formData.name}
//     onChange={handleDepartmentChange}
//   >
//     <option value="">Select Department</option>
//     {departments.map((dep, index) => (
//       <option key={index} value={dep.name}>
//         {dep.name}
//       </option>
//     ))}
//   </select>
//   {errors.name && <div className="invalid-feedback">{errors.name}</div>}
// </div>


//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Code</label>
//               <input type="text" name="code" className={`form-control rounded-pill ${errors.code ? 'is-invalid' : ''}`} placeholder="e.g., CS" value={formData.code} onChange={handleChange} />
//               {errors.code && <div className="invalid-feedback">{errors.code}</div>}
//             </div>

//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Admin Name</label>
//               <input type="text" name="adminName" className={`form-control rounded-pill ${errors.adminName ? 'is-invalid' : ''}`} placeholder="e.g., Jhonny" value={formData.adminName} onChange={handleChange} />
//               {errors.adminName && <div className="invalid-feedback">{errors.adminName}</div>}
//             </div>

//             <div className="mb-3">
//               <label className="form-label fw-semibold">Mail ID</label>
//               <input type="email" name="mail" className={`form-control rounded-pill ${errors.mail ? 'is-invalid' : ''}`} placeholder="e.g., pavithar23344@gamil.com" value={formData.mail} onChange={handleChange} />
//               {errors.mail && <div className="invalid-feedback">{errors.mail}</div>}
//             </div>

//             {/* <div className="mb-3">
//               <label className="form-label fw-semibold">Total No. of Students</label>
//               <input type="number" name="totalStudents" className={`form-control rounded-pill ${errors.totalStudents ? 'is-invalid' : ''}`} placeholder="e.g., 500" value={formData.totalStudents} onChange={handleChange} />
//               {errors.totalStudents && <div className="invalid-feedback">{errors.totalStudents}</div>}
//             </div> */}

//             <div className="mb-3">
//   <label className="form-label fw-semibold">Total No. of Students</label>
//   <input
//     type="number"
//     name="totalStudents"
//     className="form-control rounded-pill"
//     value={formData.totalStudents}
//     readOnly
//   />
// </div>

            

//             <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold">Submit</button>
//           </form>
//         </div>

//         {/* Search */}
//         <div className="mb-3 position-relative">
//           <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
//           <input type="text" className="form-control rounded-pill ps-5" placeholder="Search departments..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//         </div>

//         {/* Table */}
//         <div className="table-responsive shadow-sm rounded-4 bg-white">
//           <table className="table table-hover text-center align-middle mb-0">
//             <thead className="table-light rounded-4">
//               <tr>
//                 <th>Department Name</th>
//                 <th>Department Code</th>
//                 <th>Total Students</th>
//                 <th>Active Students</th>
//                 <th>Status</th>
//                 <th>Creation Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDepartments.map((dep, index) => (
//                 <tr key={index}>
//                   <td>{dep.name}</td>
//                   <td>{dep.code}</td>
//                   <td>{dep.totalStudents}</td>
//                   <td>{dep.activeStudents}</td>
//                   <td><span className="badge bg-success">{dep.status}</span></td>
//                   <td>{dep.creationDate}</td>
//                   <td>
//                     <button className="btn btn-sm btn-link">Edit</button> |{' '}
//                     <button className="btn btn-sm btn-link text-danger">Deactivate</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DepartmentManager;


// import React, { useState,useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaSearch } from 'react-icons/fa';
// import { useDispatch  } from 'react-redux';
// import Navbar from '../../Layout/Navbar';
// import { addDepartmentRequest, fetchDepartmentsRequest } from '../Redux_saga/Action/Department_Action';

// function DepartmentManager() {
//   const dispatch = useDispatch();

//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     code: '',
//     adminName: '',
//     mail: '',
//     totalStudents: '',
//     collegeId: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     code: '',
//     adminName: '',
//     mail: '',
//     totalStudents: '',
//     collegeId: ''
//   });

//   const [searchTerm, setSearchTerm] = useState('');
 

// useEffect(() => {
//   console.log("Fetching departments...");
//   dispatch(fetchDepartmentsRequest());
// }, [dispatch]);


//   // Sample table data
//   const departments = [
//     { name: 'Computer Science', code: 'CS', totalStudents: 500, activeStudents: 450, status: 'Active', creationDate: '2021-08-15' },
//     { name: 'Electrical Engineering', code: 'EE', totalStudents: 400, activeStudents: 380, status: 'Active', creationDate: '2021-09-01' },
//     { name: 'Mechanical Engineering', code: 'ME', totalStudents: 350, activeStudents: 320, status: 'Active', creationDate: '2021-09-15' },
//     { name: 'Civil Engineering', code: 'CE', totalStudents: 300, activeStudents: 280, status: 'Active', creationDate: '2021-10-01' },
//     { name: 'Biology', code: 'BIO', totalStudents: 250, activeStudents: 230, status: 'Active', creationDate: '2021-10-15' },
//   ];

//   const filteredDepartments = departments.filter(dep =>
//     dep.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   // Department dropdown change
// const handleDepartmentChange = (e) => {
//   const selectedDeptName = e.target.value;

//   // Find department object from array
//   const selectedDept = departments.find(dep => dep.name === selectedDeptName);

//   // Update formData with department name & totalStudents automatically
//   setFormData({
//     ...formData,
//     name: selectedDeptName,
//     totalStudents: selectedDept ? selectedDept.totalStudents : 0  // <-- automatically set
//   });

//   setErrors({ ...errors, name: '' });
// };



//   // Form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;
//     let newErrors = {};

//     // Validation
//     if (!formData.name.trim()) { newErrors.name = "Department Name is required"; valid = false; }
//     if (!formData.code.trim()) { newErrors.code = "Department Code is required"; valid = false; }
//     if (!formData.adminName.trim()) { newErrors.adminName = "Admin Name is required"; valid = false; }
//     if (!formData.mail.trim()) { newErrors.mail = "Mail ID is required"; valid = false; }
//     else if (!/\S+@\S+\.\S+/.test(formData.mail)) { newErrors.mail = "Enter a valid email address"; valid = false; }
//     if (!formData.totalStudents || formData.totalStudents <= 0) {
//       newErrors.totalStudents = "Enter a valid number of students";
//       valid = false;
//     }

//     setErrors(newErrors);

//     if (valid) {
//      const payload = {
//   departmentName: formData.name,
//   departmentCode: formData.code,
//   degreeType: "UG",
//   departmentAdminName: formData.adminName,
//   mailId: formData.mail,
//   collegeId: getCollegeIdForDepartment(formData.name), // automatic
//   totalNoOfStudents: formData.totalStudents // automatic
// };


//       dispatch(addDepartmentRequest(payload));
//       console.log('Payload:', payload);
//     }
//   };

//   const getCollegeIdForDepartment = (deptName) => {
//   // Example mapping
//   const mapping = {
//     "Computer Science": 1,
//     "Electrical Engineering": 2,
//     "Mechanical Engineering": 3,
//     "Civil Engineering": 4,
//     "Biology": 5
//   };
//   return mapping[deptName] || 0; // default 0 if not found
// };


//   return (
//     <>
//       <Navbar />
//       <div className="container my-5">
//         {/* Header */}
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h2 className="fw-bold">Department Management</h2>
//           <button className="btn btn-primary shadow-sm rounded-pill px-4 py-2 fw-semibold">Add Department</button>
//         </div>
//         <p className="text-muted mb-4">Manage all departments within the university, including student statistics and department details.</p>

//         {/* Tabs */}
//         <ul className="nav nav-tabs mb-4 border-0">
//           <li className="nav-item">
//             <button className="nav-link active bg-light rounded-pill px-3">Single Entry</button>
//           </li>
//           <li className="nav-item">
//             <button className="nav-link bg-light rounded-pill px-3">Bulk Upload</button>
//           </li>
//         </ul>

//         {/* Form */}
//         <div className="card p-4 mb-5 shadow-sm rounded-4">
//           <form onSubmit={handleSubmit}>
//             {/* Department Name */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Name</label>
//               <select
//                 name="name"
//                 className={`form-select rounded-pill ${errors.name ? 'is-invalid' : ''}`}
//                 value={formData.name}
//                 onChange={handleDepartmentChange}
//               >
//                 <option value="">Select Department</option>
//                 {departments.map((dep, index) => (
//                   <option key={index} value={dep.name}>{dep.name}</option>
//                 ))}
//               </select>
//               {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//             </div>

//             {/* Department Code */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Code</label>
//               <input
//                 type="text"
//                 name="code"
//                 className={`form-control rounded-pill ${errors.code ? 'is-invalid' : ''}`}
//                 placeholder="e.g., CS"
//                 value={formData.code}
//                 onChange={handleChange}
//               />
//               {errors.code && <div className="invalid-feedback">{errors.code}</div>}
//             </div>

//             {/* Admin Name */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Admin Name</label>
//               <input
//                 type="text"
//                 name="adminName"
//                 className={`form-control rounded-pill ${errors.adminName ? 'is-invalid' : ''}`}
//                 placeholder="e.g., Baskar"
//                 value={formData.adminName}
//                 onChange={handleChange}
//               />
//               {errors.adminName && <div className="invalid-feedback">{errors.adminName}</div>}
//             </div>

//             {/* Mail ID */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Mail ID</label>
//               <input
//                 type="email"
//                 name="mail"
//                 className={`form-control rounded-pill ${errors.mail ? 'is-invalid' : ''}`}
//                 placeholder="e.g., example@gmail.com"
//                 value={formData.mail}
//                 onChange={handleChange}
//               />
//               {errors.mail && <div className="invalid-feedback">{errors.mail}</div>}
//             </div>

//            <div className="mb-3">
//   <label className="form-label fw-semibold">Total No. of Students</label>
//   <input
//     type="number"
//     name="totalStudents"
//     className="form-control rounded-pill"
//     value={formData.totalStudents}
//     readOnly
//   />
// </div>


//             <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold">Submit</button>
//           </form>
//         </div>

//         {/* Search */}
//         <div className="mb-3 position-relative">
//           <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
//           <input
//             type="text"
//             className="form-control rounded-pill ps-5"
//             placeholder="Search departments..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Table */}
//         <div className="table-responsive shadow-sm rounded-4 bg-white">
//           <table className="table table-hover text-center align-middle mb-0">
//             <thead className="table-light rounded-4">
//               <tr>
//                 <th>Department Name</th>
//                 <th>Department Code</th>
//                 <th>Total Students</th>
//                 <th>Active Students</th>
//                 <th>Status</th>
//                 <th>Creation Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDepartments.map((dep, index) => (
//                 <tr key={index}>
//                   <td>{dep.name}</td>
//                   <td>{dep.code}</td>
//                   <td>{dep.totalStudents}</td>
//                   <td>{dep.activeStudents}</td>
//                   <td><span className="badge bg-success">{dep.status}</span></td>
//                   <td>{dep.creationDate}</td>
//                   <td>
//                     <button className="btn btn-sm btn-link">Edit</button> |{' '}
//                     <button className="btn btn-sm btn-link text-danger">Deactivate</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DepartmentManager;


// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaSearch } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import Navbar from '../../Layout/Navbar';
// import { addDepartmentRequest, fetchDepartmentsRequest } from '../Redux_saga/Action/Department_Action';

// function DepartmentManager() {
//   const dispatch = useDispatch();
// const { departments = [], loading = false, error = null } = useSelector(
//   (state) => state.departmentData || {}
// );


//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     code: '',
//     adminName: '',
//     mail: '',
//     totalStudents: '',
//     collegeId: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     code: '',
//     adminName: '',
//     mail: '',
//     totalStudents: '',
//     collegeId: ''
//   });

//   const [searchTerm, setSearchTerm] = useState('');

//   // Initial load - fetch departments from API
// useEffect(() => {
//   dispatch(fetchDepartmentsRequest());   // ✅ triggers Department GET API only
// }, [dispatch]);

//   // Input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   // Department dropdown change
//   const handleDepartmentChange = (e) => {
//     const selectedDeptName = e.target.value;
//     const selectedDept = (departments || []).find(dep => dep.departmentName === selectedDeptName);

//     setFormData({
//       ...formData,
//       name: selectedDeptName,
//       totalStudents: selectedDept ? selectedDept.totalNoOfStudents : 0
//     });

//     setErrors({ ...errors, name: '' });
//   };

//   // Form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;
//     let newErrors = {};

//     // Validation
//     if (!formData.name.trim()) { newErrors.name = "Department Name is required"; valid = false; }
//     if (!formData.code.trim()) { newErrors.code = "Department Code is required"; valid = false; }
//     if (!formData.adminName.trim()) { newErrors.adminName = "Admin Name is required"; valid = false; }
//     if (!formData.mail.trim()) { newErrors.mail = "Mail ID is required"; valid = false; }
//     else if (!/\S+@\S+\.\S+/.test(formData.mail)) { newErrors.mail = "Enter a valid email address"; valid = false; }
//     if (!formData.totalStudents || formData.totalStudents <= 0) {
//       newErrors.totalStudents = "Enter a valid number of students";
//       valid = false;
//     }

//     setErrors(newErrors);

//     if (valid) {
//       const payload = {
//         departmentName: formData.name,
//         departmentCode: formData.code,
//         degreeType: "UG",
//         departmentAdminName: formData.adminName,
//         mailId: formData.mail,
//         collegeId: getCollegeIdForDepartment(formData.name),
//         totalNoOfStudents: formData.totalStudents
//       };

//       dispatch(addDepartmentRequest(payload));
//       console.log('Payload:', payload);
//     }
//   };

//   const getCollegeIdForDepartment = (deptName) => {
//     const mapping = {
//       "Computer Science": 1,
//       "Electrical Engineering": 2,
//       "Mechanical Engineering": 3,
//       "Civil Engineering": 4,
//       "Biology": 5
//     };
//     return mapping[deptName] || 0;
//   };

// const filteredDepartments = Array.isArray(departments)
//   ? departments.filter(dep =>
//       dep.departmentName?.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   : [];

//   return (
//     <>
//       <Navbar />
//       <div className="container my-5">
//         {/* Header */}
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h2 className="fw-bold">Department Management</h2>
//           <button className="btn btn-primary shadow-sm rounded-pill px-4 py-2 fw-semibold">Add Department</button>
//         </div>
//         <p className="text-muted mb-4">
//           Manage all departments within the university, including student statistics and department details.
//         </p>

//         {/* Tabs */}
//         <ul className="nav nav-tabs mb-4 border-0">
//           <li className="nav-item">
//             <button className="nav-link active bg-light rounded-pill px-3">Single Entry</button>
//           </li>
//           <li className="nav-item">
//             <button className="nav-link bg-light rounded-pill px-3">Bulk Upload</button>
//           </li>
//         </ul>

//         {/* Form */}
//         <div className="card p-4 mb-5 shadow-sm rounded-4">
//           <form onSubmit={handleSubmit}>
//             {/* Department Name */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Name</label>
//               <select
//   name="name"
//   className={`form-select rounded-pill ${errors.name ? 'is-invalid' : ''}`}
//   value={formData.name}
//   onChange={handleDepartmentChange}
// >
//   <option value="">Select Department</option>
//   {filteredDepartments.map((dep, index) => (
//     <option key={index} value={dep.departmentName}>
//       {dep.departmentName}
//     </option>
//   ))}
// </select>

//               {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//             </div>

//             {/* Department Code */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Code</label>
//               <input
//                 type="text"
//                 name="code"
//                 className={`form-control rounded-pill ${errors.code ? 'is-invalid' : ''}`}
//                 placeholder="e.g., CS"
//                 value={formData.code}
//                 onChange={handleChange}
//               />
//               {errors.code && <div className="invalid-feedback">{errors.code}</div>}
//             </div>

//             {/* Admin Name */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Admin Name</label>
//               <input
//                 type="text"
//                 name="adminName"
//                 className={`form-control rounded-pill ${errors.adminName ? 'is-invalid' : ''}`}
//                 placeholder="e.g., Baskar"
//                 value={formData.adminName}
//                 onChange={handleChange}
//               />
//               {errors.adminName && <div className="invalid-feedback">{errors.adminName}</div>}
//             </div>

//             {/* Mail ID */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Mail ID</label>
//               <input
//                 type="email"
//                 name="mail"
//                 className={`form-control rounded-pill ${errors.mail ? 'is-invalid' : ''}`}
//                 placeholder="e.g., example@gmail.com"
//                 value={formData.mail}
//                 onChange={handleChange}
//               />
//               {errors.mail && <div className="invalid-feedback">{errors.mail}</div>}
//             </div>

//             {/* Total Students */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Total No. of Students</label>
// <input
//   type="number"
//   name="totalStudents"
//   className={`form-control rounded-pill ${errors.totalStudents ? 'is-invalid' : ''}`}
//   value={formData.totalStudents}
//   onChange={handleChange}
// />
// {errors.totalStudents && <div className="invalid-feedback">{errors.totalStudents}</div>}

//             </div>

//             <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold">
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Search */}
//         <div className="mb-3 position-relative">
//           <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
//           <input
//             type="text"
//             className="form-control rounded-pill ps-5"
//             placeholder="Search departments..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Table */}
//         <div className="table-responsive shadow-sm rounded-4 bg-white">
//           <table className="table table-hover text-center align-middle mb-0">
//             <thead className="table-light rounded-4">
//               <tr>
//                 <th>Department Name</th>
//                 <th>Department Code</th>
//                 <th>Total Students</th>
//                 <th>Active Students</th>
//                 <th>Status</th>
//                 <th>Creation Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading && (
//                 <tr>
//                   <td colSpan="7">Loading...</td>
//                 </tr>
//               )}
//               {error && (
//                 <tr>
//                   <td colSpan="7" className="text-danger">Error: {error}</td>
//                 </tr>
//               )}
//               {(filteredDepartments || []).map((dep, index) => (
//                 <tr key={index}>
//                   <td>{dep.departmentName}</td>
//                   <td>{dep.departmentCode}</td>
//                   <td>{dep.totalNoOfStudents}</td>
//                   <td>{dep.activeStudents || 0}</td>
//                   <td>
//                     <span className={`badge ${dep.status === "Active" ? "bg-success" : "bg-secondary"}`}>
//                       {dep.status || "Active"}
//                     </span>
//                   </td>
//                   <td>{dep.creationDate || "-"}</td>
//                   <td>
//                     <button className="btn btn-sm btn-link">Edit</button> |{" "}
//                     <button className="btn btn-sm btn-link text-danger">Deactivate</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DepartmentManager;


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Layout/Navbar';
import { addDepartmentRequest, fetchDepartmentsRequest } from '../Redux_saga/Action/Department_Action';

function DepartmentManager() {
  const dispatch = useDispatch();

const { departments = [], loading = false, error = null } = useSelector(
  (state) => state.departmentData || {}
);



  // Form state
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    adminName: '',
    mail: '',
    totalStudents: '',
    collegeId: ''
  });

  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Correct: Initial load - fetch departments from API
  useEffect(() => {
    dispatch(fetchDepartmentsRequest());   // triggers GET API
  }, [dispatch]);

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // Department dropdown change
  const handleDepartmentChange = (e) => {
    const selectedDeptName = e.target.value;
    const selectedDept = departments.find(dep => dep.departmentName === selectedDeptName);

    setFormData({
      ...formData,
      name: selectedDeptName,
      totalStudents: selectedDept ? selectedDept.totalNoOfStudents : 0
    });

    setErrors({ ...errors, name: '' });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    if (!formData.name.trim()) { newErrors.name = "Department Name is required"; valid = false; }
    if (!formData.code.trim()) { newErrors.code = "Department Code is required"; valid = false; }
    if (!formData.adminName.trim()) { newErrors.adminName = "Admin Name is required"; valid = false; }
    if (!formData.mail.trim()) { newErrors.mail = "Mail ID is required"; valid = false; }
    else if (!/\S+@\S+\.\S+/.test(formData.mail)) { newErrors.mail = "Enter a valid email address"; valid = false; }
    if (!formData.totalStudents || formData.totalStudents <= 0) {
      newErrors.totalStudents = "Enter a valid number of students";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      const payload = {
        departmentName: formData.name,
        departmentCode: formData.code,
        degreeType: "UG",
        departmentAdminName: formData.adminName,
        mailId: formData.mail,
        collegeId: getCollegeIdForDepartment(formData.name),
        totalNoOfStudents: formData.totalStudents
      };

      dispatch(addDepartmentRequest(payload));
      console.log('Payload:', payload);
    }
  };

  const getCollegeIdForDepartment = (deptName) => {
    const mapping = {
      "Computer Science": 1,
      "Electrical Engineering": 2,
      "Mechanical Engineering": 3,
      "Civil Engineering": 4,
      "Biology": 5
    };
    return mapping[deptName] || 0;
  };

  // Search filter
const filteredDepartments = Array.isArray(departments)
  ? departments.filter(dep =>
      dep.departmentName?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];


  return (
    <>
      <Navbar />
      <div className="container my-5">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold">Department Management</h2>
          <button className="btn btn-primary shadow-sm rounded-pill px-4 py-2 fw-semibold">Add Department</button>
        </div>
        <p className="text-muted mb-4">
          Manage all departments within the university, including student statistics and department details.
        </p>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4 border-0">
          <li className="nav-item">
            <button className="nav-link active bg-light rounded-pill px-3">Single Entry</button>
          </li>
          <li className="nav-item">
            <button className="nav-link bg-light rounded-pill px-3">Bulk Upload</button>
          </li>
        </ul>

        {/* Form */}
        <div className="card p-4 mb-5 shadow-sm rounded-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Department Name</label>
              <select
                name="name"
                className={`form-select rounded-pill ${errors.name ? 'is-invalid' : ''}`}
                value={formData.name}
                onChange={handleDepartmentChange}
              >
                <option value="">Select Department</option>
                {filteredDepartments.map((dep, index) => (
                  <option key={index} value={dep.departmentName}>
                    {dep.departmentName}
                  </option>
                ))}
              </select>
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Department Code */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Department Code</label>
              <input
                type="text"
                name="code"
                className={`form-control rounded-pill ${errors.code ? 'is-invalid' : ''}`}
                placeholder="e.g., CS"
                value={formData.code}
                onChange={handleChange}
              />
              {errors.code && <div className="invalid-feedback">{errors.code}</div>}
            </div>

            {/* Admin Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Department Admin Name</label>
              <input
                type="text"
                name="adminName"
                className={`form-control rounded-pill ${errors.adminName ? 'is-invalid' : ''}`}
                placeholder="e.g., Baskar"
                value={formData.adminName}
                onChange={handleChange}
              />
              {errors.adminName && <div className="invalid-feedback">{errors.adminName}</div>}
            </div>

            {/* Mail ID */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Mail ID</label>
              <input
                type="email"
                name="mail"
                className={`form-control rounded-pill ${errors.mail ? 'is-invalid' : ''}`}
                placeholder="e.g., example@gmail.com"
                value={formData.mail}
                onChange={handleChange}
              />
              {errors.mail && <div className="invalid-feedback">{errors.mail}</div>}
            </div>

            {/* Total Students */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Total No. of Students</label>
              <input
                type="number"
                name="totalStudents"
                className={`form-control rounded-pill ${errors.totalStudents ? 'is-invalid' : ''}`}
                value={formData.totalStudents}
                onChange={handleChange}
              />
              {errors.totalStudents && <div className="invalid-feedback">{errors.totalStudents}</div>}
            </div>

            <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold">
              Submit
            </button>
          </form>
        </div>

        {/* Search */}
        <div className="mb-3 position-relative">
          <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
          <input
            type="text"
            className="form-control rounded-pill ps-5"
            placeholder="Search departments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="table-responsive shadow-sm rounded-4 bg-white">
          <table className="table table-hover text-center align-middle mb-0">
            <thead className="table-light rounded-4">
              <tr>
                <th>Department Name</th>
                <th>Department Code</th>
                <th>Total Students</th>
                <th>Active Students</th>
                <th>Status</th>
                <th>Creation Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan="7">Loading...</td></tr>}
              {error && <tr><td colSpan="7" className="text-danger">Error: {error}</td></tr>}
              {filteredDepartments.map((dep, index) => (
                <tr key={index}>
                  <td>{dep.departmentName}</td>
                  <td>{dep.departmentCode}</td>
                  <td>{dep.totalNoOfStudents}</td>
                  <td>{dep.activeStudents || 0}</td>
                  <td>
                    <span className={`badge ${dep.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                      {dep.status || "Active"}
                    </span>
                  </td>
                  <td>{dep.creationDate || "-"}</td>
                  <td>
                    <button className="btn btn-sm btn-link">Edit</button> |{" "}
                    <button className="btn btn-sm btn-link text-danger">Deactivate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DepartmentManager;

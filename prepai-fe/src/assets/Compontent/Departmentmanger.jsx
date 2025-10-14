


// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaSearch } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../../Layout/Navbar";
// import {
//   addDepartmentRequest,
//   editDepartmentRequest,
//   fetchDepartmentsRequest,
//   removeDepartmentRequest,
//   searchDepartmentRequest,
// } from "../Redux_saga/Action/Department_Action";

// function DepartmentManager() {
//   const dispatch = useDispatch();

//   const { departments = [], loading = false, error = null } = useSelector(
//     (state) => state.departmentData || {}
//   );

//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     code: "",
//     adminName: "",
//     mail: "",
//     totalStudents: "",
//     collegeId: "",
//     status: "Active",
//   });

//   const [errors, setErrors] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   // Initial load - fetch departments
//   useEffect(() => {
//     dispatch(fetchDepartmentsRequest());
//   }, [dispatch]);

//   // Input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   // Form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Department Name is required";
//       valid = false;
//     }
//     if (!formData.code.trim()) {
//       newErrors.code = "Department Code is required";
//       valid = false;
//     }
//     if (!formData.adminName.trim()) {
//       newErrors.adminName = "Admin Name is required";
//       valid = false;
//     }
//     if (!formData.mail.trim()) {
//       newErrors.mail = "Mail ID is required";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
//       newErrors.mail = "Enter a valid email address";
//       valid = false;
//     }
//     if (!formData.totalStudents || formData.totalStudents <= 0) {
//       newErrors.totalStudents = "Enter a valid number of students";
//       valid = false;
//     }

//     setErrors(newErrors);
//     if (!valid) return;

 

// const payload = {
//   departmentName: formData.name,
//   departmentCode: formData.code,
//   degreeType: "UG",
//   departmentAdminName: formData.adminName,
//   mailId: formData.mail,
//   isActive: formData.status === "Active",
//   collegeId: Number(localStorage.getItem("collegeId")) // or from backend if editing
// };





//   if (editingId) {
//   dispatch(editDepartmentRequest(editingId, payload));
// } else {
//   dispatch(addDepartmentRequest(payload));
// }


// // Clear form after submit
// setFormData({
//   name: "",
//   code: "",
//   adminName: "",
//   mail: "",
//   totalStudents: "",
//   collegeId: "",
//   status: "Active",  // default value
// });
// }


  



//   // Filter departments
//   const filteredDepartments = Array.isArray(departments)
//     ? departments.filter((dep) =>
//         dep.departmentName?.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

//   // Edit fill form
//   const handleEdit = (dep) => {
//     setFormData({
//       name: dep.departmentName || "",
//       code: dep.departmentCode || "",
//       adminName: dep.departmentAdminName || "",
//       mail: dep.mailId || "",
//       totalStudents: dep.totalNoOfStudents || "",
//       collegeId: dep.collegeId || "",
//       status: dep.isActive ? "Active" : "Inactive",
//     });
//     setEditingId(dep.departmentId || dep.id);
//   };

//   // Search
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     if (value.trim() !== "") {
//       dispatch(searchDepartmentRequest(value));
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container my-5">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h2 className="fw-bold">Department Management</h2>
//         </div>
//         <p className="text-muted mb-4">
//           Manage all departments within the university, including student
//           statistics and department details.
//         </p>

//         {/* Form */}
//         <div className="card p-4 mb-5 shadow-sm rounded-4">
//           <form onSubmit={handleSubmit}>
//             {/* Department Name */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className={`form-control rounded-pill ${
//                   errors.name ? "is-invalid" : ""
//                 }`}
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && (
//                 <div className="invalid-feedback">{errors.name}</div>
//               )}
//             </div>

//             {/* Department Code */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Department Code</label>
//               <input
//                 type="text"
//                 name="code"
//                 className={`form-control rounded-pill ${
//                   errors.code ? "is-invalid" : ""
//                 }`}
//                 value={formData.code}
//                 onChange={handleChange}
//               />
//               {errors.code && (
//                 <div className="invalid-feedback">{errors.code}</div>
//               )}
//             </div>

//             {/* Admin Name */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">
//                 Department Admin Name
//               </label>
//               <input
//                 type="text"
//                 name="adminName"
//                 className={`form-control rounded-pill ${
//                   errors.adminName ? "is-invalid" : ""
//                 }`}
//                 value={formData.adminName}
//                 onChange={handleChange}
//               />
//               {errors.adminName && (
//                 <div className="invalid-feedback">{errors.adminName}</div>
//               )}
//             </div>

//             {/* Mail ID */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Mail ID</label>
//               <input
//                 type="email"
//                 name="mail"
//                 className={`form-control rounded-pill ${
//                   errors.mail ? "is-invalid" : ""
//                 }`}
//                 value={formData.mail}
//                 onChange={handleChange}
//               />
//               {errors.mail && (
//                 <div className="invalid-feedback">{errors.mail}</div>
//               )}
//             </div>

//             {/* Total Students */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">
//                 Total No. of Students
//               </label>
//               <input
//                 type="number"
//                 name="totalStudents"
//                 className={`form-control rounded-pill ${
//                   errors.totalStudents ? "is-invalid" : ""
//                 }`}
//                 value={formData.totalStudents}
//                 onChange={handleChange}
//               />
//               {errors.totalStudents && (
//                 <div className="invalid-feedback">{errors.totalStudents}</div>
//               )}
//             </div>

//             {/* Status */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Status</label>
//               <select
//                 name="status"
//                 className="form-control rounded-pill"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold"
//             >
//               {editingId ? "Update Department" : "Add Department"}
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
//             onChange={handleSearch}
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
//                 <th>Status</th>
//                 <th>Creation Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading && (
//                 <tr>
//                   <td colSpan="6">Loading...</td>
//                 </tr>
//               )}
//               {error && (
//                 <tr>
//                   <td colSpan="6" className="text-danger">
//                     Error: {error}
//                   </td>
//                 </tr>
//               )}
//               {filteredDepartments.map((dep, index) => (
//                 <tr key={index}>
//                   <td>{dep.departmentName}</td>
//                   <td>{dep.departmentCode}</td>
//                   <td>{dep.totalNoOfStudents}</td>
//                   <td>
//                     <span
//                       className={`badge ${
//                         dep.isActive ? "bg-success" : "bg-secondary"
//                       }`}
//                     >
//                       {dep.isActive ? "Active" : "Inactive"}
//                     </span>
//                   </td>
//                   <td>{dep.creationDate || "-"}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-link"
//                       onClick={() => handleEdit(dep)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-link text-danger"
//                       onClick={() =>
//                         dispatch(removeDepartmentRequest(dep.departmentId || dep.id))
//                       }
//                     >
//                       Deactivate
//                     </button>
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


// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaSearch } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../../Layout/Navbar";
// import {
//   addDepartmentRequest,
//   editDepartmentRequest,
//   fetchDepartmentsRequest,
//   removeDepartmentRequest,
//   searchDepartmentRequest,
// } from "../Redux_saga/Action/Department_Action";

// function DepartmentManager() {
//   const dispatch = useDispatch();
//   const { departments = [], loading = false, error = null } = useSelector(
//     (state) => state.departmentData || {}
//   );

//   const [formData, setFormData] = useState({
//     name: "",
//     code: "",
//     adminName: "",
//     mail: "",
//     totalStudents: "",
//     collegeId: "",
//     status: "Active",
//   });
//   const [errors, setErrors] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     dispatch(fetchDepartmentsRequest());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Department Name is required";
//       valid = false;
//     }
//     if (!formData.code.trim()) {
//       newErrors.code = "Department Code is required";
//       valid = false;
//     }
//     if (!formData.adminName.trim()) {
//       newErrors.adminName = "Admin Name is required";
//       valid = false;
//     }
//     if (!formData.mail.trim()) {
//       newErrors.mail = "Mail ID is required";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
//       newErrors.mail = "Enter a valid email address";
//       valid = false;
//     }
//     if (!formData.totalStudents || formData.totalStudents <= 0) {
//       newErrors.totalStudents = "Enter a valid number of students";
//       valid = false;
//     }

//     setErrors(newErrors);
//     if (!valid) return;

//     const payload = {
//       departmentName: formData.name,
//       departmentCode: formData.code,
//       degreeType: "UG",
//       departmentAdminName: formData.adminName,
//       mailId: formData.mail,
//       isActive: formData.status === "Active",
//       collegeId: Number(localStorage.getItem("collegeId")),
//     };

//     if (editingId) {
//       dispatch(editDepartmentRequest(editingId, payload));
//     } else {
//       dispatch(addDepartmentRequest(payload));
//     }

//     setFormData({
//       name: "",
//       code: "",
//       adminName: "",
//       mail: "",
//       totalStudents: "",
//       collegeId: "",
//       status: "Active",
//     });
//     setEditingId(null);
//   };

//   const filteredDepartments = Array.isArray(departments)
//     ? departments.filter((dep) =>
//         dep.departmentName?.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

//   const handleEdit = (dep) => {
//     setFormData({
//       name: dep.departmentName || "",
//       code: dep.departmentCode || "",
//       adminName: dep.departmentAdminName || "",
//       mail: dep.mailId || "",
//       totalStudents: dep.totalNoOfStudents || "",
//       collegeId: dep.collegeId || "",
//       status: dep.isActive ? "Active" : "Inactive",
//     });
//     setEditingId(dep.departmentId || dep.id);
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     if (value.trim() !== "") {
//       dispatch(searchDepartmentRequest(value));
//     }
//   };


  
//   return (
//     <>
//       <Navbar />
//       <div className="container my-4">
//         <h2 className="fw-bold mb-3">Department Management</h2>
//         <p className="text-muted mb-4">
//           Manage all departments within the university, including student statistics and department details.
//         </p>

//         {/* Form Card */}
//         <div className="card p-3 p-md-4 mb-4 shadow-lg rounded-4 border-0">
//           <form onSubmit={handleSubmit}>
//             <div className="row g-3">
//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Department Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className={`form-control rounded-pill ${errors.name ? "is-invalid" : ""}`}
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Department Code</label>
//                 <input
//                   type="text"
//                   name="code"
//                   className={`form-control rounded-pill ${errors.code ? "is-invalid" : ""}`}
//                   value={formData.code}
//                   onChange={handleChange}
//                 />
//                 {errors.code && <div className="invalid-feedback">{errors.code}</div>}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Admin Name</label>
//                 <input
//                   type="text"
//                   name="adminName"
//                   className={`form-control rounded-pill ${errors.adminName ? "is-invalid" : ""}`}
//                   value={formData.adminName}
//                   onChange={handleChange}
//                 />
//                 {errors.adminName && <div className="invalid-feedback">{errors.adminName}</div>}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Mail ID</label>
//                 <input
//                   type="email"
//                   name="mail"
//                   className={`form-control rounded-pill ${errors.mail ? "is-invalid" : ""}`}
//                   value={formData.mail}
//                   onChange={handleChange}
//                 />
//                 {errors.mail && <div className="invalid-feedback">{errors.mail}</div>}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Total Students</label>
//                 <input
//                   type="number"
//                   name="totalStudents"
//                   className={`form-control rounded-pill ${errors.totalStudents ? "is-invalid" : ""}`}
//                   value={formData.totalStudents}
//                   onChange={handleChange}
//                 />
//                 {errors.totalStudents && (
//                   <div className="invalid-feedback">{errors.totalStudents}</div>
//                 )}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Status</label>
//                 <select
//                   name="status"
//                   className="form-control rounded-pill"
//                   value={formData.status}
//                   onChange={handleChange}
//                 >
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                 </select>
//               </div>
//             </div>

//             <div className="d-grid mt-3 mt-md-4">
//               <button
//                 type="submit"
//                 className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold"
//               >
//                 {editingId ? "Update Department" : "Add Department"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Search */}
//         <div className="mb-3 mb-md-4 position-relative w-100 w-md-50">
//           <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
//           <input
//             type="text"
//             className="form-control rounded-pill ps-5"
//             placeholder="Search departments..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         {/* Table */}
//         <div className="table-responsive shadow-lg rounded-4 bg-white border-0">
//           <table className="table table-hover text-center align-middle mb-0">
//             <thead className="table-light rounded-4">
//               <tr>
//                 <th>Department Name</th>
//                 <th>Department Code</th>
//                 <th>Total Students</th>
//                 <th>Status</th>
//                 <th>Creation Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading && (
//                 <tr>
//                   <td colSpan="6">Loading...</td>
//                 </tr>
//               )}
//               {error && (
//                 <tr>
//                   <td colSpan="6" className="text-danger">
//                     Error: {error}
//                   </td>
//                 </tr>
//               )}
//               {filteredDepartments.map((dep, index) => (
//                 <tr key={index}>
//                   <td className="fw-semibold">{dep.departmentName}</td>
//                   <td>{dep.departmentCode}</td>
//                   <td>{dep.totalNoOfStudents}</td>
//                   <td>
//                     <span
//                       className={`badge ${dep.isActive ? "bg-success" : "bg-secondary"}`}
//                     >
//                       {dep.isActive ? "Active" : "Inactive"}
//                     </span>
//                   </td>
//                   <td>{dep.creationDate || "-"}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-outline-primary me-2 mb-1 mb-md-0"
//                       onClick={() => handleEdit(dep)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-outline-danger"
//                       onClick={() =>
//                         dispatch(removeDepartmentRequest(dep.departmentId || dep.id))
//                       }
//                     >
//                       Deactivate
//                     </button>
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


// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaSearch } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../../Layout/Navbar";
// import {
//   addDepartmentRequest,
//   editDepartmentRequest,
//   fetchDepartmentsRequest,
//   removeDepartmentRequest,
//   searchDepartmentRequest,
// } from "../Redux_saga/Action/Department_Action";

// function DepartmentManager() {
//   const dispatch = useDispatch();
//   const { departments = [], loading = false, error = null } = useSelector(
//     (state) => state.departmentData || {}
//   );

//   const [formData, setFormData] = useState({
//     name: "",
//     code: "",
//     adminName: "",
//     mail: "",
//     totalStudents: "",
//     collegeId: "",
//     status: "Active",
//   });

//   const [errors, setErrors] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     dispatch(fetchDepartmentsRequest());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Department Name is required";
//       valid = false;
//     }
//     if (!formData.code.trim()) {
//       newErrors.code = "Department Code is required";
//       valid = false;
//     }
//     if (!formData.adminName.trim()) {
//       newErrors.adminName = "Admin Name is required";
//       valid = false;
//     }
//     if (!formData.mail.trim()) {
//       newErrors.mail = "Mail ID is required";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
//       newErrors.mail = "Enter a valid email address";
//       valid = false;
//     }
//     if (!formData.totalStudents || formData.totalStudents <= 0) {
//       newErrors.totalStudents = "Enter a valid number of students";
//       valid = false;
//     }

//     setErrors(newErrors);
//     if (!valid) return;

//    const payload = {
//   departmentName: formData.name,
//   departmentCode: formData.code,
//   degreeType: "UG",
//   departmentAdminName: formData.adminName,
//   mailId: formData.mail,
//   totalNoOfStudents: Number(formData.totalStudents),
//   isActive: formData.status === "Active",  // <-- Active / Inactive boolean conversion
//   collegeId: Number(localStorage.getItem("collegeId")),
// };

// if (editingId) {
//   dispatch(editDepartmentRequest(editingId, payload));

//   // update frontend table immediately
//   const updatedDepartments = departments.map(dep =>
//     dep.departmentId === editingId
//       ? { ...dep, isActive: formData.status === "Active" } // <-- updated status
//       : dep
//   );

//   // if using redux state, dispatch an action to update the store
//   // or set local state
// }



//     setFormData({
//       name: "",
//       code: "",
//       adminName: "",
//       mail: "",
//       totalStudents: "",
//       collegeId: "",
//       status: "Active",
//     });
//     setEditingId(null);
//   };

//   const handleEdit = (dep) => {
//    setFormData({
//   name: dep.departmentName || "",
//   code: dep.departmentCode || "",
//   adminName: dep.departmentAdminName || "",
//   mail: dep.mailId || "",
//   totalStudents: dep.totalNoOfStudents ?? "",
//   collegeId: dep.collegeId || "",
//   status: dep.isActive ? "Active" : "Inactive",
// });
// console.log(dep.isActive); // true

//     setEditingId(dep.departmentId || dep.id);
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     if (value.trim() !== "") {
//       dispatch(searchDepartmentRequest(value));
//     }
//   };

//   const filteredDepartments = Array.isArray(departments)
//     ? departments.filter((dep) =>
//         dep.departmentName?.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

    
//   return (
//     <>
//       <Navbar />
//       <div className="container my-4">
//         <h2 className="fw-bold mb-3">Department Management</h2>
//         <p className="text-muted mb-4">
//           Manage all departments within the university, including student
//           statistics and department details.
//         </p>

//         {/* Form Card */}
//         <div className="card p-3 p-md-4 mb-4 shadow-lg rounded-4 border-0">
//           <form onSubmit={handleSubmit}>
//             <div className="row g-3">
//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Department Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className={`form-control rounded-pill ${
//                     errors.name ? "is-invalid" : ""
//                   }`}
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 {errors.name && (
//                   <div className="invalid-feedback">{errors.name}</div>
//                 )}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Department Code</label>
//                 <input
//                   type="text"
//                   name="code"
//                   className={`form-control rounded-pill ${
//                     errors.code ? "is-invalid" : ""
//                   }`}
//                   value={formData.code}
//                   onChange={handleChange}
//                 />
//                 {errors.code && (
//                   <div className="invalid-feedback">{errors.code}</div>
//                 )}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Admin Name</label>
//                 <input
//                   type="text"
//                   name="adminName"
//                   className={`form-control rounded-pill ${
//                     errors.adminName ? "is-invalid" : ""
//                   }`}
//                   value={formData.adminName}
//                   onChange={handleChange}
//                 />
//                 {errors.adminName && (
//                   <div className="invalid-feedback">{errors.adminName}</div>
//                 )}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Mail ID</label>
//                 <input
//                   type="email"
//                   name="mail"
//                   className={`form-control rounded-pill ${
//                     errors.mail ? "is-invalid" : ""
//                   }`}
//                   value={formData.mail}
//                   onChange={handleChange}
//                 />
//                 {errors.mail && (
//                   <div className="invalid-feedback">{errors.mail}</div>
//                 )}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Total Students</label>
//                 <input
//                   type="number"
//                   name="totalStudents"
//                   className={`form-control rounded-pill ${
//                     errors.totalStudents ? "is-invalid" : ""
//                   }`}
//                   value={formData.totalStudents}
//                   onChange={handleChange}
//                 />
//                 {errors.totalStudents && (
//                   <div className="invalid-feedback">{errors.totalStudents}</div>
//                 )}
//               </div>

//               <div className="col-12 col-md-6">
//                 <label className="form-label fw-semibold">Status</label>
//                 <select
//                   name="status"
//                   className="form-control rounded-pill"
//                   value={formData.status}
//                   onChange={handleChange}
//                 >
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                 </select>
//               </div>
//             </div>

//             <div className="d-grid mt-3 mt-md-4">
//               <button
//                 type="submit"
//                 className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold"
//               >
//                 {editingId ? "Update Department" : "Add Department"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Search */}
//         <div className="mb-3 mb-md-4 position-relative w-100 w-md-50 mx-auto">
//           <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
//           <input
//             type="text"
//             className="form-control rounded-pill ps-5"
//             placeholder="Search departments..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>

//         {/* Table */}
//         <div className="table-responsive shadow-lg rounded-4 bg-white border-0">
//           <table className="table table-hover text-center align-middle mb-0">
//             <thead className="table-light rounded-4">
//               <tr>
//                 <th>Department Name</th>
//                 <th>Department Code</th>
//                 <th>Total Students</th>
//                 <th>Status</th>
//                 <th>Creation Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading && (
//                 <tr>
//                   <td colSpan="6">Loading...</td>
//                 </tr>
//               )}
//               {error && (
//                 <tr>
//                   <td colSpan="6" className="text-danger">
//                     Error: {error}
//                   </td>
//                 </tr>
//               )}
//               {filteredDepartments.map((dep) => (
//                 <tr key={dep.departmentId || dep.id}>
//                   <td className="fw-semibold">{dep.departmentName}</td>
//                   <td>{dep.departmentCode}</td>
//                   <td>{dep.totalNoOfStudents ?? 0}</td>
//                  <td>
//   <span className={`badge ${dep.isActive ? "bg-success" : "bg-secondary"}`}>
//     {dep.isActive ? "Active" : "Inactive"}
//   </span>
// </td>

//                   <td>
//                     {dep.creationDate
//                       ? new Date(dep.creationDate).toLocaleDateString()
//                       : "-"}
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-outline-primary me-2 mb-1 mb-md-0"
//                       onClick={() => handleEdit(dep)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-outline-danger"
//                       onClick={() =>
//                         dispatch(removeDepartmentRequest(dep.departmentId || dep.id))
//                       }
//                     >
//                       Deactivate
//                     </button>
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



import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Layout/Navbar";
import {
  addDepartmentRequest,
  editDepartmentRequest,
  fetchCollegeRequest,
  fetchDepartmentsRequest,
  removeDepartmentRequest,
  searchDepartmentRequest,
} from "../Redux_saga/Action/Department_Action";

function DepartmentManager() {
  const dispatch = useDispatch();
  const { departments = [], loading = false, error = null } = useSelector(
    (state) => state.departmentData || {}
  );
    const { colleges = [] } = useSelector((state) => state.collegeData || {});

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    adminName: "",
    mail: "",
    totalStudents: "",
    college: "",
    collegeId: "",
    status: "Active",
  });

  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchDepartmentsRequest());
     dispatch(fetchCollegeRequest()); // ✅ Dispatch college fetch
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Department Name is required";
      valid = false;
    }
    if (!formData.code.trim()) {
      newErrors.code = "Department Code is required";
      valid = false;
    }

    // 🟢 College field validation
    if (!formData.college.trim()) {
      newErrors.college = "College Name is required";
      valid = false;
    }

    if (!formData.adminName.trim()) {
      newErrors.adminName = "Admin Name is required";
      valid = false;
    }
    if (!formData.mail.trim()) {
      newErrors.mail = "Mail ID is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
      newErrors.mail = "Enter a valid email address";
      valid = false;
    }
    if (!formData.totalStudents || formData.totalStudents <= 0) {
      newErrors.totalStudents = "Enter a valid number of students";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    const payload = {
      departmentName: formData.name,
      departmentCode: formData.code,
      degreeType: "UG",
      departmentAdminName: formData.adminName,
      mailId: formData.mail,
      totalNoOfStudents: Number(formData.totalStudents),
      isActive: formData.status === "Active",
      collegeName: formData.college,
      collegeId: Number(localStorage.getItem("collegeId")),
    };

    if (editingId) {
      dispatch(editDepartmentRequest(editingId, payload));
    } else {
      dispatch(addDepartmentRequest(payload));
    }

    setFormData({
      name: "",
      code: "",
      adminName: "",
      mail: "",
      totalStudents: "",
      college: "",
      collegeId: "",
      status: "Active",
    });
    setEditingId(null);
  };

const handleEdit = (dep) => {
  setFormData({
    name: dep.departmentName || "",
    code: dep.departmentCode || "",
    adminName: dep.departmentAdminName || "",
    mail: dep.mailId || "",
    totalStudents: dep.totalNoOfStudents ?? "",
    collegeId: dep.collegeId || "",
    status: "Active", 
  });
  setEditingId(dep.departmentId || dep.id);
};


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() !== "") {
      dispatch(searchDepartmentRequest(value));
    }
  };

  const filteredDepartments = Array.isArray(departments)
    ? departments.filter((dep) =>
        dep.departmentName?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h2 className="fw-bold mb-3">Department Management</h2>
        <p className="text-muted mb-4">
          Manage all departments within the university, including student
          statistics and department details.
        </p>

        {/* Form Section */}
        <div className="card p-3 p-md-4 mb-4 shadow-lg rounded-4 border-0">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Department Name */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Department Name</label>
                <input
                  type="text"
                  name="name"
                  className={`form-control rounded-pill ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

            
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Department Code</label>
                <input
                  type="text"
                  name="code"
                  className={`form-control rounded-pill ${
                    errors.code ? "is-invalid" : ""
                  }`}
                  value={formData.code}
                  onChange={handleChange}
                />
                {errors.code && (
                  <div className="invalid-feedback">{errors.code}</div>
                )}
              </div>

            
     <div className="col-12 col-md-6">
  <label className="form-label fw-semibold">College</label>
  <select
    name="college"
    className={`form-control rounded-pill ${
      errors.college ? "is-invalid" : ""
    }`}
    value={formData.college}
    onChange={handleChange}
  >
    <option value="">Select College</option>
    {colleges.map((col) => (
      <option key={col.collegeId} value={col.collegeName}>
        {col.collegeName}
      </option>
    ))}
  </select>
  {errors.college && (
    <div className="invalid-feedback">{errors.college}</div>
  )}
</div>


              {/* Admin Name */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Admin Name</label>
                <input
                  type="text"
                  name="adminName"
                  className={`form-control rounded-pill ${
                    errors.adminName ? "is-invalid" : ""
                  }`}
                  value={formData.adminName}
                  onChange={handleChange}
                />
                {errors.adminName && (
                  <div className="invalid-feedback">{errors.adminName}</div>
                )}
              </div>

              {/* Mail ID */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Mail ID</label>
                <input
                  type="email"
                  name="mail"
                  className={`form-control rounded-pill ${
                    errors.mail ? "is-invalid" : ""
                  }`}
                  value={formData.mail}
                  onChange={handleChange}
                />
                {errors.mail && (
                  <div className="invalid-feedback">{errors.mail}</div>
                )}
              </div>

              {/* Total Students */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Total Students</label>
                <input
                  type="number"
                  name="totalStudents"
                  className={`form-control rounded-pill ${
                    errors.totalStudents ? "is-invalid" : ""
                  }`}
                  value={formData.totalStudents}
                  onChange={handleChange}
                />
                {errors.totalStudents && (
                  <div className="invalid-feedback">{errors.totalStudents}</div>
                )}
              </div>

              {/* Status */}
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Status</label>
                <select
                  name="status"
                  className="form-control rounded-pill"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="d-grid mt-3 mt-md-4">
              <button
                type="submit"
                className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-semibold"
              >
                {editingId ? "Update Department" : "Add Department"}
              </button>
            </div>
          </form>
        </div>

        {/* Search Section */}
        <div className="mb-3 mb-md-4 position-relative w-100 w-md-50 mx-auto">
          <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
          <input
            type="text"
            className="form-control rounded-pill ps-5"
            placeholder="Search departments..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Table Section */}
        <div className="table-responsive shadow-lg rounded-4 bg-white border-0">
          <table className="table table-hover text-center align-middle mb-0">
            <thead className="table-light rounded-4">
              <tr>
                <th>Department Name</th>
                <th>Department Code</th>
                <th>College</th>
                <th>Total Students</th>
                <th>Status</th>
                <th>Creation Date</th>
                <th>Actions</th>
              </tr>
            </thead>
          <tbody>
  {loading && (
    <tr>
      <td colSpan="7">Loading...</td>
    </tr>
  )}
  {error && (
    <tr>
      <td colSpan="7" className="text-danger">
        Error: {error}
      </td>
    </tr>
  )}
  {filteredDepartments.map((dep) => (
    <tr key={dep.departmentId || dep.id}>
      <td className="fw-semibold">{dep.departmentName}</td>
      <td>{dep.departmentCode}</td>
      <td>{dep.collegeName || "-"}</td>
      <td>{dep.totalNoOfStudents ?? 0}</td>
      <td>
        {/* ✅ Always Active */}
        <span className="badge bg-success">Active</span>
      </td>
      <td>
        {dep.creationDate
          ? new Date(dep.creationDate).toLocaleDateString()
          : "-"}
      </td>
      <td>
        <button
          className="btn btn-sm btn-outline-primary me-2 mb-1 mb-md-0"
          onClick={() => handleEdit(dep)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => handleDeactivate(dep)}
        >
          Deactivate
        </button>
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
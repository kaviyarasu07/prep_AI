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
    const colleges  = useSelector((state) => state.departmentData?.colleges || {});
    console.log(colleges)

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
     dispatch(fetchCollegeRequest()); 
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

    if (!formData.collegeId) {
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
      collegeId:  Number( formData.collegeId),
    };
console.log(payload)
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


    const handleDeactivate = (dep) => {
   console.log("Deactivate clicked for:", dep);
};


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
  name="collegeId"
  className={`form-control rounded-pill ${errors.college ? "is-invalid" : ""}`}
  value={formData.collegeId}
  onChange={(e) => {
    const selectedCollege = colleges.find(
      (col) => col.collegeId === Number(e.target.value)
    );
    setFormData({
      ...formData,
      collegeId: e.target.value,
      college: selectedCollege ? selectedCollege.collegeName : "",
    });
    setErrors({ ...errors, college: "" });
  }}
>
  <option value="">Select College</option>

  {Array.isArray(colleges) &&
    colleges.map((col) => (
      <option key={col.collegeId} value={col.collegeId}>
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

          <div className="d-grid mt-3 mt-md-4" style={{ maxWidth: "200px",marginLeft:"80%" }}>
  <button
    type="submit"
    className="btn btn-primary btn-sm rounded-pill shadow-sm fw-semibold"
    style={{
      padding: "0.4rem 1.2rem",
      fontSize: "0.9rem",
    }}
  >
    {editingId ? "Update Department" : "Sumbit"}
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
<td className="text-center">
  <div className="dropdown">
    <button
      className="btn btn-sm btn-outline-secondary"
      type="button"
      id={`dropdownMenuButton-${dep.departmentId || dep.id}`}
      data-bs-toggle="dropdown"
      aria-expanded="false"
      aria-label="More options"
      style={{
        fontSize: "1.2rem",
        lineHeight: "1",
        padding: "0.25rem 0.5rem",
        borderRadius: "0.375rem", 
        transition: "background 0.2s",
      }}
    >
      &#8942; {/* Vertical three dots */}
    </button>

    <ul
      className="dropdown-menu dropdown-menu-end shadow-sm"
      aria-labelledby={`dropdownMenuButton-${dep.departmentId || dep.id}`}
      style={{ minWidth: "8rem" }} // proper dropdown width
    >
      <li>
        <button
          className="dropdown-item d-flex align-items-center"
          onClick={() => handleEdit(dep)}
        >
          Edit
        </button>
      </li>

      <li>
        <hr className="dropdown-divider" />
      </li>

      <li>
  <button
    className="dropdown-item text-danger d-flex align-items-center"
    onClick={() => handleDeactivate(dep)}
  >
    Deactivate
  </button>
</li>

    </ul>
  </div>
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


// // import React, { useState, useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { FaSearch } from "react-icons/fa";
// // import { useDispatch, useSelector } from "react-redux";
// // import Navbar from "../../Layout/Navbar";
// // import {
// //   addDepartmentRequest,
// //   editDepartmentRequest,
// //   fetchCollegeRequest,
// //   fetchDepartmentsRequest,
// //   removeDepartmentRequest,
// //   searchDepartmentRequest,
// // } from "../Redux_saga/Action/Department_Action";

// // function DepartmentManager() {
// //   const dispatch = useDispatch();
// //   const { departments = [], loading = false, error = null } = useSelector(
// //     (state) => state.departmentData || {}
// //   );
// //   const colleges = useSelector((state) => state.departmentData?.colleges || []);

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     code: "",
// //     adminName: "",
// //     mail: "",
// //     totalStudents: "",
// //     college: "",
// //     collegeId: "",
// //     status: "Active",
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [editingId, setEditingId] = useState(null);

// //   useEffect(() => {
// //     dispatch(fetchDepartmentsRequest());
// //     dispatch(fetchCollegeRequest());
// //   }, [dispatch]);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //     setErrors({ ...errors, [e.target.name]: "" });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     let valid = true;
// //     let newErrors = {};

// //     if (!formData.name.trim()) {
// //       newErrors.name = "Department Name is required";
// //       valid = false;
// //     }
// //     if (!formData.code.trim()) {
// //       newErrors.code = "Department Code is required";
// //       valid = false;
// //     }
// //     if (!formData.collegeId) {
// //       newErrors.college = "College Name is required";
// //       valid = false;
// //     }
// //     if (!formData.adminName.trim()) {
// //       newErrors.adminName = "Admin Name is required";
// //       valid = false;
// //     }
// //     if (!formData.mail.trim()) {
// //       newErrors.mail = "Mail ID is required";
// //       valid = false;
// //     } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
// //       newErrors.mail = "Enter a valid email address";
// //       valid = false;
// //     }
// //     if (!formData.totalStudents || formData.totalStudents <= 0) {
// //       newErrors.totalStudents = "Enter a valid number of students";
// //       valid = false;
// //     }

// //     setErrors(newErrors);
// //     if (!valid) return;

// //     const payload = {
// //       departmentName: formData.name,
// //       departmentCode: formData.code,
// //       degreeType: "UG",
// //       departmentAdminName: formData.adminName,
// //       mailId: formData.mail,
// //       totalNoOfStudents: Number(formData.totalStudents),
// //       isActive: formData.status === "Active",
// //       collegeName: formData.college,
// //       collegeId: Number(formData.collegeId),
// //     };

// //     if (editingId) {
// //       dispatch(editDepartmentRequest(editingId, payload));
// //     } else {
// //       dispatch(addDepartmentRequest(payload));
// //     }

// //     setFormData({
// //       name: "",
// //       code: "",
// //       adminName: "",
// //       mail: "",
// //       totalStudents: "",
// //       college: "",
// //       collegeId: "",
// //       status: "Active",
// //     });
// //     setEditingId(null);
// //   };

// //   const handleEdit = (dep) => {
// //     setFormData({
// //       name: dep.departmentName || "",
// //       code: dep.departmentCode || "",
// //       adminName: dep.departmentAdminName || "",
// //       mail: dep.mailId || "",
// //       totalStudents: dep.totalNoOfStudents ?? "",
// //       collegeId: dep.collegeId || "",
// //       status: dep.isActive ? "Active" : "Inactive",
// //       college: dep.collegeName || "",
// //     });
// //     setEditingId(dep.departmentId || dep.id);
// //   };

// //   const handleDeactivate = (dep) => {
// //     dispatch(removeDepartmentRequest(dep.departmentId || dep.id));
// //   };

// //   const handleSearch = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);
// //     if (value.trim() !== "") {
// //       dispatch(searchDepartmentRequest(value));
// //     }
// //   };

// //   const filteredDepartments = Array.isArray(departments)
// //     ? departments.filter((dep) =>
// //         dep.departmentName?.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     : [];

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="container my-4">
// //         <h2 className="fw-bold mb-3 text-dark">Department Management</h2>
// //         <p className="text-muted mb-4">
// //           Manage all departments within the university.
// //         </p>

// //         {/* Form Section */}
// //         <div
// //           className="card shadow-sm p-4 mb-4 border-0 rounded-4"
// //           style={{
// //             width: "480px",
// //             marginLeft: "100px",
// //             backgroundColor: "#f8f9fa", // light gray
// //           }}
// //         >
// //           <form onSubmit={handleSubmit}>
// //             {[
// //               { label: "Department Name", name: "name", type: "text" },
// //               { label: "Department Code", name: "code", type: "text" },
// //             ].map((field) => (
// //               <div className="mb-3" key={field.name}>
// //                 <label className="form-label fw-semibold text-secondary">
// //                   {field.label}
// //                 </label>
// //                 <input
// //                   type={field.type}
// //                   name={field.name}
// //                   className={`form-control rounded-pill ${
// //                     errors[field.name] ? "is-invalid" : ""
// //                   }`}
// //                   value={formData[field.name]}
// //                   onChange={handleChange}
// //                 />
// //                 {errors[field.name] && (
// //                   <div className="invalid-feedback">{errors[field.name]}</div>
// //                 )}
// //               </div>
// //             ))}

// //             {/* College */}
// //             <div className="mb-3">
// //               <label className="form-label fw-semibold text-secondary">
// //                 College
// //               </label>
// //               <select
// //                 name="collegeId"
// //                 className={`form-control rounded-pill ${
// //                   errors.college ? "is-invalid" : ""
// //                 }`}
// //                 value={formData.collegeId}
// //                 onChange={(e) => {
// //                   const selectedCollege = colleges.find(
// //                     (col) => col.collegeId === Number(e.target.value)
// //                   );
// //                   setFormData({
// //                     ...formData,
// //                     collegeId: e.target.value,
// //                     college: selectedCollege
// //                       ? selectedCollege.collegeName
// //                       : "",
// //                   });
// //                   setErrors({ ...errors, college: "" });
// //                 }}
// //               >
// //                 <option value="">Select College</option>
// //                 {Array.isArray(colleges) &&
// //                   colleges.map((col) => (
// //                     <option key={col.collegeId} value={col.collegeId}>
// //                       {col.collegeName}
// //                     </option>
// //                   ))}
// //               </select>
// //               {errors.college && (
// //                 <div className="invalid-feedback">{errors.college}</div>
// //               )}
// //             </div>

// //             {/* Remaining Fields */}
// //             {[
// //               { label: "Admin Name", name: "adminName", type: "text" },
// //               { label: "Mail ID", name: "mail", type: "email" },
// //               { label: "Total Students", name: "totalStudents", type: "number" },
// //             ].map((field) => (
// //               <div className="mb-3" key={field.name}>
// //                 <label className="form-label fw-semibold text-secondary">
// //                   {field.label}
// //                 </label>
// //                 <input
// //                   type={field.type}
// //                   name={field.name}
// //                   className={`form-control rounded-pill ${
// //                     errors[field.name] ? "is-invalid" : ""
// //                   }`}
// //                   value={formData[field.name]}
// //                   onChange={handleChange}
// //                 />
// //                 {errors[field.name] && (
// //                   <div className="invalid-feedback">{errors[field.name]}</div>
// //                 )}
// //               </div>
// //             ))}

// //             {/* Status */}
// //             <div className="mb-3">
// //               <label className="form-label fw-semibold text-secondary">
// //                 Status
// //               </label>
// //               <select
// //                 name="status"
// //                 className="form-control rounded-pill"
// //                 value={formData.status}
// //                 onChange={handleChange}
// //               >
// //                 <option value="Active">Active</option>
// //                 <option value="Inactive">Inactive</option>
// //               </select>
// //             </div>

// //             {/* Submit Button Left */}
// //             <div className="d-flex mt-3 justify-content-start">
// //               <button
// //                 type="submit"
// //                 className="btn btn-dark btn-sm rounded-pill fw-semibold shadow-sm"
// //                 style={{
// //                   padding: "0.5rem 1.4rem",
// //                   fontSize: "0.9rem",
// //                   backgroundColor: "#343a40",
// //                   color: "white",
// //                   border: "none",
// //                 }}
// //               >
// //                 {editingId ? "Update Department" : "Add Department"}
// //               </button>
// //             </div>
// //           </form>
// //         </div>

// //         {/* Search */}
// //         <div className="mb-4 position-relative w-100 w-md-50 mx-auto">
// //           <FaSearch className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
// //           <input
// //             type="text"
// //             className="form-control rounded-pill ps-5 bg-light"
// //             placeholder="Search departments..."
// //             value={searchTerm}
// //             onChange={handleSearch}
// //           />
// //         </div>

// //         {/* Table */}
// //         <div className="table-responsive shadow-sm rounded-4 bg-white border-0">
// //           <table className="table table-hover text-center align-middle mb-0">
// //             <thead className="table-light">
// //               <tr>
// //                 <th>Department Name</th>
// //                 <th>Department Code</th>
// //                 <th>College</th>
// //                 <th>Total Students</th>
// //                 <th>Status</th>
// //                 <th>Creation Date</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {loading && (
// //                 <tr>
// //                   <td colSpan="7">Loading...</td>
// //                 </tr>
// //               )}
// //               {error && (
// //                 <tr>
// //                   <td colSpan="7" className="text-danger">
// //                     Error: {error}
// //                   </td>
// //                 </tr>
// //               )}
// //               {filteredDepartments.map((dep) => (
// //                 <tr key={dep.departmentId || dep.id}>
// //                   <td className="fw-semibold text-dark">
// //                     {dep.departmentName}
// //                   </td>
// //                   <td>{dep.departmentCode}</td>
// //                   <td>{dep.collegeName || "-"}</td>
// //                   <td>{dep.totalNoOfStudents ?? 0}</td>
// //                   <td>
// //                     <span
// //                       className={`badge ${
// //                         dep.isActive ? "bg-success" : "bg-secondary"
// //                       }`}
// //                     >
// //                       {dep.isActive ? "Active" : "Inactive"}
// //                     </span>
// //                   </td>
// //                   <td>
// //                     {dep.creationDate
// //                       ? new Date(dep.creationDate).toLocaleDateString()
// //                       : "-"}
// //                   </td>
// //                   <td>
// //                     <div className="dropdown">
// //                       <button
// //                         className="btn btn-sm btn-outline-secondary"
// //                         data-bs-toggle="dropdown"
// //                       >
// //                         &#8942;
// //                       </button>
// //                       <ul className="dropdown-menu dropdown-menu-end shadow-sm">
// //                         <li>
// //                           <button
// //                             className="dropdown-item"
// //                             onClick={() => handleEdit(dep)}
// //                           >
// //                             Edit
// //                           </button>
// //                         </li>
// //                         <li>
// //                           <hr className="dropdown-divider" />
// //                         </li>
// //                         <li>
// //                           <button
// //                             className="dropdown-item text-danger"
// //                             onClick={() => handleDeactivate(dep)}
// //                           >
// //                             Deactivate
// //                           </button>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default DepartmentManager;



// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaSearch } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../../Layout/Navbar";
// import {
//   addDepartmentRequest,
//   editDepartmentRequest,
//   fetchCollegeRequest,
//   fetchDepartmentsRequest,
//   removeDepartmentRequest,
//   searchDepartmentRequest,
// } from "../Redux_saga/Action/Department_Action";

// function DepartmentManager() {
//   const dispatch = useDispatch();
//   const { departments = [], loading = false, error = null } = useSelector(
//     (state) => state.departmentData || {}
//   );
//   const colleges = useSelector((state) => state.departmentData?.colleges || []);

//   const [formData, setFormData] = useState({
//     name: "",
//     code: "",
//     adminName: "",
//     mail: "",
//     totalStudents: "",
//     college: "",
//     collegeId: "",
//     status: "Active",
//   });

//   const [errors, setErrors] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     dispatch(fetchDepartmentsRequest());
//     dispatch(fetchCollegeRequest());
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
//     if (!formData.collegeId) {
//       newErrors.college = "College Name is required";
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
//       totalNoOfStudents: Number(formData.totalStudents),
//       isActive: formData.status === "Active",
//       collegeName: formData.college,
//       collegeId: Number(formData.collegeId),
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
//       college: "",
//       collegeId: "",
//       status: "Active",
//     });
//     setEditingId(null);
//     setShowForm(false);
//   };

//   const handleEdit = (dep) => {
//     setShowForm(true);
//     setFormData({
//       name: dep.departmentName || "",
//       code: dep.departmentCode || "",
//       adminName: dep.departmentAdminName || "",
//       mail: dep.mailId || "",
//       totalStudents: dep.totalNoOfStudents ?? "",
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

//   const filteredDepartments = Array.isArray(departments)
//     ? departments.filter((dep) =>
//         dep.departmentName?.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

//   return (
//     <>
//       <Navbar />
//       <div className="container my-4">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h2 className="fw-bold">Department Management</h2>
//           <button
//             className="btn btn-dark rounded-pill px-4 py-2 fw-semibold shadow-sm"
//             onClick={() => setShowForm(!showForm)}
//           >
//             {showForm ? "Close Form" : "Add Department"}
//           </button>
//         </div>
//         <p className="text-muted mb-4">
//           Manage all departments within the university, including student
//           statistics and department details.
//         </p>

//         {/* Add Department Form */}
//         {showForm && (
//           <div
//             className="card p-3 p-md-4 mb-4 shadow-lg rounded-4 border-0"
//             style={{
//               backgroundColor: "#f8f9fa",
//             }}
//           >
//             <form onSubmit={handleSubmit}>
//               <div className="row g-3">
//                 <div className="col-12 col-md-6">
//                   <label className="form-label fw-semibold">
//                     Department Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     className={`form-control rounded-pill ${
//                       errors.name ? "is-invalid" : ""
//                     }`}
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   {errors.name && (
//                     <div className="invalid-feedback">{errors.name}</div>
//                   )}
//                 </div>

//                 <div className="col-12 col-md-6">
//                   <label className="form-label fw-semibold">
//                     Department Code
//                   </label>
//                   <input
//                     type="text"
//                     name="code"
//                     className={`form-control rounded-pill ${
//                       errors.code ? "is-invalid" : ""
//                     }`}
//                     value={formData.code}
//                     onChange={handleChange}
//                   />
//                   {errors.code && (
//                     <div className="invalid-feedback">{errors.code}</div>
//                   )}
//                 </div>

//                 <div className="col-12 col-md-6">
//                   <label className="form-label fw-semibold">College</label>
//                   <select
//                     name="collegeId"
//                     className={`form-control rounded-pill ${
//                       errors.college ? "is-invalid" : ""
//                     }`}
//                     value={formData.collegeId}
//                     onChange={(e) => {
//                       const selectedCollege = colleges.find(
//                         (col) => col.collegeId === Number(e.target.value)
//                       );
//                       setFormData({
//                         ...formData,
//                         collegeId: e.target.value,
//                         college: selectedCollege
//                           ? selectedCollege.collegeName
//                           : "",
//                       });
//                       setErrors({ ...errors, college: "" });
//                     }}
//                   >
//                     <option value="">Select College</option>
//                     {Array.isArray(colleges) &&
//                       colleges.map((col) => (
//                         <option key={col.collegeId} value={col.collegeId}>
//                           {col.collegeName}
//                         </option>
//                       ))}
//                   </select>
//                   {errors.college && (
//                     <div className="invalid-feedback">{errors.college}</div>
//                   )}
//                 </div>

//                 <div className="col-12 col-md-6">
//                   <label className="form-label fw-semibold">Admin Name</label>
//                   <input
//                     type="text"
//                     name="adminName"
//                     className={`form-control rounded-pill ${
//                       errors.adminName ? "is-invalid" : ""
//                     }`}
//                     value={formData.adminName}
//                     onChange={handleChange}
//                   />
//                   {errors.adminName && (
//                     <div className="invalid-feedback">{errors.adminName}</div>
//                   )}
//                 </div>

//                 <div className="col-12 col-md-6">
//                   <label className="form-label fw-semibold">Mail ID</label>
//                   <input
//                     type="email"
//                     name="mail"
//                     className={`form-control rounded-pill ${
//                       errors.mail ? "is-invalid" : ""
//                     }`}
//                     value={formData.mail}
//                     onChange={handleChange}
//                   />
//                   {errors.mail && (
//                     <div className="invalid-feedback">{errors.mail}</div>
//                   )}
//                 </div>

//                 <div className="col-12 col-md-6">
//                   <label className="form-label fw-semibold">
//                     Total Students
//                   </label>
//                   <input
//                     type="number"
//                     name="totalStudents"
//                     className={`form-control rounded-pill ${
//                       errors.totalStudents ? "is-invalid" : ""
//                     }`}
//                     value={formData.totalStudents}
//                     onChange={handleChange}
//                   />
//                   {errors.totalStudents && (
//                     <div className="invalid-feedback">
//                       {errors.totalStudents}
//                     </div>
//                   )}
//                 </div>

//                 <div className="col-12 col-md-6">
//                   <label className="form-label fw-semibold">Status</label>
//                   <select
//                     name="status"
//                     className="form-control rounded-pill"
//                     value={formData.status}
//                     onChange={handleChange}
//                   >
//                     <option value="Active">Active</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>
//               </div>

//               <div
//                 className="d-flex justify-content-end mt-4"
//                 style={{ marginRight: "10px" }}
//               >
//                 <button
//                   type="submit"
//                   className="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow-sm"
//                 >
//                   {editingId ? "Update Department" : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Search Section */}
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

//         {/* Table Section */}
//         <div className="table-responsive shadow-lg rounded-4 bg-white border-0">
//           <table className="table table-hover text-center align-middle mb-0">
//             <thead className="table-light rounded-4">
//               <tr>
//                 <th>Department Name</th>
//                 <th>Department Code</th>
//                 <th>College</th>
//                 <th>Total Students</th>
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
//                   <td colSpan="7" className="text-danger">
//                     Error: {error}
//                   </td>
//                 </tr>
//               )}
//               {filteredDepartments.map((dep) => (
//                 <tr key={dep.departmentId || dep.id}>
//                   <td className="fw-semibold">{dep.departmentName}</td>
//                   <td>{dep.departmentCode}</td>
//                   <td>{dep.collegeName || "-"}</td>
//                   <td>{dep.totalNoOfStudents ?? 0}</td>
//                   <td>
//                     <span
//                       className={`badge ${
//                         dep.isActive ? "bg-success" : "bg-secondary"
//                       }`}
//                     >
//                       {dep.isActive ? "Active" : "Inactive"}
//                     </span>
//                   </td>
//                   <td>
//                     {dep.creationDate
//                       ? new Date(dep.creationDate).toLocaleDateString()
//                       : "-"}
//                   </td>
//                   <td className="text-center">
//                     <div className="dropdown">
//                       <button
//                         className="btn btn-sm btn-outline-secondary"
//                         type="button"
//                         id={`dropdownMenuButton-${dep.departmentId || dep.id}`}
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         &#8942;
//                       </button>
//                       <ul
//                         className="dropdown-menu dropdown-menu-end shadow-sm"
//                         aria-labelledby={`dropdownMenuButton-${dep.departmentId || dep.id}`}
//                       >
//                         <li>
//                           <button
//                             className="dropdown-item"
//                             onClick={() => handleEdit(dep)}
//                           >
//                             Edit
//                           </button>
//                         </li>
//                         <li>
//                           <hr className="dropdown-divider" />
//                         </li>
//                         <li>
//                           <button className="dropdown-item text-danger">
//                             Deactivate
//                           </button>
//                         </li>
//                       </ul>
//                     </div>
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





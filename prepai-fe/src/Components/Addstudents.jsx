// // // import React from 'react'

// // // function Addstudents() {
// // //   return (
// // //     <div>
      
// // //     </div>
// // //   )
// // // }

// // // export default Addstudents



// // import React, { useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap-icons/font/bootstrap-icons.css";

// // function Addstudents() {
// //   const [students, setStudents] = useState([
// //     {
// //       name: "",
// //       studentId: "",
// //       email: "",
// //       phone: "",
// //       yearOfStudy: "",
// //       mentor: "",
// //       cgpa: "",
// //       profilePhoto: null,
// //     },
// //   ]);

// //   const handleInputChange = (index, field, value) => {
// //     const updated = [...students];
// //     updated[index][field] = value;
// //     setStudents(updated);
// //   };

// //   const handleFileUpload = (index, file) => {
// //     const updated = [...students];
// //     updated[index].profilePhoto = file;
// //     setStudents(updated);
// //   };

// //   const addAnotherStudent = () => {
// //     setStudents([
// //       ...students,
// //       {
// //         name: "",
// //         studentId: "",
// //         email: "",
// //         phone: "",
// //         yearOfStudy: "",
// //         mentor: "",
// //         cgpa: "",
// //         profilePhoto: null,
// //       },
// //     ]);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Submitted Students:", students);
// //     alert("Students added successfully 🎉");
// //   };

// //   return (
// //     <div className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
// //       <div className="row justify-content-center">
// //         <div className="col-lg-10">
// //           <div className="card border-0 shadow-lg rounded-4">
// //             <div className="card-header bg-primary text-white d-flex align-items-center rounded-top-4">
// //               <i className="bi bi-person-plus fs-4 me-2"></i>
// //               <h4 className="mb-0 fw-semibold">Add New Student</h4>
// //             </div>

// //             <div className="card-body p-4">
// //               {/* Upload Options */}
// //               <div className="row g-4 mb-4">
// //                 <div className="col-md-6">
// //                   <div className="card border-0 shadow-sm text-center p-4 h-100 rounded-4">
// //                     <i className="bi bi-person-lines-fill text-primary fs-2 mb-2"></i>
// //                     <h6 className="fw-bold mb-1">Single Student</h6>
// //                     <p className="text-muted small mb-0">
// //                       Manually enter individual student details
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="col-md-6">
// //                   <div className="card border-0 shadow-sm text-center p-4 h-100 rounded-4">
// //                     <i className="bi bi-upload text-success fs-2 mb-2"></i>
// //                     <h6 className="fw-bold mb-1">Bulk Upload via Excel</h6>
// //                     <p className="text-muted small mb-2">
// //                       Upload multiple student records at once
// //                     </p>
// //                     <button className="btn btn-outline-success btn-sm rounded-pill">
// //                       <i className="bi bi-download me-1"></i> Download Template
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>

// //               <form onSubmit={handleSubmit}>
// //                 {students.map((student, index) => (
// //                   <div
// //                     key={index}
// //                     className="p-4 mb-4 bg-white rounded-4 shadow-sm border border-2 border-light"
// //                   >
// //                     {students.length > 1 && (
// //                       <div className="d-flex justify-content-between align-items-center mb-3">
// //                         <h6 className="fw-bold text-primary mb-0">
// //                           Student #{index + 1}
// //                         </h6>
// //                         <button
// //                           type="button"
// //                           className="btn btn-sm btn-outline-danger rounded-pill"
// //                           onClick={() =>
// //                             setStudents(students.filter((_, i) => i !== index))
// //                           }
// //                         >
// //                           <i className="bi bi-trash me-1"></i> Remove
// //                         </button>
// //                       </div>
// //                     )}

// //                     <div className="row g-3">
// //                       <div className="col-md-6">
// //                         <label className="form-label fw-semibold">
// //                           <i className="bi bi-person me-2 text-primary"></i>
// //                           Student Name
// //                         </label>
// //                         <input
// //                           type="text"
// //                           className="form-control rounded-pill"
// //                           placeholder="Enter student's full name"
// //                           value={student.name}
// //                           onChange={(e) =>
// //                             handleInputChange(index, "name", e.target.value)
// //                           }
// //                           required
// //                         />
// //                       </div>

// //                       <div className="col-md-6">
// //                         <label className="form-label fw-semibold">
// //                           <i className="bi bi-card-text me-2 text-success"></i>
// //                           Student ID / Roll Number
// //                         </label>
// //                         <input
// //                           type="text"
// //                           className="form-control rounded-pill"
// //                           placeholder="Enter student's roll number"
// //                           value={student.studentId}
// //                           onChange={(e) =>
// //                             handleInputChange(index, "studentId", e.target.value)
// //                           }
// //                           required
// //                         />
// //                       </div>

// //                       <div className="col-md-6">
// //                         <label className="form-label fw-semibold">
// //                           <i className="bi bi-envelope me-2 text-warning"></i>
// //                           Email Address
// //                         </label>
// //                         <input
// //                           type="email"
// //                           className="form-control rounded-pill"
// //                           placeholder="Enter email"
// //                           value={student.email}
// //                           onChange={(e) =>
// //                             handleInputChange(index, "email", e.target.value)
// //                           }
// //                           required
// //                         />
// //                       </div>

// //                       <div className="col-md-6">
// //                         <label className="form-label fw-semibold">
// //                           <i className="bi bi-telephone me-2 text-danger"></i>
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           type="tel"
// //                           className="form-control rounded-pill"
// //                           placeholder="Enter phone number"
// //                           value={student.phone}
// //                           onChange={(e) =>
// //                             handleInputChange(index, "phone", e.target.value)
// //                           }
// //                           required
// //                         />
// //                       </div>

// //                       <div className="col-md-6">
// //                         <label className="form-label fw-semibold">
// //                           <i className="bi bi-mortarboard me-2 text-info"></i>
// //                           Year of Study
// //                         </label>
// //                         <select
// //                           className="form-select rounded-pill"
// //                           value={student.yearOfStudy}
// //                           onChange={(e) =>
// //                             handleInputChange(
// //                               index,
// //                               "yearOfStudy",
// //                               e.target.value
// //                             )
// //                           }
// //                           required
// //                         >
// //                           <option value="">Select year</option>
// //                           <option value="1">Year 1</option>
// //                           <option value="2">Year 2</option>
// //                           <option value="3">Year 3</option>
// //                           <option value="4">Year 4</option>
// //                         </select>
// //                       </div>

// //                       <div className="col-md-6">
// //                         <label className="form-label fw-semibold">
// //                           <i className="bi bi-person-badge me-2 text-secondary"></i>
// //                           Mentor Assignment
// //                         </label>
// //                         <select
// //                           className="form-select rounded-pill"
// //                           value={student.mentor}
// //                           onChange={(e) =>
// //                             handleInputChange(index, "mentor", e.target.value)
// //                           }
// //                           required
// //                         >
// //                           <option value="">Select mentor</option>
// //                           <option value="mentor1">Dr. Smith</option>
// //                           <option value="mentor2">Prof. Johnson</option>
// //                           <option value="mentor3">Dr. Williams</option>
// //                         </select>
// //                       </div>

// //                       <div className="col-md-6">
// //                         <label className="form-label fw-semibold">
// //                           <i className="bi bi-bar-chart-line me-2 text-primary"></i>
// //                           CGPA
// //                         </label>
// //                         <input
// //                           type="number"
// //                           className="form-control rounded-pill"
// //                           placeholder="Enter CGPA"
// //                           min="0"
// //                           max="10"
// //                           step="0.01"
// //                           value={student.cgpa}
// //                           onChange={(e) =>
// //                             handleInputChange(index, "cgpa", e.target.value)
// //                           }
// //                           required
// //                         />
// //                       </div>

// //                       <div className="col-md-6">
// //                         <label className="form-label fw-semibold">
// //                           <i className="bi bi-image me-2 text-success"></i>
// //                           Profile Photo
// //                         </label>
// //                         <input
// //                           type="file"
// //                           className="form-control rounded-pill"
// //                           accept="image/*"
// //                           onChange={(e) =>
// //                             handleFileUpload(index, e.target.files[0])
// //                           }
// //                         />
// //                         <small className="text-muted">
// //                           Optional — upload JPG/PNG
// //                         </small>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}

// //                 <div className="d-flex justify-content-between align-items-center">
// //                   <button
// //                     type="button"
// //                     className="btn btn-outline-primary rounded-pill px-4"
// //                     onClick={addAnotherStudent}
// //                   >
// //                     <i className="bi bi-person-plus me-2"></i> Add Another Student
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="btn btn-success rounded-pill px-4 shadow-sm"
// //                   >
// //                     <i className="bi bi-check-circle me-2"></i> Submit Details
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>

// //             <div className="card-footer bg-white text-center py-3">
// //               <small className="text-muted">
// //                 © 2025 Department Management Dashboard
// //               </small>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Addstudents;



// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Navbar from "./Navbar/Navbar";


// function Addstudents() {
//   const [students, setStudents] = useState([
//     {
//       name: "",
//       studentId: "",
//       email: "",
//       phone: "",
//       yearOfStudy: "",
//       mentor: "",
//       cgpa: "",
//       profilePhoto: null,
//       errors: {},
//     },
//   ]);

//   const handleInputChange = (index, field, value) => {
//     const updated = [...students];
//     updated[index][field] = value;
//     setStudents(updated);
//   };

//   const handleFileUpload = (index, file) => {
//     const updated = [...students];
//     updated[index].profilePhoto = file;
//     setStudents(updated);
//   };

//   const validateFields = (student) => {
//     const errors = {};

//     if (!student.name.trim()) errors.name = "Name is required.";
//     if (!student.studentId.trim()) errors.studentId = "Student ID is required.";

//     if (!student.email.trim()) {
//       errors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(student.email)) {
//       errors.email = "Invalid email format.";
//     }

//     if (!student.phone.trim()) {
//       errors.phone = "Phone number is required.";
//     } else if (!/^\d{10}$/.test(student.phone)) {
//       errors.phone = "Phone number must be 10 digits.";
//     }

//     if (!student.yearOfStudy) errors.yearOfStudy = "Select year of study.";
//     if (!student.mentor) errors.mentor = "Select a mentor.";

//     if (!student.cgpa) {
//       errors.cgpa = "Enter CGPA.";
//     } else if (student.cgpa < 0 || student.cgpa > 10) {
//       errors.cgpa = "CGPA must be between 0 and 10.";
//     }

//     return errors;
//   };

//   const addAnotherStudent = () => {
//     setStudents([
//       ...students,
//       {
//         name: "",
//         studentId: "",
//         email: "",
//         phone: "",
//         yearOfStudy: "",
//         mentor: "",
//         cgpa: "",
//         profilePhoto: null,
//         errors: {},
//       },
//     ]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validated = students.map((student) => ({
//       ...student,
//       errors: validateFields(student),
//     }));

//     setStudents(validated);

//     const hasError = validated.some(
//       (student) => Object.keys(student.errors).length > 0
//     );

    
//   };

//   return (

//        <>
// <Navbar/>
   
//     <div
//       className="container-fluid py-5"
     
//     >
//       <div className="row justify-content-center">
//         <div className="col-lg-10 col-xl-8">
//              <div
//   className="card-header text-white d-flex align-items-center justify-content-center"
//   style={{
   
//     paddingTop: "40px", // 👈 This moves the header 40px from the top
//     paddingBottom: "20px",
//     marginRight:"80%"
//   }}
// >
//   <h4
//     className="mb-0 fw-bold"
//     style={{ color: "black", fontSize: "20px" }}
//   >
//     Add New Student
//   </h4>
// </div>

//           <div className="card border-0 shadow-lg rounded-4">
           

//             <div className="card-body p-4">
//               <form onSubmit={handleSubmit}>
//                 {students.map((student, index) => (
//                   <div
//                     key={index}
//                     className="p-4 mb-4 bg-light rounded-4 shadow-sm border border-1"
//                   >
//                     {students.length > 1 && (
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h6 className="fw-bold text-primary mb-0">
//                           Student #{index + 1}
//                         </h6>
//                         <button
//                           type="button"
//                           className="btn btn-sm btn-outline-danger rounded-pill px-3"
//                           onClick={() =>
//                             setStudents(students.filter((_, i) => i !== index))
//                           }
//                         >
//                           <i className="bi bi-trash me-1"></i> Remove
//                         </button>
//                       </div>
//                     )}

//                     <div className="row g-3">
//                       {/* Name */}
//                       <div className="col-md-6">
//                         <label className="form-label fw-semibold ">
                         
//                           Student Name
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control rounded-4 shadow-sm"
//                           placeholder="Enter student's full name"
//                           value={student.name}
//                           onChange={(e) =>
//                             handleInputChange(index, "name", e.target.value)
//                           }
//                         />
//                         {student.errors.name && (
//                           <small className="text-danger">
//                             {student.errors.name}
//                           </small>
//                         )}
//                       </div>

//                       {/* Student ID */}
//                       <div className="col-md-6">
//                         <label className="form-label fw-semibold">
                        
//                           Student ID / Roll Number
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control rounded-4 shadow-sm"
//                           placeholder="Enter student's roll number"
//                           value={student.studentId}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "studentId",
//                               e.target.value
//                             )
//                           }
//                         />
//                         {student.errors.studentId && (
//                           <small className="text-danger">
//                             {student.errors.studentId}
//                           </small>
//                         )}
//                       </div>

//                       {/* Email */}
//                       <div className="col-md-6">
//                         <label className="form-label fw-semibold">
                          
//                           Email Address
//                         </label>
//                         <input
//                           type="email"
//                           className="form-control rounded-4 shadow-sm"
//                           placeholder="Enter email"
//                           value={student.email}
//                           onChange={(e) =>
//                             handleInputChange(index, "email", e.target.value)
//                           }
//                         />
//                         {student.errors.email && (
//                           <small className="text-danger">
//                             {student.errors.email}
//                           </small>
//                         )}
//                       </div>

//                       {/* Phone */}
//                       <div className="col-md-6">
//                         <label className="form-label fw-semibold">
                          
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           className="form-control rounded-4 shadow-sm"
//                           placeholder="Enter phone number"
//                           value={student.phone}
//                           onChange={(e) =>
//                             handleInputChange(index, "phone", e.target.value)
//                           }
//                         />
//                         {student.errors.phone && (
//                           <small className="text-danger">
//                             {student.errors.phone}
//                           </small>
//                         )}
//                       </div>

//                       {/* Year */}
//                       <div className="col-md-6">
//                         <label className="form-label fw-semibold">
                        
//                           Year of Study
//                         </label>
//                         <select
//                           className="form-select rounded-4 shadow-sm"
//                           value={student.yearOfStudy}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "yearOfStudy",
//                               e.target.value
//                             )
//                           }
//                         >
//                           <option value="">Select year</option>
//                           <option value="1">Year 1</option>
//                           <option value="2">Year 2</option>
//                           <option value="3">Year 3</option>
//                           <option value="4">Year 4</option>
//                         </select>
//                         {student.errors.yearOfStudy && (
//                           <small className="text-danger">
//                             {student.errors.yearOfStudy}
//                           </small>
//                         )}
//                       </div>

//                       {/* Mentor */}
//                       <div className="col-md-6">
//                         <label className="form-label fw-semibold">
                          
//                           Mentor Assignment
//                         </label>
//                         <select
//                           className="form-select rounded-4 shadow-sm"
//                           value={student.mentor}
//                           onChange={(e) =>
//                             handleInputChange(index, "mentor", e.target.value)
//                           }
//                         >
//                           <option value="">Select mentor</option>
//                           <option value="mentor1">Dr. Smith</option>
//                           <option value="mentor2">Prof. Johnson</option>
//                           <option value="mentor3">Dr. Williams</option>
//                         </select>
//                         {student.errors.mentor && (
//                           <small className="text-danger">
//                             {student.errors.mentor}
//                           </small>
//                         )}
//                       </div>

//                       {/* CGPA */}
//                       <div className="col-md-6">
//                         <label className="form-label fw-semibold">
                       
//                           CGPA
//                         </label>
//                         <input
//                           type="number"
//                           className="form-control rounded-4 shadow-sm"
//                           placeholder="Enter CGPA"
//                           min="0"
//                           max="10"
//                           step="0.01"
//                           value={student.cgpa}
//                           onChange={(e) =>
//                             handleInputChange(index, "cgpa", e.target.value)
//                           }
//                         />
//                         {student.errors.cgpa && (
//                           <small className="text-danger">
//                             {student.errors.cgpa}
//                           </small>
//                         )}
//                       </div>

//                       {/* Profile Photo */}
//                       <div className="col-md-6">
//                         <label className="form-label fw-semibold">
                         
//                           Profile Photo
//                         </label>
//                         <input
//                           type="file"
//                           className="form-control rounded-4 shadow-sm"
//                           accept="image/*"
//                           onChange={(e) =>
//                             handleFileUpload(index, e.target.files[0])
//                           }
//                         />
//                         <small className="text-muted">
//                           Optional — upload JPG/PNG
//                         </small>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//                 <div className="d-flex justify-content-between align-items-center mt-3">
//                   <button
//                     type="button"
//                     className="btn btn-outline-primary rounded-4 px-4 py-2 shadow-sm"
//                     onClick={addAnotherStudent}
//                   >
//                     <i className="bi bi-person-plus me-2"></i> Add Another Student
//                   </button>
//                   <button
//                     type="submit"
//                     className="btn btn-success rounded-pill px-4 py-2 shadow-sm"
//                     style={{
//                       background:
//                         "linear-gradient(90deg, #198754 0%, #146c43 100%)",
//                       border: "none",
//                     }}
//                   >
//                     Submit Details
//                   </button>
//                 </div>
//               </form>
//             </div>

//             <div className="card-footer bg-light text-center py-3">
//               <small className="text-muted">
//                 © 2025 Department Management Dashboard
//               </small>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Addstudents;

import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Navbar/Navbar";

function Addstudents() {
  const [students, setStudents] = useState([
    { name: "", studentId: "", email: "", phone: "", yearOfStudy: "", mentor: "", cgpa: "", profilePhoto: null, errors: {} },
  ]);

  const [activeIndex, setActiveIndex] = useState(0); // Active form
  const inputRefs = useRef([]); // Refs for focusing first input

  const handleInputChange = (index, field, value) => {
    const updated = [...students];
    updated[index][field] = value;
    setStudents(updated);
  };

  const handleFileUpload = (index, file) => {
    const updated = [...students];
    updated[index].profilePhoto = file;
    setStudents(updated);
  };

  const validateFields = (student) => {
    const errors = {};
    if (!student.name.trim()) errors.name = "Name is required.";
    if (!student.studentId.trim()) errors.studentId = "Student ID is required.";
    if (!student.email.trim()) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(student.email)) errors.email = "Invalid email format.";
    if (!student.phone.trim()) errors.phone = "Phone is required.";
    else if (!/^\d{10}$/.test(student.phone)) errors.phone = "Phone must be 10 digits.";
    if (!student.yearOfStudy) errors.yearOfStudy = "Select year.";
    if (!student.mentor) errors.mentor = "Select mentor.";
    if (!student.cgpa) errors.cgpa = "Enter CGPA.";
    else if (student.cgpa < 0 || student.cgpa > 10) errors.cgpa = "CGPA must be 0-10.";
    return errors;
  };

  const addAnotherStudent = () => {
    const newStudent = { name: "", studentId: "", email: "", phone: "", yearOfStudy: "", mentor: "", cgpa: "", profilePhoto: null, errors: {} };
    setStudents([...students, newStudent]);
    setActiveIndex(students.length); // New form active
  };

  useEffect(() => {
    // Focus first input of active form
    if (inputRefs.current[activeIndex]) {
      inputRefs.current[activeIndex].focus();
    }
  }, [activeIndex, students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validated = students.map((s) => ({ ...s, errors: validateFields(s) }));
    setStudents(validated);
    const hasError = validated.some((s) => Object.keys(s.errors).length > 0);
    if (!hasError) alert("All students added successfully!");
  };

  const handleCancel = () => {
    if (students.length > 1) {
      const updated = [...students];
      updated.pop(); // remove last added form
      setStudents(updated);
      setActiveIndex(updated.length - 1);
    } else {
      console.log("No additional form to cancel.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h3 className=" fw-bold mb-5 " style={{marginLeft:"10px",fontSize:"25px",fontFamily:"sans-serif"}}>Add New Student</h3>
        <form onSubmit={handleSubmit}>
          {students.map((student, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`card mb-4 shadow border-0 rounded-5 p-4 ${index === activeIndex ? "border-primary border-3" : ""}`}
              style={{ backgroundColor: "#fff", transition: "all 0.3s ease", cursor: "pointer" }}
            >
              {students.length > 1 && (
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="text-primary mb-0">Student #{index + 1}</h5>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger rounded-pill"
                    onClick={() => setStudents(students.filter((_, i) => i !== index))}
                  >
                    <i className="bi bi-trash me-1"></i> Remove
                  </button>
                </div>
              )}

              <div className="row g-3" style={{fontFamily:"serif"}}>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Enter full name"
                    value={student.name}
                    onChange={(e) => handleInputChange(index, "name", e.target.value)}
                  />
                  {student.errors.name && <small className="text-danger">{student.errors.name}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Student ID</label>
                  <input
                    type="text"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Enter student ID"
                    value={student.studentId}
                    onChange={(e) => handleInputChange(index, "studentId", e.target.value)}
                  />
                  {student.errors.studentId && <small className="text-danger">{student.errors.studentId}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Enter email"
                    value={student.email}
                    onChange={(e) => handleInputChange(index, "email", e.target.value)}
                  />
                  {student.errors.email && <small className="text-danger">{student.errors.email}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Phone</label>
                  <input
                    type="tel"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Enter phone number"
                    value={student.phone}
                    onChange={(e) => handleInputChange(index, "phone", e.target.value)}
                  />
                  {student.errors.phone && <small className="text-danger">{student.errors.phone}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Year</label>
                  <select
                    className="form-select rounded-3 shadow-sm"
                    value={student.yearOfStudy}
                    onChange={(e) => handleInputChange(index, "yearOfStudy", e.target.value)}
                  >
                    <option value="">Select year</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                  </select>
                  {student.errors.yearOfStudy && <small className="text-danger">{student.errors.yearOfStudy}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Mentor</label>
                  <select
                    className="form-select rounded34 shadow-sm"
                    value={student.mentor}
                    onChange={(e) => handleInputChange(index, "mentor", e.target.value)}
                  >
                    <option value="">Select mentor</option>
                    <option value="mentor1">Dr. Smith</option>
                    <option value="mentor2">Prof. Johnson</option>
                    <option value="mentor3">Dr. Williams</option>
                  </select>
                  {student.errors.mentor && <small className="text-danger">{student.errors.mentor}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">CGPA</label>
                  <input
                    type="number"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Enter CGPA"
                    value={student.cgpa}
                    onChange={(e) => handleInputChange(index, "cgpa", e.target.value)}
                  />
                  {student.errors.cgpa && <small className="text-danger">{student.errors.cgpa}</small>}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Profile Photo</label>
                  <input
                    type="file"
                    className="form-control rounded-3 shadow-sm"
                    onChange={(e) => handleFileUpload(index, e.target.files[0])}
                  />
                  <small className="text-muted">Optional — JPG/PNG</small>
                </div>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between align-items-center mt-4">
            <button
              type="button"
              className="btn btn-outline-primary shadow-sm rounded-4"
              onClick={addAnotherStudent}
            >
              <i className="bi bi-person-plus me-1"></i> Add Another Student
            </button>

            <div>
              <button type="submit" className="btn btn-primary shadow-sm rounded-4 me-2">
                Submit Details
              </button>
              <button
                type="button"
                className="btn btn-outline-primary shadow-sm rounded-4"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addstudents;



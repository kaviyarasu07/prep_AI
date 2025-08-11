import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import img2 from "../assets/img2.jpg"
import img1 from "../assets/img1.jpg"
import admin from "../assets/admin.jpg"
import user from "../assets/user.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

// Yup validation schema
const validationSchema = Yup.object({
  collegeName: Yup.string().required("College Name is required"),
  collegeType: Yup.string().required("College Type is required"),
  counselingCode: Yup.string().required("Counseling Code is required"),
  collegeWebsite: Yup.string().url("Invalid URL").required("College Website is required"),
  officialEmail: Yup.string().email("Invalid email").required("Official College Email is required"),
  adminName: Yup.string().required("Admin Full Name is required"),
  adminEmail: Yup.string().email("Invalid email").required("Admin Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});


export default function CollegeRegistration() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const formik = useFormik({
    initialValues: {
      collegeName: "",
      collegeType: "",
      counselingCode: "",
      collegeWebsite: "",
      officialEmail: "",
      adminName: "",
      adminEmail: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      toast.success("Registration successful!");
    },
  });

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body bg-light">
              <h3 className="fw-bold mb-2">Prep AI College Registration</h3>
              <p className="text-muted mb-4">
                Please fill out the form below to register your college on our AI-powered interview preparation platform.
              </p>

              <form onSubmit={formik.handleSubmit}>
                {/* College Name */}
                <div className="mb-3">
                  <h4 className="fw-bold">College Details</h4>
                  <label className="form-label">College Name <small className="text-danger">*</small></label>
                  <input
                    type="text"
                    name="collegeName"
                    className={`form-control ${formik.touched.collegeName && formik.errors.collegeName ? "is-invalid" : ""}`}
                    value={formik.values.collegeName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.collegeName && formik.errors.collegeName && (
                    <div className="invalid-feedback">{formik.errors.collegeName}</div>
                  )}
                </div>

                {/* College Type */}
                <div className="mb-3">
                  <label className="form-label">College Type <small className="text-danger">*</small></label>
                  <select
                    name="collegeType"
                    className={`form-select ${formik.touched.collegeType && formik.errors.collegeType ? "is-invalid" : ""}`}
                    value={formik.values.collegeType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select College Type</option>
                    <option>Engineering</option>
                    <option>Arts & Science</option>
                    <option>Medical</option>
                  </select>
                  {formik.touched.collegeType && formik.errors.collegeType && (
                    <div className="invalid-feedback">{formik.errors.collegeType}</div>
                  )}
                </div>

                {/* Counseling Code */}
                <div className="mb-3">
                  <label className="form-label">Counseling Code </label>
                  <input
                    type="text"
                    name="counselingCode"
                    className={`form-control ${formik.touched.counselingCode && formik.errors.counselingCode ? "is-invalid" : ""}`}
                    value={formik.values.counselingCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.counselingCode && formik.errors.counselingCode && (
                    <div className="invalid-feedback">{formik.errors.counselingCode}</div>
                  )}
                </div>

                {/* College Website */}
                <div className="mb-3">
                  <label className="form-label">College Website <small className="text-danger">*</small></label>
                  <input
                    type="url"
                    name="collegeWebsite"
                    className={`form-control ${formik.touched.collegeWebsite && formik.errors.collegeWebsite ? "is-invalid" : ""}`}
                    value={formik.values.collegeWebsite}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.collegeWebsite && formik.errors.collegeWebsite && (
                    <div className="invalid-feedback">{formik.errors.collegeWebsite}</div>
                  )}
                </div>

                {/* Official College Email */}
                <div className="mb-3">
                  <label className="form-label">Official College Email <small className="text-danger">*</small></label>
                  <input
                    type="email"
                    name="officialEmail"
                    className={`form-control ${formik.touched.officialEmail && formik.errors.officialEmail ? "is-invalid" : ""}`}
                    value={formik.values.officialEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.officialEmail && formik.errors.officialEmail && (
                    <div className="invalid-feedback">{formik.errors.officialEmail}</div>
                  )}
                </div>

                {/* Admin Name */}
                <div className="mb-3">
                  <h4 className="fw-bold">Admin Details</h4>
                  <label className="form-label">Admin Full Name <small className="text-danger">*</small></label>
                  <input
                    type="text"
                    name="adminName"
                    className={`form-control ${formik.touched.adminName && formik.errors.adminName ? "is-invalid" : ""}`}
                    value={formik.values.adminName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.adminName && formik.errors.adminName && (
                    <div className="invalid-feedback">{formik.errors.adminName}</div>
                  )}
                </div>

                {/* Admin Email */}
                <div className="mb-3">
                  <label className="form-label">Admin Email (For Login) <small className="text-danger">*</small></label>
                  <input
                    type="email"
                    name="adminEmail"
                    className={`form-control ${formik.touched.adminEmail && formik.errors.adminEmail ? "is-invalid" : ""}`}
                    value={formik.values.adminEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.adminEmail && formik.errors.adminEmail && (
                    <div className="invalid-feedback">{formik.errors.adminEmail}</div>
                  )}
                </div>

                {/* Phone Number (Optional) */}
                <div className="mb-3">
                  <label className="form-label">Phone Number (Optional)</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    className="form-control"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                </div>

                {/* Password */}
                <div className="mb-3 position-relative">
                  <h4 className="fw-bold">Login Details</h4>
                  <label className="form-label">Password <small className="text-danger">*</small></label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                  />
                  <span onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "35px",
                      top: "73px",
                      cursor: "pointer",
                      color: "#6c757d"
                    }}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>

                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="mb-3 position-relative">
                  <label className="form-label">Confirm Password <small className="text-danger">*</small></label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "is-invalid" : ""}`}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      position: "absolute",
                      right: "35px",
                      top: "39px",
                      cursor: "pointer",
                      color: "#6c757d"
                    }}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                  )}
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4 fw-bold">
                    Request Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Side Image */}
        <div className="col-lg-6 d-none d-lg-block">
          <div>
            <img
            src={img1}
            alt="Illustration"
            style={{ width: "400px", height: "250px" }}
            className="img-fluid rounded "
          />
          </div>
          
          <div className="mt-5">
            <img
            src={admin}
            alt="Illustration"
            style={{ width: "400px", height: "250px"}}
            className="img-fluid rounded mt-5"
          />
          </div>
          
          <div className="mt-5">
            <img
            src={user}
            alt="Illustration"
            style={{ width: "400px", height: "250px" }}
            className="img-fluid rounded mt-5"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

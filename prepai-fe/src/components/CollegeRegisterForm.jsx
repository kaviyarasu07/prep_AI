import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import img1 from "../assets/img1.jpg"
import admin from "../assets/admin.jpg"
import user from "../assets/user.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

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

export default function CollegeRegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      collegeName: "",
      collegeType: "",
      affiliationType: "",
      affiliatedUniversity: "",
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
    onSubmit: async (values) => {
      try {
        const payload = {
          collegeName: values.collegeName,
          collegeType: values.collegeType,
          affiliationType: values.affiliationType,
          affiliatedUniversity: values.affiliatedUniversity,
          counselingCode: values.counselingCode,
          website: values.collegeWebsite,
          officialEmail: values.officialEmail,
          adminName: values.adminName,
          adminEmail: values.adminEmail,
          phone: values.phoneNumber,
          password: values.password,
        };

        const response = await api.post("/request/college/register", payload);

        if (response.status === 200 || response.status === 201) {
          toast.success("Registration successful!");
          navigate("/CollegeRegisterForm/CollegeAdminDashboard");
        }
      } catch (error) {
        console.error("Registration failed:", error);
        toast.error(error.response?.data?.message || "Something went wrong!");
      }
    },
  });

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="regiter-card shadow-lg border-0 p-4 rounded">
            <div className="card-body">
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
                    className={`form-control custom-input ${formik.touched.collegeName && formik.errors.collegeName ? "is-invalid" : ""}`}
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
                    className={`form-select custom-input text-muted ${formik.touched.collegeType && formik.errors.collegeType ? "is-invalid" : ""}`}
                    value={formik.values.collegeType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select college type</option>
                    <option>Engineering</option>
                    <option>Arts & Science</option>
                    <option>Medical</option>
                    <option>Law</option>
                  </select>
                  {formik.touched.collegeType && formik.errors.collegeType && (
                    <div className="invalid-feedback">{formik.errors.collegeType}</div>
                  )}
                </div>

                <div className="mb-3">
                  {/* Affiliation Type */}
                  <label className="form-label">Affiliation type</label>
                  <select
                    name="affiliationType"
                    className={`form-select custom-input text-muted ${formik.touched.affiliationType && formik.errors.affiliationType ? "is-invalid" : ""}`}
                    value={formik.values.affiliationType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select affiliation type</option>
                    <option value="AUTONOMOUS">Autonomous</option>
                    <option value="DEEMED">Deemed University</option>
                    <option value="STATE">State University</option>
                    <option value="PRIVATE">Private University</option>
                  </select>
                  {formik.touched.affiliationType && formik.errors.affiliationType && (
                    <div className="invalid-feedback">{formik.errors.affiliationType}</div>
                  )}

                </div>

                <div className="mb-3">
                  <label className="form-label">Affiliated University</label>
                 <select
        name="affiliatedUniversity"
         className={`form-select custom-input text-muted ${formik.touched.affiliatedUniversity  && formik.errors.affiliatedUniversity  ? "is-invalid" : ""}`}
        value={formik.values.affiliatedUniversity}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Select affiliated university</option>
        <option value="Indian Institute of Technology">Indian Institute of Technology</option>
        <option value="Anna University">Anna University</option>
        <option value="Delhi University">Delhi University</option>
        <option value="Visvesvaraya Technological University">Visvesvaraya Technological University</option>
        <option value="Others">Others</option>
      </select>
      {formik.touched.affiliatedUniversity && formik.errors.affiliatedUniversity && (
        <div className="error">{formik.errors.affiliatedUniversity}</div>
      )}
                </div>

                {/* Counseling Code */}
                <div className="mb-3">
                  <label className="form-label">Counseling Code </label>
                  <input
                    type="text"
                    name="counselingCode"
                    className={`form-control custom-input ${formik.touched.counselingCode && formik.errors.counselingCode ? "is-invalid" : ""}`}
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
                    className={`form-control custom-input ${formik.touched.collegeWebsite && formik.errors.collegeWebsite ? "is-invalid" : ""}`}
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
                    className={`form-control custom-input ${formik.touched.officialEmail && formik.errors.officialEmail ? "is-invalid" : ""}`}
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
                    className={`form-control custom-input ${formik.touched.adminName && formik.errors.adminName ? "is-invalid" : ""}`}
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
                    className={`form-control custom-input ${formik.touched.adminEmail && formik.errors.adminEmail ? "is-invalid" : ""}`}
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
                    className="form-control custom-input"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <h4 className="fw-bold">Login Details</h4>
                  <label className="form-label">
                    Password <small className="text-danger">*</small>
                  </label>
                  <div className="position-relative w-100">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={`form-control custom-input pe-5 ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="password-toggle-icon"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {formik.touched.password && formik.errors.password && (
                      <div className="invalid-feedback">{formik.errors.password}</div>
                    )}
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label className="form-label">
                    Confirm Password <small className="text-danger">*</small>
                  </label>
                  <div className="position-relative w-100">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className={`form-control custom-input pe-5 ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "is-invalid" : ""}`}
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="password-toggle-icon"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                      <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                    )}
                  </div>
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
        <div className="col-lg-5 d-none d-lg-block mt-5">
          <div className="mt-5">
            <img
              src={img1}
              alt="Illustration"
              style={{ width: "400px", height: "250px" }}
              className="img-fluid rounded mt-5"
            />
          </div>

          <div className="mt-5">
            <img
              src={admin}
              alt="Illustration"
              style={{ width: "400px", height: "250px" }}
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
          <button className="btn btn-primary fw-bold"
            href="#"
            onClick={() => navigate("/CollegeAdminDashboard")}
          >college</button>
        </div>
      </div>
    </div>
  );
}

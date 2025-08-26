import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import img1 from "../assets/img1.jpg";
import admin from "../assets/admin.jpg";
import user from "../assets/user.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../Redux-saga/Actions/RegisterAction";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const validationSchema = Yup.object({
  collegeName: Yup.string().required("College Name is required"),
  collegeType: Yup.string().required("College Type is required"),
  counselingCode: Yup.string().required("Counseling Code is required"),
  collegeWebsite: Yup.string().url("Invalid URL").required("College Website is required"),
  officialEmail: Yup.string().email("Invalid email").required("Official College Email is required"),
  adminName: Yup.string().required("Admin Full Name is required"),
  adminEmail: Yup.string().email("Invalid email").required("Admin Email is required"),
  phoneNumber: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  password: Yup.string().min(10, "Password must be at least 10 characters").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
});

export default function CollegeRegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, data, error } = useSelector((state) => state.register);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
    onSubmit: (values) => {
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
      dispatch(registerRequest(payload));
    },
  });

  useEffect(() => {
    if (data) { setShowModal(true); }
    if (error) { toast.error(error); }
  }, [data, error]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <button type="button" className="btn btn-link text-dark p-0 me-2" onClick={() => navigate("/")} ><FaArrowLeft size={20} /></button>
          <div className="regiter-card shadow-lg border-0 p-4 rounded">
            <div className="card-body">
              <h3 className="fw-bold mb-2">Prep AI College Registration</h3>
              <p className="text-muted mb-4">Please fill out the form below to register your college on our AI-powered interview preparation platform.</p>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <h4 className="fw-bold">College Details</h4>
                  <label className="form-label">College Name <small className="text-danger">*</small></label>
                  <input type="text" name="collegeName"
                    className={`form-control custom-input ${formik.touched.collegeName && formik.errors.collegeName
                      ? "is-invalid" : ""}`}
                    value={formik.values.collegeName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.collegeName && formik.errors.collegeName && (
                    <div className="invalid-feedback">{formik.errors.collegeName}</div>)}</div>

                <div className="mb-3">
                  <label className="form-label">College Type <small className="text-danger">*</small></label>
                  <select
                    name="collegeType"
                    className={`form-select custom-input text-muted ${formik.touched.collegeType && formik.errors.collegeType
                      ? "is-invalid"
                      : ""
                      }`}
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
                    <div className="invalid-feedback">
                      {formik.errors.collegeType}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Affiliation type<small className="text-danger"> *</small></label>
                  <select name="affiliationType" className="form-select custom-input text-muted" value={formik.values.affiliationType} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    <option value="">Select affiliation type</option>
                    <option value="AUTONOMOUS">Autonomous</option>
                    <option value="DEEMED">Deemed University</option>
                    <option value="STATE">State University</option>
                    <option value="PRIVATE">Private University</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Affiliated University<small className="text-danger"> *</small></label>
                  <select name="affiliatedUniversity" className="form-select custom-input text-muted" value={formik.values.affiliatedUniversity} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    <option value="">Select affiliated university</option>
                    <option value="Indian Institute of Technology">Indian Institute of Technology</option>
                    <option value="Anna University">Anna University</option>
                    <option value="Delhi University">Delhi University</option>
                    <option value="Visvesvaraya Technological University">Visvesvaraya Technological University</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Counseling Code<small className="text-danger"> *</small></label>
                  <input
                    type="text"
                    name="counselingCode"
                    className={`form-control custom-input ${formik.touched.counselingCode &&
                      formik.errors.counselingCode
                      ? "is-invalid"
                      : ""
                      }`}
                    value={formik.values.counselingCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.counselingCode &&
                    formik.errors.counselingCode && (
                      <div className="invalid-feedback">
                        {formik.errors.counselingCode}
                      </div>
                    )}
                </div>

                <div className="mb-3">
                  <label className="form-label">College Website <small className="text-danger">*</small></label>
                  <input
                    type="url"
                    name="collegeWebsite"
                    className={`form-control custom-input ${formik.touched.collegeWebsite &&
                      formik.errors.collegeWebsite
                      ? "is-invalid"
                      : ""
                      }`}
                    value={formik.values.collegeWebsite}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.collegeWebsite &&
                    formik.errors.collegeWebsite && (
                      <div className="invalid-feedback">
                        {formik.errors.collegeWebsite}
                      </div>
                    )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Official College Email <small className="text-danger">*</small></label>
                  <input
                    type="email"
                    name="officialEmail"
                    className={`form-control custom-input ${formik.touched.officialEmail &&
                      formik.errors.officialEmail
                      ? "is-invalid"
                      : ""
                      }`}
                    value={formik.values.officialEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.officialEmail &&
                    formik.errors.officialEmail && (
                      <div className="invalid-feedback">
                        {formik.errors.officialEmail}
                      </div>
                    )}
                </div>

                <div className="mb-3">
                  <h4 className="fw-bold">Admin Details</h4>
                  <label className="form-label">Admin Full Name <small className="text-danger">*</small></label>
                  <input
                    type="text"
                    name="adminName"
                    className={`form-control custom-input ${formik.touched.adminName && formik.errors.adminName
                      ? "is-invalid"
                      : ""
                      }`}
                    value={formik.values.adminName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.adminName && formik.errors.adminName && (
                    <div className="invalid-feedback">
                      {formik.errors.adminName}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Admin Email (For Login){" "}<small className="text-danger">*</small></label>
                  <input
                    type="email"
                    name="adminEmail"
                    className={`form-control custom-input ${formik.touched.adminEmail && formik.errors.adminEmail
                      ? "is-invalid"
                      : ""
                      }`}
                    value={formik.values.adminEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.adminEmail && formik.errors.adminEmail && (
                    <div className="invalid-feedback">
                      {formik.errors.adminEmail}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number<small className="text-danger"> *</small></label>
                  <input type="number" name="phoneNumber" className="form-control custom-input" value={formik.values.phoneNumber} onChange={formik.handleChange} />
                </div>

                <div className="mb-3">
                  <h4 className="fw-bold">Login Details</h4>
                  <label className="form-label">Password <small className="text-danger">*</small></label>
                  <div className="position-relative w-100">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={`form-control custom-input pe-5 ${formik.touched.password && formik.errors.password
                        ? "is-invalid"
                        : ""
                        }`}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span onClick={() => setShowPassword(!showPassword)} className="password-toggle-icon" >{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                    {formik.touched.password && formik.errors.password && (
                      <div className="invalid-feedback">{formik.errors.password}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Password <small className="text-danger">*</small></label>
                  <div className="position-relative w-100">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className={`form-control custom-input pe-5 ${formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                        ? "is-invalid"
                        : ""
                        }`}
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="password-toggle-icon">{showConfirmPassword ? <FaEye /> : <FaEyeSlash />}</span>
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                      )}
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4 fw-bold" disabled={loading} >{loading ? "Submitting..." : "Request Registration"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-5 d-none d-lg-block mt-5">
          <div className="mt-5">
            <img src={img1} alt="Illustration" style={{ width: "400px", height: "250px" }} className="img-fluid rounded mt-5" />
          </div>

          <div className="mt-5">
            <img src={admin} alt="Illustration" style={{ width: "400px", height: "250px" }} className="img-fluid rounded mt-5" />
          </div>

          <div className="mt-5">
            <img src={user} alt="Illustration" style={{ width: "400px", height: "250px" }} className="img-fluid rounded mt-5" />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-3 shadow">
              <div className="modal-header">
                <h5 className="modal-title text-success fw-bold">Registration Successful</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p className="mb-2">🎉 Your college registration has been submitted successfully.</p>
                <p className="text-muted">✅ Awaiting approval by our team. You will receive an official email once your registration is reviewed and verified.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={() => setShowModal(false)}>OK</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

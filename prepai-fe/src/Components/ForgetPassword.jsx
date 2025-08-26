import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordRequest } from "../Redux-Saga/Actions/ForgetpasswordAction";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.forgetpassword);

  const validateEmail = (value) => {
    if (!value) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Invalid Email format";
    }
    return "";
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (isSubmitted) {
      setEmailError(validateEmail(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const validationMessage = validateEmail(email);
    if (validationMessage) {
      setEmailError(validationMessage);
      return;
    }
    setEmailError("");
    dispatch(forgetPasswordRequest({ email }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 mx-3" style={{ width: "350px", maxWidth: "100%" }}>
        <div className="rounded-circle bg-primary bg-opacity-10 text-primary fw-bold fs-4 d-flex justify-content-center align-items-center mx-auto mb-3" style={{ width: "50px", height: "50px" }}>!</div>

        <h4 className="text-center mb-2">Forgot Password</h4>
        <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>Enter your email and we'll send you a link to reset your password.</p>

        <input type="email" className={`form-control mb-1 ${emailError ? "is-invalid" : ""}`} placeholder="Enter your Email" value={email} onChange={(e) => handleEmailChange(e.target.value)} />
        {emailError && (
          <div className="text-danger mb-3" style={{ fontSize: "14px" }}>{emailError}</div>
        )}

        {data && (
          <div className="alert alert-success mt-3 p-2 text-center">{data}</div>
        )}

        {error && !emailError && (
          <div className="text-danger" style={{ fontSize: "14px" }}>{typeof error === "string" ? error : "Invalid Email"}</div>
        )}

        <button className="btn btn-success w-100 mt-3" onClick={handleSubmit} disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none">&lt; Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

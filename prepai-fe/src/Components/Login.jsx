import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../Redux-Saga/Actions/LoginAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = () => {
    setEmailTouched(true);
    setPasswordTouched(true);
    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (valid) {
      dispatch(loginRequest({ email, password }));
    }
  };

  return (
    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "linear-gradient(135deg, #f9faff 0%, #eef2f7 100%)", padding: "1rem" }}>
      <div className="login-container" style={{ width: "100%", maxWidth: "420px", backgroundColor: "#fff", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 8px 25px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem", fontWeight: "700", fontSize: "1.6rem", color: "#1c1c1c", letterSpacing: "-0.5px" }}>Welcome back to <span style={{ color: "#007bff" }}>Prep AI</span></div>

        <label style={{ fontWeight: "600", marginBottom: "0.3rem" }}>Email</label>
        <input type="email" value={email} placeholder="your.email@university.edu" style={{ padding: "0.9rem", marginBottom: "0.4rem", border: "1px solid #d1d5db", borderRadius: "10px", fontSize: "1rem", outline: "none", transition: "0.2s" }}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailTouched) {
              if (!e.target.value) {
                setEmailError("Email is required");
              } else if (!validateEmail(e.target.value)) {
                setEmailError("Invalid email format");
              } else {
                setEmailError("");
              }
            }
          }} onBlur={() => setEmailTouched(true)} />
        {emailTouched && emailError && (
          <span style={{ color: "red", fontSize: "0.85rem" }}>{emailError}</span>
        )}

        <label style={{ fontWeight: "600", marginTop: "1.2rem", marginBottom: "0.3rem" }}>Password</label>
        <div style={{ position: "relative", marginBottom: "0.4rem" }}>
          <input type={showPassword ? "text" : "password"} value={password} placeholder="Enter your password" style={{ padding: "0.9rem", border: "1px solid #d1d5db", borderRadius: "10px", fontSize: "1rem", width: "100%", outline: "none" }}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordTouched) {
                if (!e.target.value) {
                  setPasswordError("Password is required");
                } else {
                  setPasswordError("");
                }
              }
            }} onBlur={() => setPasswordTouched(true)} />
          <i className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#6b7280" }}></i>
        </div>
        {passwordTouched && passwordError && (<span style={{ color: "red", fontSize: "0.85rem" }}>{passwordError}</span>)}

        {error && (<span style={{ color: "red", fontSize: "0.95rem" }}>{error}</span>)}

        <div>
          <a href="/forget-password" style={{ fontSize: "0.95rem", color: "#007bff", textDecoration: "none", marginBottom: "1rem", display: "inline-block" }}>Forgot Password?</a>
        </div>

        <button onClick={handleLogin} style={{ backgroundColor: "#007bff", color: "#fff", padding: "0.95rem", border: "none", borderRadius: "10px", fontWeight: "600", fontSize: "1rem", cursor: "pointer", marginBottom: "1.2rem", transition: "0.3s" }}>{loading ? "Logging in..." : "Login"}</button>

        <div style={{ textAlign: "center", fontSize: "0.9rem", color: "#6c757d", marginBottom: "0.7rem" }}>New to Prep AI?</div>
        <button style={{ padding: "0.95rem", backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "10px", fontWeight: "600", fontSize: "1rem", cursor: "pointer", transition: "0.3s" }}>Register Now</button>
      </div>
    </div>
  );
};

export default Login;

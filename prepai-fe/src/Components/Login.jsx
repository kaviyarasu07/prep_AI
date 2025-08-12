import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../Redux-Saga/Actions/LoginAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = () => {
    setEmailTouched(true);
    setPasswordTouched(true);
    setEmailError("");
    setPasswordError("");
    setLoginError("");

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
    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div className="login-container" style={{ width: "400px", display: "flex", flexDirection: "column", padding: "2rem", background: "#fff", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        
        <div style={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold", fontSize: "1.5rem", color: "#1c1c1c" }}>Welcome back to Prep AI</div>

        <label style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>Email</label>
        <input type="email" value={email} placeholder="your.email@university.edu" style={{ padding: "0.8rem", marginBottom: "0.4rem", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem" }}
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
          }}
          onBlur={() => setEmailTouched(true)}
        />
        {emailTouched && emailError && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>{emailError}</span>
        )}

        <label style={{ fontWeight: "bold", marginTop: "1rem", marginBottom: "0.25rem" }}>Password</label>
        <div style={{ position: "relative", marginBottom: "0.4rem" }}>
          <input type={showPassword ? "text" : "password"} value={password} placeholder="Enter your password" style={{ padding: "0.8rem", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem", width: "93%" }}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordTouched) {
                if (!e.target.value) {
                  setPasswordError("Password is required");
                } else {
                  setPasswordError("");
                }
              }
            }}
            onBlur={() => setPasswordTouched(true)}
          />
          <i className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#999" }}></i>
        </div>
        {passwordTouched && passwordError && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>{passwordError}</span>
        )}

        {loginError && (
          <span style={{ color: "red", fontSize: "0.95rem" }}>{loginError}</span>
        )}

        <div>
          <a href="/forgot-password" style={{ fontSize: "1.0rem", color: "#5b7fcb", textDecoration: "none", marginBottom: "1rem", display: "inline-block" }}>Forgot Password?</a>
        </div>

        <button onClick={handleLogin} style={{ backgroundColor: "#007bff", color: "#fff", padding: "0.9rem", border: "none", borderRadius: "8px", fontWeight: "bold", fontSize: "1rem", cursor: "pointer", marginBottom: "1rem" }}>Login</button>

        <div style={{ textAlign: "end", fontSize: "0.9rem", color: "#6c757d", marginBottom: "10px" }}>New to Prep AI?</div>
        <button style={{ padding: "0.9rem", backgroundColor: "#f1f1f1", border: "none", borderRadius: "8px", fontWeight: "bold", fontSize: "1rem", cursor: "pointer" }}>Register Now</button>
      </div>
    </div>
  );
};

export default Login;
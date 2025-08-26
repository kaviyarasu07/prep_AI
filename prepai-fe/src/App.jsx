import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import LandingPage from './components/LandingPage';
import Registration from './components/CollegeRegisterForm';

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/Register' element={<Registration />}/>
     </Routes>
      <ToastContainer position="top-right" autoClose={3000}  theme="colored" hideProgressBar={false}/>
    </BrowserRouter>
    </>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ForgetPassword from "./Components/ForgetPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

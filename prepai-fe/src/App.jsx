import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import LandingPage from './components/LandingPage';
import Registration from './components/CollegeRegisterForm';
import Login from './Components/Login';
import ForgetPassword from './components/ForgetPassword';
import SuperadminDashboard from './Components/SuperAdmin';

export default function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/Register' element={<Registration />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/super-admin-dashboard' element={<SuperadminDashboard />} />
     </Routes>
      <ToastContainer position="top-right" autoClose={3000}  theme="colored" hideProgressBar={false}/>
    </BrowserRouter>
    </>
  )
}


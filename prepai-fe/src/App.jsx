import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import LandingPage from './components/LandingPage';
import CollegeRegisterForm from './components/CollegeRegisterForm';
// import CollegeAdminDashboard from './components/CollegePages/CollegeAdminDashboard';

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/CollegeRegisterForm' element={<CollegeRegisterForm />}/>
      {/* <Route path='/CollegeAdminDashboard' element={<CollegeAdminDashboard />}/> */}
     </Routes>
      <ToastContainer position="top-right" autoClose={3000}  theme="colored" hideProgressBar={false}/>
    </BrowserRouter>
    </>
  )
}

export default App
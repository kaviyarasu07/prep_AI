import React from 'react'
<<<<<<< Updated upstream
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from './components/LandingPage'
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import CollegeRegistration from './components/CollegeRegisterForm'
>>>>>>> Stashed changes

const App = () => {
  return (
    <>
    <BrowserRouter>
<<<<<<< Updated upstream
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
=======
     <Routes>
      <Route path='/' element={<CollegeRegistration />}/>
     </Routes>
      <ToastContainer position="top-right" autoClose={3000}  theme="colored"  hideProgressBar={false}/>
>>>>>>> Stashed changes
    </BrowserRouter>
    </>
  )
}

export default App
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ForgetPassword from "./Components/ForgetPassword";
import MentorDashboard from "./Components/MentorDashboard";
import Departmentdashboard from "./Components/Departmentdashboard";
import Addstudents from "./Components/Addstudents";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
             <Route path="/departmentdashboard" element={<Departmentdashboard />} />
               <Route path="/addstudents" element={<Addstudents />} />
                <Route path="/navbar" element={<Navbar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
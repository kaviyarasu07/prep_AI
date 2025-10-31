

import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CollegeDepartment from './assets/Compontent/CollegeDepartment';
import Reports from './assets/Compontent/Reports';
import DepartmentAdmins from './assets/Compontent/DepartmentAdmins';
import Departmentmanger from './assets/Compontent/Departmentmanger';
import Assessments from './assets/Compontent/Assessments';
import Students from './assets/Compontent/Students';
import MockInterviews from './assets/Compontent/MockInterviews';

function App() {
  return (
    <BrowserRouter>
      <Routes>


        {/* <Route path="/" element={<CollegeDepartment />} /> */}
        <Route path="/collegeDepartment" element={<CollegeDepartment />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/Departmentadmin" element={<DepartmentAdmins />} />
        <Route path="/Departmentmanger" element={<Departmentmanger />} />
        <Route path="/Assessment" element={<Assessments />} />
        <Route path="/Students" element={<Students/>} />
        <Route path="/Mockinterview" element={<MockInterviews />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

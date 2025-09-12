// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:8080/api/test/1')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('API request failed');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Backend API Data</h1>
//       {data ? (
//         <div className="text-lg">
//           <p><strong>Name:</strong> {data.name}</p>
//           <p><strong>Domain:</strong> {data.domain}</p>
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }

// export default App;

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
}

export default App;


// import React from 'react'

// function MockInterviews() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default MockInterviews

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaPlayCircle, FaCalendarAlt, FaClock } from 'react-icons/fa';
// import Navbar from '../../Layout/Navbar';

// function MockInterviews() {
  

//   return (
//     <>
//       <Navbar />
      
//     </>
//   );
// }

// export default MockInterviews;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import Navbar from '../../Layout/Navbar';

// Mock interview data
const mockInterviewsData = [
  { id: 1, title: "College Name", duration: "30 mins", date: "2025-10-01" },
  { id: 2, title: "Backend Developer Interview", duration: "45 mins", date: "2025-10-03" },
  { id: 3, title: "Fullstack Developer Interview", duration: "60 mins", date: "2025-10-05" },
  { id: 4, title: "Frontend Developer Interview", duration: "40 mins", date: "2025-10-07" }, // ✅ new box
];

// Function to render boxes dynamically
const generateBoxes = (data, boxesPerRow = 3) => (
  <div className="container">
    {Array.from({ length: Math.ceil(data.length / boxesPerRow) }).map((_, rowIndex) => {
      const rowItems = data.slice(rowIndex * boxesPerRow, (rowIndex + 1) * boxesPerRow);
      return (
        <div className="row mb-3" key={rowIndex}>
          {rowItems.map((item) => (
            <div key={item.id} className={`col-12 col-md-${12 / boxesPerRow} mb-3`}>
              <div className="border p-3 rounded h-100">
                <h5>{item.title}</h5>
                <p>
                  <FaClock className="me-2" /> {item.duration}
                  <br />
                  <FaCalendarAlt className="me-2" /> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

function MockInterviews() {
  return (
    <>
      <Navbar />
      <div className="my-5">
        <h2 className="text-center mb-3">Mock Interviews</h2>
        <p className="text-center text-muted mb-4">
          Click on any interview to start.
        </p>

        {/* Render boxes */}
        {generateBoxes(mockInterviewsData, 3)}
      </div>
    </>
  );
}

export default MockInterviews;


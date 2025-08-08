import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/test/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Backend API Data</h1>
      {data ? (
        <div className="text-lg">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Domain:</strong> {data.domain}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
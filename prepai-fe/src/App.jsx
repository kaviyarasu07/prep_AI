import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuperadminDashboard from "./Compontent/Superadmindashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuperadminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

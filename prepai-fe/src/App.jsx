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

export default App;
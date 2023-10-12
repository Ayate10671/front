
import Login from "./pages/Login";
import AdminHome from './pages/AdminHome';
import StudentData from './pages/StudentData';
import SDasasy from './pages/SDasasy';

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="/admin/sdata" element={<StudentData/>} />
        <Route path="/admin/sdata/asasy" element={<SDasasy/>} />
      </Routes>
    </div>
  );
}

export default App;

// <Route path="/admin/sdata/asasy" element={<SDasasy/>} />
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Dashboard from "./views/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

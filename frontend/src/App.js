import React from "react";
import "./App.css";
import Department from "./Department";
import Navbar from "./Navbar";
import Student from "./Student";
import Teachers from "./Teachers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="d-flex justify-content-between">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Student />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="departments" element={<Department />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

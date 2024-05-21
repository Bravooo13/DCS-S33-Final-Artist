import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes for Art and Poetry here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./style.css";
import Subscribe from "./components/Subscribe";
import ContactUs from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/subscribe" element={<Subscribe />} />
          {/* Add other routes for Art and Poetry here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

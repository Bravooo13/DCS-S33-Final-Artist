import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes for Art and Poetry here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

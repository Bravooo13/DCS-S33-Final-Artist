import React from "react";
import NavBar from "./Navbar";
import Signup from "./Newsletter";

const Subscribe: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      <NavBar />
      <Signup />
    </div>
  );
};

export default Subscribe;

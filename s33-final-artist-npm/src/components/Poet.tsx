import React from "react";
import NavBar from "./Navbar";
import Poetrycontent from "./Poetrycontent";

const Poet: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white">
      <NavBar />
      <Poetrycontent />
    </div>
  );
};

export default Poet;

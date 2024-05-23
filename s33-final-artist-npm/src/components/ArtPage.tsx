import React from "react";
import NavBar from "./Navbar";
import ArtworkGallery from "./Art";

const ArtPage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      <NavBar />
      <ArtworkGallery />
    </div>
  );
};

export default ArtPage;

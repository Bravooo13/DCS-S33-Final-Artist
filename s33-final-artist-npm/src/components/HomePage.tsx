import React from "react";
import NavBar from "./Navbar";
import { GalleryWithCarousel } from "./Gallary";

const HomePage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <NavBar />
      <GalleryWithCarousel />
      <h1 className="absolute text-6xl text-white">Lindsay Adler</h1>
    </div>
  );
};

export default HomePage;

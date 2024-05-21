import React from "react";
import NavBar from "./Navbar";
import { GalleryWithCarousel } from "./Gallary";

const HomePage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      <NavBar />
      <GalleryWithCarousel />
      <h1 className="absolute text-9xl text-white">Art Gallery</h1>
    </div>
  );
};

export default HomePage;

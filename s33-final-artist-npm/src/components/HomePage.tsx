import React from "react";
import { GalleryWithCarousel } from "./Gallary";

const HomePage: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white">
      <GalleryWithCarousel />
      <h1 className="absolute text-6xl">Lindsay Adler</h1>
    </div>
  );
};

export default HomePage;

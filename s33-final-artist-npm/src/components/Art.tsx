import React, { useState } from "react";
import imageData from "./ImageData";

const ArtworkGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-3 gap-4">
        {imageData.map((img, index) => (
          <img
            key={index}
            src={img.path}
            alt={img.alt}
            className="w-72 h-auto object-cover mt-4 cursor-pointer"
            onClick={() => openImage(img)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <button
            onClick={closeImage}
            className="absolute top-0 left-0 text-white text-3xl p-4 z-50"
          >
            &times;
          </button>
          <img
            src={selectedImage.path}
            alt={selectedImage.alt}
            className="max-h-full w-auto object-scale-down"
          />
        </div>
      )}
    </div>
  );
};

export default ArtworkGallery;

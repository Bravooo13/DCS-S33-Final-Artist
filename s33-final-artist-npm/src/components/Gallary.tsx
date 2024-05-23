import React from "react";
import { Carousel } from "@material-tailwind/react";
import imageData from "./ImageData"; // Adjust the path as necessary

export function GalleryWithCarousel() {
  return (
    <Carousel loop={true} autoplay={true} className="rounded-xl">
      {imageData.map((img, index) => (
        <img
          key={index}
          src={img.path}
          alt={img.alt}
          className="h-full w-full object-cover object-center"
        />
      ))}
    </Carousel>
  );
}

export default GalleryWithCarousel;

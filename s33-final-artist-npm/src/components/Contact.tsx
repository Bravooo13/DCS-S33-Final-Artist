import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Carousel } from "@material-tailwind/react";
import NavBar from "./Navbar";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <NavBar />
      <div className="md:flex-1 md:flex bg-gray-300">
        <div className="md:w-1/2 bg-gray-200 flex items-center justify-center">
          <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <FaInstagram className="text-4xl hover:scale-105 transition duration-300" />
                <a
                  href="https://www.instagram.com/your_instagram_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:scale-105 transition duration-300"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaFacebook className="text-4xl hover:scale-105 transition duration-300" />
                <a
                  href="https://www.facebook.com/your_facebook_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:scale-105 transition duration-300"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-4xl hover:scale-105 transition duration-300" />
                <span className="text-lg hover:scale-105 transition duration-300">
                  (+1)207-123-4567
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-4xl hover:scale-105 transition duration-300" />
                <span className="text-lg hover:scale-105 transition duration-300">
                  65 Campus Avenue, Lewiston ME 04240
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Carousel loop autoplay>
              <img
                src="https://i.pinimg.com/originals/7f/ed/8d/7fed8dac037d9e69775c70b0e8095767.jpg"
                alt="image 1"
                className="h-full"
              />

              <img
                src="https://i.pinimg.com/736x/68/32/74/6832742d27028971aa0229cc40931a58.jpg"
                alt="image 2"
                className="h-full"
              />

              <img
                src="https://i.pinimg.com/originals/b3/22/79/b32279ac3b6e4c3a0ba08c9e5b530f65.jpg"
                alt="image 3"
                className="h-full"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

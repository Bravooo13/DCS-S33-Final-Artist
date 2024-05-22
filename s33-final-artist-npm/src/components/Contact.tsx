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
          <div className="max-w-md border border-solid border-gray-500 rounded-[10px] px-10 py-16">
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

        <div className="md:w-1/2 relative overflow-hidden bg-gray-200">
          <div className="top-0 flex items-center justify-center">
            <Carousel loop autoplay>
              <div className="flex items-center justify-center h-full">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa6%2Faf%2F3f%2Fa6af3f895afc89cd5b6f23dd014d8080.jpg&f=1&nofb=1&ipt=ca54510da98781dfe0a42042a14c328b24946bd950aea8bf2a6e1c20268b9026&ipo=images"
                  alt="image 3"
                  className="h-[790px]"
                />
              </div>
              <div className="flex items-center justify-center h-full">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F12%2F07%2F0b%2F12070b285aaa0fe8d363f50892fc7d49.jpg&f=1&nofb=1&ipt=d93bff0e35debb78021121eed86bf218960d673834e6ce69c7ccd51be4bec77d&ipo=images"
                  alt="image 2"
                  className="h-[790px]"
                />
              </div>
              <div className="flex items-center justify-center h-full">
                <img
                  src="https://i.pinimg.com/originals/7f/ed/8d/7fed8dac037d9e69775c70b0e8095767.jpg"
                  alt="image 1"
                  className="h-[790px] items-center"
                />
              </div>
              <div className="flex items-center justify-center h-full">
                <img
                  src="https://i.pinimg.com/originals/b3/22/79/b32279ac3b6e4c3a0ba08c9e5b530f65.jpg"
                  alt="image 3"
                  className="h-[790px]"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white p-4 fixed top-0 w-full">
      <ul className="flex justify-center space-x-12 text-neutral-500 text-xl">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/art" className="hover:underline">
            Art
          </Link>
        </li>
        <li>
          <Link to="/poetry" className="hover:underline">
            Poetry
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

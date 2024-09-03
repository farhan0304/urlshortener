import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-800  p-4"
    style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">URL Shortener</Link>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300  hover:text-white">Home</Link>
          <Link to="/login" className="text-gray-300 hover:text-white">Log In</Link>
          <Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

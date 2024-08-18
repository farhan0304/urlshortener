import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800  p-4"
    style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">URL Shortener</a>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4">
          <a href="/" className="text-gray-300  hover:text-white">Home</a>
          <a href="/login" className="text-gray-300 hover:text-white">Log In</a>
          <a href="/signup" className="text-gray-300 hover:text-white">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

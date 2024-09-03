import React from 'react';
import {Link} from "react-router-dom"

const Navbar = ({status,setStatus}) => {
  
  const handleLogout = async () =>{
    const response = await fetch("/user/logout");
    setStatus(false);
  }
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
          {!status&&<Link to="/login" className="text-gray-300 hover:text-white">Log In</Link>}
          {!status&&<Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link>}
          {status&&<Link to="/login" onClick={handleLogout} className="text-gray-300 hover:text-white">Log Out</Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

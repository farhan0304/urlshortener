import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4"
    style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Copyright Text */}
        <div className="text-gray-400 text-sm">
          <span>&copy; 2024 Farhan Nizam. All rights reserved.</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-400">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

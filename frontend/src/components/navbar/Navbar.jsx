import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ContactForm from "../contactUs/ContactForm"; // Import the Contact Form component

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const handleContactClick = () => {
    setContactFormVisible(true);
    setIsMobileMenuOpen(false); // Close the mobile menu if open
  };

  const handleCloseForm = () => {
    setContactFormVisible(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md z-30 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Section: Logo */}
        <div className="text-xl font-bold text-gray-800">Godrej Group</div>

        {/* Right Section: Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
          <a href="#price" className="hover:text-blue-500">
            Price
          </a>
          <a href="#floor-plan" className="hover:text-blue-500">
            Location
          </a>
          <a href="#amenities" className="hover:text-blue-500">
            Gallery
          </a>
          
          {/* <a href="#specification" className="hover:text-blue-500">
            Specification
          </a> */}
          <button
            onClick={handleContactClick}
            className="hover:text-blue-500 focus:outline-none"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </a>
          <a href="#price" className="block px-4 py-2 hover:bg-gray-100">
            Price
          </a>
          <a href="#floor-plan" className="block px-4 py-2 hover:bg-gray-100">
            Floor Plan
          </a>
          <a href="#amenities" className="block px-4 py-2 hover:bg-gray-100">
            Amenities
          </a>
          <a href="#location-plan" className="block px-4 py-2 hover:bg-gray-100">
            Location Plan
          </a>
          <a href="#specification" className="block px-4 py-2 hover:bg-gray-100">
            Specification
          </a>
          <button
            onClick={handleContactClick}
            className="block px-4 py-2 w-full text-left hover:bg-gray-100 focus:outline-none"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* Contact Form Popup */}
      {isContactFormVisible && <ContactForm onClose={handleCloseForm} />}
    </nav>
  );
};

export default Navbar;

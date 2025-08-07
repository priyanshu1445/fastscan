import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center sm:gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-white">
              <FaPhoneAlt /> +1 234 567 890
            </a>
            <a href="mailto:info@example.com" className="flex items-center gap-1 hover:text-white">
              <FaEnvelope /> info@example.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-blue-400"><FaFacebookF size={23} /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn size={23} /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram size={23} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-lg text-gray-700 font-medium">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#products" className="hover:text-blue-600">Products</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
              <button
                onClick={() => setShowAuthModal(true)}
                className="ml-4 px-4 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Login / Signup
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
            <ul className="flex flex-col gap-4 py-4 text-gray-700 font-medium">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#products" className="hover:text-blue-600">Products</a></li>
              <li><a href="contact" className="hover:text-blue-600">Contact</a></li>
              <li>
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsOpen(false); // close mobile menu
                  }}
                  className="text-left hover:text-blue-600"
                >
                  Login / Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal show={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </header>
  );
};

export default Header;

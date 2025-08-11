// Header.jsx
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
import { Link, useNavigate } from "react-router-dom"; // ✅ Added Link here

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Example download link — replace with actual app store link
  const downloadApp = () => {
    window.open("https://your-app-download-link.com", "_blank");
  };

  return (
    <header className="fixed w-full z-50 top-0">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center sm:gap-6">
            <a href="tel:+917240009996" className="flex items-center gap-1 hover:text-white">
              <FaPhoneAlt /> +91 7240009996
            </a>
            <a href="mailto:hello@fastscan.in" className="flex items-center gap-1 hover:text-white">
              <FaEnvelope /> hello@fastscan.in
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/fastscanqr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaFacebookF size={23} />
            </a>
            <a
              href="https://www.instagram.com/fastscanqr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram size={23} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn size={23} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
          {/* Logo */}
<div className="flex items-center">
  <Link to="/"> {/* ✅ Added Link to homepage */}
    <img
      src={logo}
      alt="Logo"
      className="h-8 w-auto object-contain cursor-pointer"
    />
  </Link>
</div>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-lg text-gray-700 font-medium">
              <Link to="/products/standees" className="hover:text-blue-600">NFC Standee</Link>
              <Link to="/products/keychains" className="hover:text-blue-600">Smart Keychain</Link>
              <Link to="/schedule-demo" className="hover:text-blue-600">Schedule Demo</Link>
              <Link to="/support" className="hover:text-blue-600">Support</Link>
              <button
                onClick={downloadApp}
                className="ml-4 px-4 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Download App
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
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-4 py-4 text-gray-700 font-medium">
              <li>
                <Link to="/products/standees" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
                  NFC Standee
                </Link>
              </li>
              <li>
                <Link to="/products/keychains" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
                  Smart Keychain
                </Link>
              </li>
              <li>
                <Link to="/schedule-demo" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
                  Schedule Demo
                </Link>
              </li>
              <li>
                <Link to="/support" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
                  Support
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    downloadApp();
                  }}
                  className="text-left px-4 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Download App
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

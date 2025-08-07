import React, { useState, useRef, useEffect } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaCommentDots } from "react-icons/fa";

const FloatingContactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2"
    >
      {/* Contact Options (Visible When Open) */}
      {isOpen && (
        <div className="flex flex-col items-end space-y-2 animate-slide-up">
          <a
            href="tel:+1234567890"
            className="bg-white shadow-md px-4 py-2 rounded-full flex items-center text-black hover:bg-gray-100 transition"
          >
            <FaPhone className="mr-2" /> Call Us
          </a>
          <a
            href="mailto:info@example.com"
            className="bg-white shadow-md px-4 py-2 rounded-full flex items-center text-black hover:bg-gray-100 transition"
          >
            <FaEnvelope className="mr-2" /> Email
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-green-600 transition"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={toggleMenu}
        className="bg-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition"
      >
        <FaCommentDots size={24} />
      </button>
    </div>
  );
};

export default FloatingContactMenu;

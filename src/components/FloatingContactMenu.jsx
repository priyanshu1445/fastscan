import React, { useState, useRef, useEffect } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaCommentDots, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const FloatingContactMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      {isOpen && (
        <div className="flex flex-col items-end space-y-2 animate-slide-up">
        <a
  href="tel:+917240009996"
  className="flex items-center gap-2 bg-white border border-gray-200 text-gray-800 font-medium px-5 py-2 rounded-full shadow-sm hover:bg-gray-100 hover:shadow-md transition duration-200"
>
  <FaPhoneAlt className="text-primary" />
  +91 72400 09996
</a>
          <a
            href="mailto:hello@fastscan.in"
            className="bg-white shadow-md px-4 py-2 rounded-full flex items-center text-black hover:bg-gray-100 transition"
          >
            <FaEnvelope className="mr-2" /> hello@fastscan.in
          </a>
         
        
           <a
            href="https://wa.me/917240009996"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-green-600 transition"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={toggleMenu}
        className="bg-[#090040] text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition"
      >
        <FaCommentDots size={24} />
      </button>
    </div>
  );
};

export default FloatingContactMenu;

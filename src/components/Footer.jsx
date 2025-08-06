import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#090040] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h3 className="text-3xl font-bold mb-4">FastScan</h3>
          <p className="text-gray-300 mb-6">
            Smart NFC solutions for standees and keychains, connecting you to the future of seamless digital interaction.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-[#4F9DFF] transition">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#4F9DFF] transition">Products</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#4F9DFF] transition">Contact</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#4F9DFF] transition">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Resources</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/blog" className="hover:text-[#4F9DFF] transition">Blog</Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-[#4F9DFF] transition">FAQs</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#4F9DFF] transition">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#4F9DFF] transition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <div className="flex items-center space-x-3 mb-3">
            <MdEmail className="text-[#4F9DFF] text-xl" />
            <span>support@fastScan.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MdPhone className="text-[#4F9DFF] text-xl" />
            <span>+91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} FastScan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

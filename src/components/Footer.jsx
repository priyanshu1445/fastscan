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
              <a href="/" className="hover:text-[#4F9DFF] transition">Home</a>

            </li>
            <li>
            <a href="#products" className="hover:text-[#4F9DFF] transition">Products</a>

            </li>
            <li>
           <a href="#contact" className="hover:text-[#4F9DFF] transition">Contact</a>

            </li>
            <li>
          <a href="#about" className="hover:text-[#4F9DFF] transition">About Us</a>

            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Resources</h4>
          <ul className="space-y-3">
            <li>
              <a href="#blog" className="hover:text-[#4F9DFF] transition">Blog</a>

            </li>
            <li>
              <a href="#faq" className="hover:text-[#4F9DFF] transition">FAQs</a>

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
        {/* Contact */}
<div>
  <h4 className="text-xl font-semibold mb-4">Contact Us</h4>

  <div className="flex items-center space-x-3 mb-3">
    <MdEmail className="text-[#4F9DFF] text-xl" />
    <a href="mailto:hello@fastscan.in" className="hover:text-[#4F9DFF] transition">
      hello@fastscan.in
    </a>
  </div>

  <div className="flex items-center space-x-3 mb-3">
    <MdPhone className="text-[#4F9DFF] text-xl" />
    <a href="tel:+917240009996" className="hover:text-[#4F9DFF] transition">
      +91 72400 09996
    </a>
  </div>

  <div className="flex items-start space-x-3">
    <svg className="text-[#4F9DFF] w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0C6.134 0 3 3.134 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 4.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
    <a
      href="https://www.google.com/maps/place/154+Krishna+Sarovar,+Mansarovar,+Jaipur"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#4F9DFF] transition"
    >
      154 Krishna Sarovar, Mansarovar, Jaipur
    </a>
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

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ Import this
import "../index.css";

const UserInfoModal = () => {
  const location = useLocation(); // ✅ Get current path
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setShow(true); // show modal after 1.5s only on homepage
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    setShow(false);
  };

  if (!show || location.pathname !== "/") return null; // ✅ only show on home

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative transform animate-slideDownSlow">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={() => setShow(false)}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Enter Your Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoModal;

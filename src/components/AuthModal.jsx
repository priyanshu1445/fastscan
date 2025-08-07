import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthModal = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [animate, setAnimate] = useState(false); // for slide-down animation

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
  };

  useEffect(() => {
    if (show) {
      // Slight delay to trigger slide-down after mount
      setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-0 backdrop-blur-sm">
      <div
        className={`bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative transition-all duration-300 transform ${
          animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border px-3 py-2 rounded pr-10"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-600 hover:underline"
              >
                Create one
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

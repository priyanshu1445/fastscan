import React from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json"; // Replace with your Lottie JSON

const GetInTouch = () => {
  return (
    <section className="w-full bg-white py-16 px-4" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* === Left Column: Contact Details & Form === */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#090040] mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Have questions or want to collaborate? We’d love to hear from you. 
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4F9DFF]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4F9DFF]"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4F9DFF] h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#090040] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#1a73e8] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* === Right Column: Lottie Animation === */}
        <div className="flex justify-center">
          <div className="w-72 md:w-96 lg:w-[28rem]">
            <Lottie animationData={contactAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

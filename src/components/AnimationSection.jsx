import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/fast-scan.json";

const AnimationSection = () => {
  return (
    <section className="relative w-full  px-4 py-16 overflow-hidden">
      
      {/* Decorative Blurred Circle */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#090040] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1a73e8] opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Lottie Animation */}
              <div 
          className="space-y-6 text-center md:text-left"
          data-aos="fade-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#090040] to-[#1a73e8] bg-clip-text text-transparent">
            Experience the Future with FastScan
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
            <span className="font-semibold text-[#090040]">FastScan</span> leverages cutting-edge 
            NFC technology to create smart standees and NFC-enabled keychains, enabling seamless 
            digital interactions and smarter connections.
          </p>

          <button className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-[#090040] to-[#1a73e8] text-white hover:shadow-2xl hover:scale-105 transition duration-300">
            Learn More
          </button>
        </div>  

        {/* Right Column: Text & Button */}
  


   <div 
          className="flex justify-center md:justify-start"
          data-aos="fade-right"
        >
          <div className="w-full max-w-md transform hover:scale-105 transition duration-500">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationSection;

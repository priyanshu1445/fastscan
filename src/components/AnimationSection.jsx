import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/fast-scan.json"; // Downloaded Lottie JSON file

const AnimationSection = () => {
  return (
    <section className="w-full  bg-white flex items-center px-4 py-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
   

        {/* Right Column: Text & Button */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#090040] leading-tight">
            Experience the Future with FastScan
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            <span className="font-semibold text-[#090040]">FastScan</span> leverages cutting-edge 
            NFC technology to create smart standees and NFC-enabled keychains, enabling seamless 
            digital interactions and smarter connections.
          </p>
          <button className="bg-[#090040] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#1a73e8] transition">
            Learn More
          </button>
        </div>



             {/* Left Column: Lottie Animation */}
        <div className="flex justify-center">
          <div className="w-100 md:w-100">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationSection;

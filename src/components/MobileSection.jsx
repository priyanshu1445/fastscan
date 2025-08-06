import React from "react";
import Lottie from "lottie-react";
import mobileAnimation from "../assets/Mobile.json"; // replace with your Lottie file

const MobileSection = () => {
  return (
    <section className="w-full  bg-white flex items-center px-4 py-5 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Lottie Animation */}
        <div className="flex justify-center">
          <div className="w-100 md:w-100">
            <Lottie animationData={mobileAnimation} loop={true} />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="text-gray-900 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Smart. Simple. Seamless.
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Experience the future of smart connectivity with{" "}
            <span className="text-[#090040] font-semibold">FastScan</span>.  
            Effortlessly share information with just a tap, thanks to our NFC-enabled
            smart standees and keychains — bridging the gap between digital and real-world interactions.
          </p>
          <button className="mt-4 bg-[#090040] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#1a73e8] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;

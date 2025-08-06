import React from "react";
import HeroImg from "../assets/home-banner.png";

const Hero = () => {
  return (
    <section 
      className="w-full bg-cover bg-fixed bg-center  min-h-screen flex items-center"
      style={{
        backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="text-white space-y-2 mt-[150px]">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-xl max-w-md">
            We provide the best solutions to help your business grow and achieve success.
          </p>
          <button className="bg-white text-[#090040] font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img 
            src={HeroImg} 
            alt="Hero" 
            className="w-full max-w-xl lg:max-w-3xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

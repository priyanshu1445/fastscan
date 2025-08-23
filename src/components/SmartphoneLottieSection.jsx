import React from "react";
import Lottie from "lottie-react";
import smartphoneAnimation from "../assets/smartphone.json"; // Replace with your Lottie file path
import ImageSlider from "../components/ImageSlider";
// import ImageSlider from "./ImageSlider";

const SmartphoneLottieSection = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-8 text-white text-center"
      style={{
        backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)",
      }}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
        Smarter Way to Connect
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl ">
        Experience seamless digital interactions with our NFC-enabled smartphone solutions. 
        Tap to share contact information, links, and more — no apps required, 
        just smart connectivity designed for the future.
      </p>

      {/* Responsive Lottie Animation */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl my-8">
       <ImageSlider/>
      </div>
    </section>
  );
};

export default SmartphoneLottieSection;

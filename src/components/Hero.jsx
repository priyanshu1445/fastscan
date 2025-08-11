import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImg from "../assets/standeeherop.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 1000ms animation, triggers once
  }, []);

  return (
    <section 
      className="w-full bg-cover bg-fixed bg-center min-h-screen flex items-center"
      style={{
        backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div 
          className="text-white space-y-2 mt-[150px]" 
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Share Your Business Instantly – Just Tap or Scan
          </h1>
          <p className="text-lg md:text-xl max-w-md">
            Make a lasting first impression with FASTSCAN’s Smart NFC Business Standees and Smart QR Business Keychains. 
            Share your complete digital profile in seconds – no apps, no hassle, no paper waste. 
            One tap or scan, and your clients have everything they need.
          </p>
        </div>

        {/* Right Image */}
        <div 
          className="flex justify-center md:justify-end" 
          data-aos="fade-up"
          data-aos-delay="200" // delay for stagger effect
        >
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

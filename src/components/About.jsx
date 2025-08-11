import React from "react";
import AboutVideo from "../assets/about.mp4"; // MP4 Video
import Logo from "../assets/logo.png"; // Your company logo

const About = () => {
  return (
    <section className="w-full py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* --- Top Info --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
          {/* Left Column: Logo + Heading */}
          <div 
            className="flex flex-col space-y-4"
            data-aos="fade-up"
          >
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                FastScan <span className="text-[#090040]">— <br /> Smarter Connections</span>
              </h2>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              Pioneering NFC Technology for Smart Standees & Keychains
            </h3>
          </div>

          {/* Right Column: Description */}
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-700 text-lg leading-relaxed">
              About <span className="font-semibold text-[#090040]">FASTSCAN</span> — At FASTSCAN, we redefine 
              the way professionals and businesses share their information. 
              Our innovative Smart NFC Business Standees and Smart QR Business Keychains 
              help you go beyond traditional business cards. With a single tap or scan, 
              you can instantly share your contact details, social media links, services, 
              even receive payments – all in a sleek digital profile.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              We believe in making networking smarter, faster, and more sustainable. 
              That’s why our solutions are designed to be eco-friendly, easy to update, 
              and highly impactful – ensuring you never have to reprint materials again.
            </p>
          </div>
        </div>

        {/* --- Bottom Info with Video --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Video Column (smaller) */}
          <div 
            className="md:col-span-2 flex justify-center"
            data-aos="fade-up"
          >
            <video 
              src={AboutVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Text Column (larger) */}
          <div 
            className="md:col-span-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold text-gray-900">
              NFC Technology
            </h3>
            <h1 className="text-2xl sm:text-5xl font-semibold text-gray-700 mb-4">
              All it takes is a tap.
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team focuses on creating modern solutions that streamline processes, 
              improve efficiency, and deliver exceptional user experiences. From cutting-edge 
              technologies to seamless integration, we bring your ideas to life with 
              precision and creativity. Our commitment to excellence drives every project 
              we undertake, ensuring outstanding results for our clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

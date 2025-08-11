import React from "react";
import Lottie from "lottie-react";
import { CheckCircle } from "lucide-react"; // icon library
import mobileAnimation from "../assets/Mobile.json";

const features = [
  {
    title: "Unique Digital Profile",
    desc: "Your personalized online profile with all your details in one place."
  },
  {
    title: "Single Tap/Scan, Multiple Options",
    desc: "Share contact info, website, social media, or portfolio instantly."
  },
  {
    title: "Receive Payment",
    desc: "Just add your UPI ID and change it anytime."
  },
  {
    title: "Get Analytical Report",
    desc: "Track views, clicks, and capture location."
  },
  {
    title: "Capture Leads & Inquiries",
    desc: "Collect customer details on the spot."
  },
  {
    title: "Easy Dashboard Access",
    desc: "Update your details anytime, anywhere."
  },
  {
    title: "No Reprints Required",
    desc: "Save costs and the environment with digital updates."
  }
];

const MobileSection = () => {
  return (
    <section className="w-full bg-white flex items-center px-4 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Animation */}
        <div className="flex justify-center" data-aos="fade-up">
          <div className="w-full max-w-md">
            <Lottie animationData={mobileAnimation} loop={true} />
          </div>
        </div>

        {/* Right: Features */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#090040]">
            Our Salient Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 rounded-xl bg-gray-50 shadow-md hover:shadow-lg transition"
              >
                <CheckCircle className="text-[#090040] w-6 h-6 flex-shrink-0 mt-1" />
                <div className="ml-3">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;

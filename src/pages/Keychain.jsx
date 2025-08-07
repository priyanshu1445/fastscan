import React from "react";
import {
  FaCheckCircle,
  FaMobileAlt,
  FaLock,
  FaLink,
  FaQuoteLeft,
} from "react-icons/fa";
import keychainImg from "../assets/1.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Keychain = () => {
  const features = [
    {
      icon: <FaMobileAlt className="text-[#090040] text-4xl mb-4" />,
      title: "Smart Sharing",
      desc: "Share contact info and links instantly with one tap.",
    },
    {
      icon: <FaLock className="text-[#090040] text-4xl mb-4" />,
      title: "Secure Design",
      desc: "Built for safe and reliable usage anywhere.",
    },
    {
      icon: <FaLink className="text-[#090040] text-4xl mb-4" />,
      title: "Custom Links",
      desc: "Easily link to websites, apps, or custom URLs.",
    },
    {
      icon: <FaCheckCircle className="text-[#090040] text-4xl mb-4" />,
      title: "Durable Build",
      desc: "Crafted to withstand daily use and keep your data safe.",
    },
  ];

  const testimonials = [
    "The NFC keychain made networking so much easier for our team!",
    "Great quality and seamless experience using it at events.",
    "I love how I can customize and share my digital card with just a tap.",
  ];

  return (
    <div className="font-sans text-gray-800">
      <Header />

      {/* ===== HERO SECTION ===== */}
    <section
  className="relative min-h-screen flex items-center px-6 text-white"
  style={{ backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)" }}
>
  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center pt-[100px]">
    {/* Left Content */}
    <div className="space-y-6 text-center md:text-left order-2 md:order-1">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        NFC Keychains <br /> For Smarter Connectivity
      </h1>
      <p className="text-lg md:text-xl text-gray-300">
        Carry your digital identity with you. Our NFC-enabled keychains make
        sharing contact details, websites, or files seamless with just a tap.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="/contact"
          className="px-8 py-4 rounded-lg bg-white text-[#090040] font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition"
        >
          Get Yours Now
        </a>
        <a
          href="/products/keychains"
          className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-[#090040] transition"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center order-1 md:order-2">
      <img
        src={keychainImg}
        alt="NFC Keychain"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-2xl"
      />
    </div>
  </div>
</section>


      {/* ===== ABOUT SECTION ===== */}
      <section
        className="py-20 px-6"
        style={{ backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white">
          <img
            src={keychainImg}
            alt="Keychain Display"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose NFC Keychains?</h2>
            <p className="text-gray-300 mb-6">
              Our NFC-enabled keychains are not just practical accessories; they serve as digital tools to
              simplify how you share information.
            </p>
            <ul className="space-y-4">
              {[
                "Instant contact sharing",
                "Secure and durable design",
                "Customizable branding",
                "Seamless connectivity with smartphones",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-white text-xl" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#090040]">
          Key Features of NFC Keychains
        </h2>
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#090040]">
          What Our Customers Say
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {testimonials.map((quote, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-[#090040] text-2xl mb-4" />
              <p className="text-gray-700 mb-4">{quote}</p>
              <span className="font-semibold text-gray-900">Jane Doe</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section
        className="py-20 px-6 text-center text-white"
        style={{ backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Your NFC Keychain?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Tap into the future of digital sharing. Get your NFC-enabled keychain today!
        </p>
       <a
  href="tel:+917240009996"
  className="mt-8 inline-block px-10 py-4 bg-white text-[#090040] font-semibold text-lg rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition"
>
 Contact us
</a>

      </section>

      <Footer />
    </div>
  );
};

export default Keychain;

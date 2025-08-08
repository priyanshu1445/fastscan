import React from "react";
import {
  FaCheckCircle,
  FaLightbulb,
  FaMobileAlt,
  FaTools,
  FaBolt,
  FaQuoteLeft,
} from "react-icons/fa";
import standeeImg from "../assets/standeeherop.png";
import whychooseImg from "../assets/pc2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Standees = () => {
  return (
    <div className="font-sans text-gray-800">



      <Header />
      {/* ===== HERO SECTION ===== */}
  <section
  className="relative min-h-screen flex items-center px-6 text-white"
  style={{
    backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)",
  }}
>
  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center pt-[100px]">
    {/* Left Content */}
    <div className="space-y-6 text-center md:text-left order-2 md:order-1">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Smart Standee <br /> For Modern Branding
      </h1>
      <p className="text-lg md:text-xl text-gray-300">
        Showcase your brand like never before with our innovative Smart
        Standee – designed for maximum impact and customer engagement.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="/contact"
          className="px-8 py-4 rounded-lg bg-white text-[#090040] font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition"
        >
          Get Yours Now
        </a>
        <a
          href="/products/standees"
          className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-[#090040] transition"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center order-1 md:order-2">
      <img
        src={standeeImg}
        alt="Smart Standee"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-2xl"
      />
    </div>
  </div>
</section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-20 px-6" 
        
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
          <img
            src={whychooseImg}
            alt="Standee Display"
            className="rounded-xl w-90 "
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Smart Standee?</h2>
            <p className=" mb-6">
              Built with premium materials and cutting-edge technology, our Smart Standee
              elevates your brand presence with interactive features, portability, and
              customization options.
            </p>
            <ul className="space-y-4">
              {[
                "Premium Build Quality",
                "Easy Setup & Portability",
                "Customizable Branding Options",
                "Interactive Digital Features",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className=" text-xl" />
                  <span className="">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="bg-white py-20 px-6" style={{
          backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)"
        }}>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Key Features of Smart Standee
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaLightbulb className="text-[#090040] text-4xl mb-4" />,
              title: "Smart Display",
              desc: "Dynamic digital screens to showcase engaging content.",
            },
            {
              icon: <FaMobileAlt className="text-[#090040] text-4xl mb-4" />,
              title: "Mobile Control",
              desc: "Update your standee remotely with ease.",
            },
            {
              icon: <FaTools className="text-[#090040] text-4xl mb-4" />,
              title: "Easy Setup",
              desc: "Tool-free assembly for quick deployment.",
            },
            {
              icon: <FaBolt className="text-[#090040] text-4xl mb-4" />,
              title: "Energy Efficient",
              desc: "Optimized power usage for long events.",
            },
          ].map((feature, index) => (
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

      {/* ===== SHOWCASE SECTION ===== */}
      <section className="py-20 px-6 text-center text-white" 
        style={{
          backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)"
        }}
      >
        <h2 className="text-3xl font-bold mb-8">See It In Action</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Our Smart Standee delivers an unmatched brand experience. Watch how it
          elevates marketing and creates an unforgettable impression.
        </p>
        <div className="rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
          <img src={standeeImg} alt="Standee Demo" className="w-full" />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#090040]">
          What Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "The Smart Standee completely transformed our product launch event.",
            "Easy to use, beautiful design, and powerful impact on our audience.",
            "We saw 40% more foot traffic at our booth thanks to the standee.",
          ].map((quote, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-[#090040] text-2xl mb-4" />
              <p className="text-gray-700 mb-4">{quote}</p>
              <span className="font-semibold text-gray-900">John Doe</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section 
        className="py-20 px-6 text-center text-white"
        style={{
          backgroundImage: "linear-gradient(to right, #000 0%, #090040 90%)"
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Connect with us today to get your Smart Standee and stand out from the
          crowd.
        </p>
   <a
  href="tel:+917240009996"
  className="mt-8 inline-block px-10 py-4 bg-white text-[#090040] font-semibold text-lg rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition"
>
Contact us
</a>


      </section>

      {/* ===== FOOTER ===== */}
   <Footer />
    </div>
  );
};

export default Standees;

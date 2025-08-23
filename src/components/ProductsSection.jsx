// pages/ProductsSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import StandeeImg from "../assets/standeehero.png";
import KeychainImg from "../assets/keychainp.png";

const products = [
  {
    id: 1,
    title: "NFC Standees",
    shortDescription:
      "Interactive standees that connect with your smartphone via NFC.",
    image: StandeeImg,
    link: "/products/standees",
    fullDescription: `
      A dynamic standee with NFC & QR power—bring instant access to your business profile with just a tap or scan.

      - NFC‑enabled & QR‑linked.
      - Fully customizable, Update links and apps anytime from your account dashboard.
      - No subscriptions, one-time payment.
      - Affordable display solution.
      - Versatile digital profile manager.
    `,
  },
  {
    id: 2,
    title: "Smart Keychains",
    shortDescription:
      "Stylish keychains that store your digital information and connect with NFC-enabled devices.",
    image: KeychainImg,
    link: "/products/keychains",
    fullDescription: `
      A stylish, QR code and your business logo keychain that directs contacts straight to your digital profile—no cards needed.

      - Easy QR code Scan Instantly directs users to your up-to-date business profile.
      - Elegant and durable.
      - Always editable content, Update your details via your dashboard without reissuing new keychains.
      - Eco-conscious choice.
      - Ultra affordable.
    `,
  },
];

const ProductsSection = () => {
  return (
    <div className="bg-gray-900 py-16" id="products">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-white font-serif">
          Our Smart Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              className="group relative bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-4 transition-all duration-500 hover:shadow-cyan-500/50"
            >
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="flex-shrink-0 mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500 bg-white p-6 md:p-8"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 font-sans">
                      {product.title}
                    </h3>

                    <p className="text-gray-400 text-lg mb-4">
                      {product.shortDescription}
                    </p>

                    <div className="text-gray-300 text-sm space-y-1 mb-6">
                      {product.fullDescription
                        .trim()
                        .split("\n")
                        .filter(Boolean)
                        .map((line, i) => (
                          <p key={i} className="flex items-start gap-2">
                            {line.trim().startsWith("-") ? (
                              <>
                                <span className="text-[#4F9DFF] text-lg leading-none">•</span>
                                <span>{line.replace("-", "").trim()}</span>
                              </>
                            ) : (
                              <span className="italic">{line.trim()}</span>
                            )}
                          </p>
                        ))}
                    </div>
                  </div>

                  <span className="text-[#4F9DFF] font-semibold text-lg inline-flex items-center group-hover:underline mt-4">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
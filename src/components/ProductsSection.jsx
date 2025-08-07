// pages/ProductsSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import StandeeImg from "../assets/standee.png";
import KeychainImg from "../assets/keychain1.png";

const products = [
  {
    id: 1,
    title: "Smart Standees",
    shortDescription: "Interactive standees that connect with your smartphone via NFC.",
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
    title: "NFC Keychains",
    shortDescription: "Stylish keychains that store your digital information and connect with NFC-enabled devices.",
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
        <h2 className="text-2xl sm:text-5xl font-bold text-center mb-12 text-white">
          Our Smart Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              className="group relative bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#305077] to-[#090040] blur-md"></span>

              <div className="relative p-6">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-contain transform group-hover:scale-105 transition duration-500 bg-white p-4 rounded-md"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-white mt-4 mb-2">
                  {product.title}
                </h3>

                <p className="text-gray-400 mb-4">{product.shortDescription}</p>

                {/* Full Description Preview (Optional) */}
                <div className="text-gray-300 text-sm space-y-1 mb-4">
                  {product.fullDescription
                    .trim()
                    .split("\n")
                    .filter(Boolean)
                    .map((line, i) => (
                      <p key={i} className="flex gap-2">
                        {line.trim().startsWith("-") ? (
                          <>
                            <span className="text-[#4F9DFF]">•</span>
                            <span>{line.replace("-", "").trim()}</span>
                          </>
                        ) : (
                          <span className="italic">{line.trim()}</span>
                        )}
                      </p>
                    ))}
                </div>

                <span className="text-[#4F9DFF] font-semibold group-hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;

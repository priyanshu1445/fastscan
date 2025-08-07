import React from "react";
import { Link } from "react-router-dom";
import StandeeImg from "../assets/standee.png";
import KeychainImg from "../assets/keychain1.png";
// import CustomImg from "../assets/custom-nfc.jpg";

const products = [
  {
    id: 1,
    title: "Smart Standees",
    description: "Interactive standees that connect with your smartphone via NFC.",
    image: StandeeImg,
    link: "/products/standees",
  },
  {
    id: 2,
    title: "NFC Keychains",
    description:
      "Stylish keychains that store your digital information and connect with NFC-enabled devices.",
    image: KeychainImg,
    link: "/products/keychains",
  },

];

const ProductsSection = () => {
  return (
    <div className="bg-gray-900 py-16" id="products">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-5xl font-bold text-center mb-12 text-white">
          Our Smart Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              className="group relative bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Glow Effect Border */}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#305077] to-[#090040] blur-md"></span>

              {/* Card Content */}
              <div className="relative p-6">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 group-hover:rotate-1 transition duration-500"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
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

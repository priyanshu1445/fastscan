import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import AnimationSection from "../components/AnimationSection";
import ProductsSection from "../components/ProductsSection";
import MobileSection from "../components/MobileSection";
import ParallaxScroll from "../components/ParallaxScroll";
import SmartphoneLottieSection from "../components/SmartphoneLottieSection";
import GetInTouch from "../components/GetInTouch";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />

      <Hero />

      <About />

      <ProductsSection />

      <ParallaxScroll />

      <MobileSection />
      <AnimationSection />  

      <SmartphoneLottieSection />

      <GetInTouch />

      <BlogSection />

      <FAQSection />

      <Footer />
    </div>
  );
};

export default HomePage;

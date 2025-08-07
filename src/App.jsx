import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Standees from "./pages/Standees";
import Keychain from "./pages/Keychain";
import ScrollToTop from "./components/ScrollToTop";
import UserInfoModal from "./components/UserInfoModal";
import FloatingContactMenu from "./components/FloatingContactMenu";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogDetail from "./pages/BlogDetail";
// import Login from "./pages/Login";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <UserInfoModal /> {/* <-- This is our popup */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/standees" element={<Standees />} />
        <Route path="/products/keychains" element={<Keychain />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/blog/:id" element={<BlogDetail />} />
               <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <FloatingContactMenu/>
    </Router>
  );
};

export default App;

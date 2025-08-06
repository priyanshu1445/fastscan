import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Standees from "./pages/Standees";
import Keychain from "./pages/Keychain";
import ScrollToTop from "./components/ScrollToTop";
import UserInfoModal from "./components/UserInfoModal";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <UserInfoModal /> {/* <-- This is our popup */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/standees" element={<Standees />} />
        <Route path="/products/keychains" element={<Keychain />} />
      </Routes>
    </Router>
  );
};

export default App;

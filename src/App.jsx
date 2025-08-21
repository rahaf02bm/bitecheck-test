import React from "react";
import Navbar from "./component/navbar/navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import PlaceReview from "./pages/placereview/placereview";
import Restaurant from "./pages/reasturant/reasturant";
import { useState } from "react";
import Loginup from "./component/loginup/loginup";
import Footer from "./component/footer/footer";
import { assets } from "./assets/assets";
const App = () => {
  const [showloginup, setShowloginup] = useState(false);

  return (
    <>
      {showloginup ? <Loginup setShowloginup={setShowloginup} /> : <></>}
      <div className="app">
        <Navbar setShowloginup={setShowloginup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-review" element={<PlaceReview />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

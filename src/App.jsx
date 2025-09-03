import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import PlaceReview from "./pages/placereview/placereview";
import Restaurant from "./pages/resturant/resturant";
import Loginup from "./component/loginup/loginup";
import Footer from "./component/footer/footer";
import { assets } from "./assets/assets";
import Header from "./component/header/header";
import RestaurantMenu from "./component/reastmenu/reastmenu";

const App = () => {
  const [showloginup, setShowloginup] = useState(false);

  return (
    <>
      {showloginup ? <Loginup setShowloginup={setShowloginup} /> : <></>}
      <div className="app">
        <Navbar setShowloginup={setShowloginup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placereview" element={<PlaceReview />} />
          <Route path="/resturant" element={<Restaurant />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

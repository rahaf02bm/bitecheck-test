import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/home";
import PlaceReview from "./pages/placereview/placereview";
import AllReview from "./pages/allreview/allreview";
import Loginup from "./component/loginup/loginup";
import LoginPage from "./component/loginup/loginPage";
import Footer from "./component/footer/footer";
import { useAuth } from "./context/AuthContext"; // <-- import context
import { signOut } from "./lib/appwrite";
import RestaurantMenu from "./component/reastmenu/reastmenu";

const App = () => {
  const [showloginup, setShowloginup] = useState(false);
  const navigate = useNavigate();

  // Use global auth state
  const { user, setUser, loading, logout } = useAuth();

  // Call this after successful signup/signin
  const handleAuthSuccess = (usernameValue) => {
    setUser({ ...user, username: usernameValue }); // update context
    setShowloginup(false);
    navigate("/"); // Redirect to home after login/signup
  };

  const handleSignOut = async () => {
    await logout(); // Use context logout
    navigate("/"); // Redirect to home after sign out
  };

  return (
    <>
      {showloginup && (
        <Loginup
          setShowloginup={setShowloginup}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
      <div className="app">
        <Navbar
          setShowloginup={setShowloginup}
          isLoggedIn={!!user}
          username={user?.username || ""}
          handleSignOut={handleSignOut}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/placereview" element={<PlaceReview />} />
          <Route path="/allreview" element={<AllReview />} />
          <Route path="/restaurantMenu" element={<RestaurantMenu />} />
          <Route
            path="/login"
            element={<LoginPage onAuthSuccess={handleAuthSuccess} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

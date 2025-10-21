import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-content">
        <h2>Share Your Experience with us</h2>
        <p>
          This website is designed to help you share your experiences and
          reviews.
        </p>
        <button
          className="header-button"
          onClick={() => navigate("/RestaurantMenu")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;

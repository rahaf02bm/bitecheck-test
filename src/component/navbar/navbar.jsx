import React from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowloginup, isLoggedIn, username, handleSignOut }) => {
  const [menu, setMenu] = React.useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo_icon} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          About
        </li>
        <li
          onClick={() => setMenu("services")}
          className={menu === "services" ? "active" : ""}
        >
          Services
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon"></div>
        {isLoggedIn ? (
          <>
            {/* Show username and sign out button when logged in */}
            <span className="navbar-username ">{username}</span>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          // Show create account button when not logged in
          <button onClick={() => setShowloginup(true)}>Create Account</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

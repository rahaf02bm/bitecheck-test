import React, { useState } from "react";
import "./loginup.css";
import { assets } from "../../assets/assets";
import { createUser, signIn, getCurrentUser } from "../../lib/appwrite";

const Loginup = ({ setShowloginup, onAuthSuccess }) => {
  const [currstate, setCurrstate] = useState("signup");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currstate === "signup") {
      try {
        await createUser(email, password, username);
        onAuthSuccess(username);
      } catch (error) {
        alert("Signup failed: " + error.message);
      }
    } else if (currstate === "login") {
      try {
        await signIn(email, password);
        const user = await getCurrentUser();
        onAuthSuccess(user?.username || email); // Use username if available, fallback to email
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="loginup">
      <form className="loginup-container" onSubmit={handleSubmit}>
        <div className="logintitle">
          <h2>{currstate}</h2>
          <img
            onClick={() => setShowloginup(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <div className="login-inputs">
          {currstate === "login" ? null : (
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">
          {currstate === "signup" ? "Create Account" : "Login"}
        </button>
        <div className="login condition">
          <input type="checkbox" />
          <p>I agree to the Terms of Service and Privacy Policy</p>
        </div>
        {currstate === "signup" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrstate("login")}>Login here</span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrstate("signup")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginup;

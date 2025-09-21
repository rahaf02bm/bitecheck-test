import React, { useState } from 'react';
import './loginup.css';
import { assets } from '../../assets/assets';

const Loginup = ({ setShowloginup }) => {
  const [currstate, setCurrstate] = useState('signup');

  return (
    <div className='loginup'>
      <form className="loginup-container">
        <div className="logintitle">
          <h2>{currstate}</h2>
          <img onClick={() => setShowloginup(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-inputs">
          {currstate==="login" ? <></> :  <input type="text" placeholder='Username' required />}
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currstate === "signup" ? "Create Account" : "Login"}</button>
        <div className="login condition">
          <input type="checkbox" />
          <p>I agree to the Terms of Service and Privacy Policy</p>
        </div>
       {currstate === "signup" ?
  <p>Already have an account? <span onClick={() => setCurrstate('login')}>Login here</span></p>
  :
  <p>Create a new account? <span onClick={() => setCurrstate('signup')}>Click here</span></p>
}
      </form>
    </div>
  );
};

export default Loginup;
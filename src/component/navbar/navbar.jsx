import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
const Navbar = ({setShowloginup}) => {
    const[menu, setMenu] = useState('home')
  return (
    <div className='navbar'>
      <img src={assets.logo_icon} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</li>
        <li onClick={() => setMenu('about')} className={menu === 'about' ? 'active' : ''}>About</li>
        <li onClick={() => setMenu('services')} className={menu === 'services' ? 'active' : ''}>Services</li>
        <li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>Contact</li>
      </ul>
      <div className='navbar-right'></div>
       <img src={assets.search_icon} alt="" />
       <div className='navbar-search-icon'></div>
      <button onClick={() => setShowloginup(true)}>sign in</button>
    </div>
    
  )
}

export default Navbar

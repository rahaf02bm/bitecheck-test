import React, { useState } from 'react'
import './navbar.css'
const Navbar = ({setShowloginup}) => {
    const[menu, setMenu] = useState('home')
  return (
    <div className='navbar'>
      <ul className="navbar-menu">
        <li className={menu === 'home' ? 'active' : ''} onClick={() => setMenu('home')}>Home</li>
        <li className={menu === 'about' ? 'active' : ''} onClick={() => setMenu('about')}>About</li>
        <li className={menu === 'services' ? 'active' : ''} onClick={() => setMenu('services')}>Services</li>
        <li className={menu === 'contact' ? 'active' : ''} onClick={() => setMenu('contact')}>Contact</li>
      </ul>
      <div className='navbar-right'></div>
      <div className='dot'></div>
      <button onClick={() => setShowloginup(true)}>sign in</button>
    </div>
    
  )
}

export default Navbar

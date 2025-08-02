import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <div className="footer" id='footer'>
     <div className='footer-content'>
      <div className='footer-content-left'>
        <p>© 2025 My Website. All rights reserved.</p>
      </div>
         <div className='footer-content-center'></div>
         <h2>company</h2>
            <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
      </div>
      <div className='footer-content-right'></div>
      <h2>get in touch</h2>
      <ul>
        <li>Email: info@mywebsite.com</li>
        <li>Phone: (123) 456-7890</li>
      </ul>
    </div>
  )
}

export default footer

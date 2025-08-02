import React from 'react'
import Navbar from './component/navbar/navbar.jsx'
import './index.css'
// import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
// import PlaceReview from './pages/placereview/placereview'
// import Restaurant from './pages/home/restaurant/restaurant'
import { useState } from 'react'
import Loginup from './component/loginup/loginup.jsx'

const App = () => {

  const {showloginup, setShowloginup} = useState(false)

  return (
    <>
    {showloginup?<Loginup setShowloginup={setShowloginup} />:<></>}
      <div className="app">
        <Navbar setShowloginup={setShowloginup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-review" element={<PlaceReview />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </div>
      <footer />
    </>
  )
}

export default App


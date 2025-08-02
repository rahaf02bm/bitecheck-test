import React from 'react'
import './placereview.css'
import { useState } from "react";

const placereview = () => {
  const [reviews, setReviews] = useState([]);
  return (
    <div>
      <div className="text-center">
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => setRating(value)}
            style={{
              fontSize: "30px",
              color: value <= rating ? "#FFA500" : "#ccc",
              cursor: "pointer",
              margin: "5px"
            }}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-brown mt-2">RATE: {rating} / 5</p>
    </div>
    </div>
  )
}

export default placereview

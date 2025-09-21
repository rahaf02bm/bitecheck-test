import React from 'react'
import './reastmenu.css'
import { menu_list } from '../../assets/assets'
import { useNavigate } from "react-router-dom";

const RestaurantMenu = ({ catagry, setcatagry }) => {
  const navigate = useNavigate();

  return (
    <div className='explor-resturant' id='explor-resturant'>
      <h1>explore restaurants and more</h1>
      <p className='explor-menutext'>Discover a variety of cuisines and dining options near you.</p>
      <div className='explor-menu-list'>
        {menu_list.map((item, index) => (
          <div className='explor-menu-item' key={index}>
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "24px" }}>
        <button
          className="place-review-btn"
          onClick={() => navigate("/placereview")}
          style={{
            padding: "10px 24px",
            background: "#ff6600",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Place Review
        </button>
        <button
          className="all-review-btn"
          onClick={() => navigate("/allreview")}
          style={{
            padding: "10px 24px",
            background: "#ff6600",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          See All Reviews
        </button>
      </div>
    </div>
  )
}

export default RestaurantMenu






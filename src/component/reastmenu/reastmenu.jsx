import React from 'react'
import './reastmenu.css'
import { menu_list } from '../../assets/assets'

const RestaurantMenu = ({ catagry , setcatagry}) => {
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
      </div>
  )
}

export default RestaurantMenu






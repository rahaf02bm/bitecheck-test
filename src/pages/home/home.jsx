import React, { useState } from 'react';
import "./home.css";
import Header from '../../component/header/header';
import RestaurantMenu from '../../component/reastmenu/reastmenu';

const Home = () => {
  const [category, setcategory] = useState("all");

  return (
    <div>
      <Header />
      <RestaurantMenu category={category} setcategory={setcategory} />
    </div>
  );
};

export default Home;

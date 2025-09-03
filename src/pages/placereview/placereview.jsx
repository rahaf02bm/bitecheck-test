import React, { useState } from "react";
import "./placereview.css";
import { food_list } from "../../assets/assets";

const PlaceReview = () => {
  const restaurants = food_list.map((food) => food.name);
  const [reviews, setReviews] = useState(
    restaurants.map(() => ({ service: 0, food: 0, cleanliness: 0, comment: "" }))
  );

  const handleChange = (index, field, value) => {
    const newReviews = [...reviews];
    newReviews[index][field] = value;
    setReviews(newReviews);
  };

  const handleSubmit = () => {
    console.log("Submitted reviews:", reviews);
    alert("Thank you for your reviews!");
  };

  return (
    <div className="p-6 bg-beige min-h-screen">
      <h1 className="text-3xl font-bold text-brown mb-6">Evaluate Restaurants</h1>

      {restaurants.map((restaurant, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-orange-300"
        >
          <h2 className="text-xl font-semibold text-orange-600 mb-4">{restaurant}</h2>

          <label className="block mb-2">
            Service:
            <input
              type="number"
              min="1"
              max="5"
              value={reviews[index].service}
              onChange={(e) => handleChange(index, "service", e.target.value)}
              className="ml-2 p-1 border rounded"
            />
          </label>

          <label className="block mb-2">
            Food:
            <input
              type="number"
              min="1"
              max="5"
              value={reviews[index].food}
              onChange={(e) => handleChange(index, "food", e.target.value)}
              className="ml-2 p-1 border rounded"
            />
          </label>

          <label className="block mb-2">
            Cleanliness:
            <input
              type="number"
              min="1"
              max="5"
              value={reviews[index].cleanliness}
              onChange={(e) => handleChange(index, "cleanliness", e.target.value)}
              className="ml-2 p-1 border rounded"
            />
          </label>

          <label className="block mb-2">
            Comment:
            <textarea
              value={reviews[index].comment}
              onChange={(e) => handleChange(index, "comment", e.target.value)}
              className="ml-2 p-2 border rounded w-full"
              placeholder="Write your feedback..."
            />
          </label>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-orange-500 text-white px-6 py-2 rounded-xl shadow hover:bg-orange-600"
      >
        Submit Reviews
      </button>
    </div>
  );
};

export default PlaceReview;

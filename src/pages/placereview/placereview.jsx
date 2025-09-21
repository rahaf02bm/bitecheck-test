import React, { useState } from "react";
import "./placereview.css";
import { food_list } from "../../assets/assets";
import StarRating from "../../component/star/StarRating";
import { useNavigate } from "react-router-dom";

const PlaceReview = () => {
  const [reviews, setReviews] = useState(
    food_list.map(() => ({ service: 0, food: 0, cleanliness: 0, comment: "" }))
  );
  const navigate = useNavigate();

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
    <div className="review-page">
      <h1 className="review-title">Evaluate Restaurants</h1>

      {food_list.map((restaurant, index) => (
        <div key={index} className="review-card">
          <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="review-card-img"
            />
            <h2>{restaurant.name}</h2>
          </div>

          <label>
            Service:
            <StarRating
              rating={reviews[index].service}
              onChange={(value) => handleChange(index, "service", value)}
            />
          </label>

          <label>
            Food:
            <StarRating
              rating={reviews[index].food}
              onChange={(value) => handleChange(index, "food", value)}
            />
          </label>

          <label>
            Cleanliness:
            <StarRating
              rating={reviews[index].cleanliness}
              onChange={(value) => handleChange(index, "cleanliness", value)}
            />
          </label>

          <label>
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

           <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "16px" }}>
        <button onClick={handleSubmit} className="submit-btn">
          Submit Reviews
        </button>
        <button
          className="submit-btn"
          onClick={() => navigate("/allreview")}
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};
export default PlaceReview;
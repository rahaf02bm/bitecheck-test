import React, { useState } from "react";
import "./placereview.css";
import { food_list } from "../../assets/assets";
import StarRating from "../../component/star/StarRating";
import { useNavigate } from "react-router-dom";
import { createReview } from "../../lib/appwrite";

const PlaceReview = () => {
  const [reviews, setReviews] = useState(
    food_list.map(() => ({
      service: 0,
      food: 0,
      cleanliness: 0,
      comment: "",
      photo: null,
      photoPreview: null,
    }))
  );
  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const newReviews = [...reviews];
    newReviews[index][field] = value;
    setReviews(newReviews);
  };

  const handlePhotoChange = (index, file) => {
    const newReviews = [...reviews];
    newReviews[index].photo = file;
    newReviews[index].photoPreview = file ? URL.createObjectURL(file) : null;
    setReviews(newReviews);
  };

  const handleSubmit = async () => {
    try {
      for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        // Only submit if at least one field is filled
        if (
          review.service > 0 ||
          review.food > 0 ||
          review.cleanliness > 0 ||
          review.comment.trim() !== "" ||
          review.photo
        ) {
          let photoUrl = null;
          if (review.photo) {
            photoUrl = review.photo.name;
          }
          await createReview({
            restaurantId: food_list[i].id || food_list[i].name,
            service: review.service,
            food: review.food,
            cleanliness: review.cleanliness,
            comment: review.comment,
            photo: photoUrl,
          });
        }
      }
      alert("Thank you for your reviews!");
    } catch (error) {
      alert("Failed to submit reviews: " + error.message);
    }
  };

  return (
    <div className="review-page">
      <h1 className="review-title">Evaluate Restaurants</h1>

      {food_list.map((restaurant, index) => (
        <div key={index} className="review-card">
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
          >
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
              style={{
                marginTop: "6px",
                border: "1.5px solid #ffb347",
                borderRadius: "8px",
                background: "#f7ecd7",
                color: "#4b2e2e",
              }}
            />
          </label>

          <label
            style={{
              display: "block",
              marginTop: "18px",
              marginBottom: "8px",
              fontWeight: "500",
              color: "#a0522d",
            }}
          >
            Upload a photo:
            <div
              style={{
                background: "#f7ecd7",
                border: "2px dashed #ffb347",
                borderRadius: "12px",
                padding: "18px",
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                justifyContent: "flex-start",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onClick={() =>
                document.getElementById(`photo-input-${index}`).click()
              }
              onMouseOver={(e) =>
                (e.currentTarget.style.borderColor = "#ff6600")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = "#ffb347")
              }
            >
              <input
                id={`photo-input-${index}`}
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoChange(index, e.target.files[0])}
                style={{ display: "none" }}
              />
              <span style={{ color: "#d2691e", fontWeight: "bold" }}>
                {reviews[index].photo
                  ? "Photo Selected"
                  : "Click to choose a photo"}
              </span>
              {reviews[index].photoPreview && (
                <img
                  src={reviews[index].photoPreview}
                  alt="Preview"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "2px solid #ff6600",
                    background: "#fff8ee",
                  }}
                />
              )}
            </div>
          </label>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
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
      ))}
    </div>
  );
};
export default PlaceReview;

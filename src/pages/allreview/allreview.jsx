import React, { useEffect, useState } from "react";
import "../allreview/allreview.css";
import { getAllReviews, getUserById } from "../../lib/appwrite";
import { food_list } from "../../assets/assets";

const AllReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const allReviews = await getAllReviews();
      // Attach username for each review
      const reviewsWithUsernames = await Promise.all(
        allReviews.map(async (review) => {
          const user = await getUserById(review.userId);
          return {
            ...review,
            username: user?.username || "Unknown",
          };
        })
      );
      setReviews(reviewsWithUsernames);
    }
    fetchReviews();
  }, []);

  const getRestaurantImage = (restaurantId) => {
    const restaurant = food_list.find(
      (item) => item.id === restaurantId || item.name === restaurantId
    );
    return restaurant?.image || "";
  };

  return (
    <div className="all-reviews-page">
      <h1 className="all-reviews-title">All Reviews</h1>
      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.$id} className="review-card">
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img
                src={getRestaurantImage(review.restaurantId)}
                alt={review.restaurantId}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "2px solid #ff6600",
                  background: "#fff8ee",
                }}
              />
              <h2 className="restaurant-name">{review.restaurantId}</h2>
            </div>
            <p className="review-username">
              <strong>By:</strong> {review.username}
            </p>
            <p>
              <strong>Service:</strong> {"⭐".repeat(review.service)}
            </p>
            <p>
              <strong>Food:</strong> {"⭐".repeat(review.food)}
            </p>
            <p>
              <strong>Cleanliness:</strong> {"⭐".repeat(review.cleanliness)}
            </p>
            {review.comment && (
              <p className="comment">
                <em>"{review.comment}"</em>
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AllReviewsPage;

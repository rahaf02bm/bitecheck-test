import React, { useEffect, useState } from "react";
import "../allreview/allreview.css";

const AllReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  return (
    <div className="all-reviews-page">
      <h1 className="all-reviews-title">All User Reviews</h1>

      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h2 className="restaurant-name">Restaurant {index % 3 === 0 ? "A" : index % 3 === 1 ? "B" : "C"}</h2>
            
            <p><strong>Service:</strong> {"⭐".repeat(review.service)}</p>
            <p><strong>Food:</strong> {"⭐".repeat(review.food)}</p>
            <p><strong>Cleanliness:</strong> {"⭐".repeat(review.cleanliness)}</p>
            
            {review.comment && (
              <p className="comment"><em>"{review.comment}"</em></p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AllReviewsPage;



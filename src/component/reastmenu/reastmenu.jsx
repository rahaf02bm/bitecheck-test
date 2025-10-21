import { databases, config, getUserById } from "../../lib/appwrite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reastmenu.css";
import { menu_list } from "../../assets/assets";

const RestaurantMenu = () => {
  const navigate = useNavigate();
  const [reviewData, setReviewData] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // 1. Fetch all reviews
        const res = await databases.listDocuments(
          config.databaseId,
          config.reviewsCollectionId
        );
        const allReviews = res.documents;

        if (!allReviews.length) return;

        // 2. Fetch all users in parallel
        const userIds = [...new Set(allReviews.map((r) => r.userId))];
        const userPromises = userIds.map((id) => getUserById(id));
        const users = await Promise.all(userPromises);

        // 3. Map userId -> username
        const userMap = {};
        users.forEach((u) => {
          if (u) userMap[u.userId] = u.username || "Anonymous";
        });

        // 4. Process reviews per restaurant
        const data = {};

        allReviews.forEach((r) => {
          const id = r.restaurantId.toLowerCase(); // lowercase for matching
          const avg = (r.service + r.food + r.cleanliness) / 3;
          const username = userMap[r.userId] || "Anonymous";

          if (!data[id]) {
            data[id] = {
              total: avg,
              count: 1,
              reviews: [
                { comment: r.comment, user: username, createdAt: r.$createdAt },
              ],
            };
          } else {
            data[id].total += avg;
            data[id].count++;
            data[id].reviews.push({
              comment: r.comment,
              user: username,
              createdAt: r.$createdAt,
            });
          }
        });

        // 5. Calculate final average and pick newest review
        const result = {};
        Object.keys(data).forEach((id) => {
          const restaurant = data[id];
          const sortedReviews = restaurant.reviews.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          result[id] = {
            avg: (restaurant.total / restaurant.count).toFixed(1),
            comment: sortedReviews[0]?.comment || "",
            user: sortedReviews[0]?.user || "Anonymous",
          };
        });

        setReviewData(result);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="explor-resturant" id="explor-resturant">
      <h1>Explore Restaurants and More</h1>
      <p className="explor-menutext">
        Discover a variety of cuisines and dining options near you.
      </p>
      <div
        className="explor-menu-list"
        onClick={() => {
          setMenu("services");
          navigate("/allreview");
        }}
      >
        {menu_list.map((item, index) => {
          const info = reviewData[item.menu_name.toLowerCase()]; // lowercase for matching
          return (
            <div className="explor-menu-item" key={index}>
              <img src={item.menu_image} alt={item.menu_name} />
              <p className="rest-name">{item.menu_name}</p>
              <p className="rest-rating">
                ⭐ {info ? info.avg : "No reviews yet"}
              </p>
              <div className="rest-comment-box">
                <p className="rest-comment">
                  {info && info.comment
                    ? `"${info.comment}"`
                    : "No comments yet"}
                </p>
                {info && info.user && (
                  <p className="rest-user"> - {info.user} - </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

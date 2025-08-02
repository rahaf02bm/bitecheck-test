import { useState } from "react";

export default function RestaurantReviewForm() {
  const [serviceRating, setServiceRating] = useState(0);
  const [tasteRating, setTasteRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    const reviewData = {
      serviceRating,
      tasteRating,
      cleanlinessRating,
      comment,
      images, 
    };
    
    console.log("send review", reviewData);
    alert("Review submitted successfully!");

    // Reset values
    setServiceRating(0);
    setTasteRating(0);
    setCleanlinessRating(0);
    setComment("");
    setImages([]);
    setImagePreviews([]);
  };

  const renderStars = (rating, setRating) =>
    [1, 2, 3, 4, 5].map((value) => (
      <span
        key={value}
        onClick={() => setRating(value)}
        style={{
          fontSize: "24px",
          color: value <= rating ? "#FFA500" : "#ccc",
          cursor: "pointer",
          margin: "2px",
        }}
      >
        ★
      </span>
    ));

  return (
    <div className="max-w-md mx-auto bg-beige p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-xl font-bold text-brown text-center mb-4">
        restaurant review
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-brown font-semibold mb-1">Service:</label>
          <div>{renderStars(serviceRating, setServiceRating)}</div>
        </div>

        <div>
          <label className="block text-brown font-semibold mb-1">Taste:</label>
          <div>{renderStars(tasteRating, setTasteRating)}</div>
        </div>

        <div>
          <label className="block text-brown font-semibold mb-1">Cleanliness:</label>
          <div>{renderStars(cleanlinessRating, setCleanlinessRating)}</div>
        </div>

        <div>
          <label className="block text-brown font-semibold mb-1">Comment:</label>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="اكتب رأيك هنا..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-brown font-semibold mb-1">Attach Images:</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="block mt-2"
          />

          {/* Show image previews */}
          <div className="flex flex-wrap mt-2 gap-2">
            {imagePreviews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-20 h-20 object-cover rounded"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-orange text-white px-4 py-2 rounded-xl w-full hover:opacity-90"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}


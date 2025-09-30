import { databases, ID, storage } from "../lib/appwrite";

const DB_ID = "68dc1afc000b3fef8b74";
const COLLECTION_ID = "reviews";
const BUCKET_ID = "your_bucket_id"; // Replace with your actual bucket ID

export async function addReview(restaurantId, userId, rating, comment, photoFile) {
  let photoId = null;

  // Upload photo if provided
  if (photoFile) {
    const photoUpload = await storage.createFile(BUCKET_ID, ID.unique(), photoFile);
    photoId = photoUpload.$id;
  }

  return await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
    restaurantId,
    userId,
    rating,
    comment,
    photoId, // Save the photo file ID
    timestamp: new Date().toISOString(),
  });
}

export async function getReviews() {
  const response = await databases.listDocuments(DB_ID, COLLECTION_ID);
  return response.documents;
}

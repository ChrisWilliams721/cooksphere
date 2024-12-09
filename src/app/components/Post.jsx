import React, { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getAllPosts } from "../_services/posts-service";
import Image from "next/image";
function Post() {
  const [posts, setPosts] = useState([]);  // Initialize with an empty array
  const { user } = useUserAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();  // Fetch all posts
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (user) {
      fetchPosts();  // Only fetch posts if user is authenticated
    }
  }, [user]);  // Rerun effect if user changes

  const formatDate = (timestamp) => {
    if (timestamp) {
      const date = timestamp.toDate(); // Convert Firestore Timestamp to Date
      return date.toLocaleDateString(); // Format date as you wish
    }
    return "Unknown date";
  };
  console.log("Posts:", posts);
  return (
    <div className="flex flex-col gap-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{formatDate(post.createdAt)}</span>
            </div>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p> // Display a message if there are no posts
      )}
    </div>
  );
}

export default Post;

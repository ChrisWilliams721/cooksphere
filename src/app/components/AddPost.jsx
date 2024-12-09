"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useUserAuth } from "../_utils/auth-context";
import { addFeedPost } from "../_services/posts-service"; // Ensure this path is correct

function AddPost() {
  const { user } = useUserAuth();
  const [description, setDescription] = useState("");

  if (!user) {
    return null; // Prevent rendering if the user is not authenticated
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addFeedPost(user.uid, description); // Save the post to Firestore
      setDescription(""); // Clear the input field after posting
      console.log("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={user.photoURL}
        alt=""
        width={40}
        height={40}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <form onSubmit={handleSubmit} className="flex-1">
        <div>
          {/* TEXT INPUT */}
          <div className="flex gap-4">
            <input
              placeholder="Have an recipe to share?"
              className="bg-slate-100 rounded-lg flex-1 p-2"
              onChange={handleDescriptionChange}
              value={description}
              required
            />
          </div>
          {/* POST OPTIONS */}
          <div className="flex items-center gap-4 mt-4 text-gray-800 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/camera.png" alt="" width={20} height={20} />
              Upload Photo
            </div>
          </div>
          {/* POST BUTTON */}
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white text-xs p-2 rounded-md"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPost;

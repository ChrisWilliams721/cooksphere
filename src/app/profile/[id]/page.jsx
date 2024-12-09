"use client";
import React, { useEffect, useState } from "react";
import LeftMenu from "../../components/LeftMenu";
import RightMenu from "../../components/RightMenu";
import Image from "next/image";
import { getFeedPosts, deletePost } from "../../_services/posts-service";
import { useUserAuth } from "../../_utils/auth-context";

const ProfilePage = () => {
  const { user } = useUserAuth();
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      if (user) {
        try {
          const userPosts = await getFeedPosts(user.uid); // Fetch posts for the logged-in user
          setPosts(userPosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPosts();
  }, [user]);

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (posts.length === 0) {
    return <p>No posts yet. Create your first post!</p>;
  }
  console.log(user);

  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>

      <div className="lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="/user-bg.jpg"
                alt="Background"
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={user.photoURL}
                alt="Profile"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">{user.email}</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">{posts.length}</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{followers.length}</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.3k</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          {/* POSTS */}
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 bg-white shadow-md rounded-lg my-4"
              >
                <p className="text-gray-800">{post.content}</p>
                <div>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userID="test" />
      </div>
    </div>
  );
};

export default ProfilePage;

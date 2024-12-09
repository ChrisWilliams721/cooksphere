"use client";
import Link from "next/link";
import React from "react";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import AddPost from "./components/AddPost";
import PostFeed from "./components/Post";
import Post from "./components/Post";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import Homepage from "./components/homepage";

export default function Root() {
  const { gitHubSignIn, user } = useUserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
      router.push("/"); // Redirect to the homepage after signing in
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div className="flex gap-6 pt-6">
      <div className="p-6 bg-white rounded shadow-lg">
        {!user ? (
          <>
            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-2xl font-bold">Sign In</h1>
              <button
                onClick={handleSignIn}
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Sign in with GitHub
              </button>
            </div>
          </>
        ) : (
          <Homepage />
        )}
      </div>
    </div>
  );
}

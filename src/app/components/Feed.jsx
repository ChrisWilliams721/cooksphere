"use client";
import React from "react";
import Image from "next/image";
import Post from "./Post";

function Feed() {
  return (
    <div className="flex flex-col gap-4">
      {/*POST*/}
      <Post/>
      {/*INTERACTION*/}
    </div>
  );
}

export default Feed;

"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Comments from "./Comments";

function Post() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  });
  return (
    <div>
      {post.map((item, index) => (
        <div
          key={item.id}
          className="p-4 bg-white shadow-md rounded-lg flex-col gap-12 my-4"
        >
          <div key={index} className="">
            <div className="flex items-center gap-4 pb-4">
              <img
                src={item.avatar}
                alt={`Avatar for ${item.username}`}
                className="w-12 h-12 object-cover rounded-full"
              />
              <h3>{item.username}</h3>
              <img
                src="/more.png"
                alt="more"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </div>
            <img src={item.image} alt={`Image for ${item.username}`} />
            <p className="pt-4">{item.recipe}</p>
          </div>
          <div className="flex gap-8 pt-4">
            <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
              <Image
                src="/like.png"
                alt="like"
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">{item.likes}</span>
            </div>
            <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
              <Image
                src="/comment.png"
                alt="comment"
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">{item.comments}</span>
            </div>
            <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
              <Image
                src="/shares.png"
                alt="shares"
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">{item.shares}</span>
            </div>
          </div>
          <Comments />
        </div>
      ))}
    </div>
  );
}

export default Post;

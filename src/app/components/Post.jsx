"use client";
import React from "react";
import { useState, useEffect } from "react";

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
        <div key={item.id}className="p-4 bg-white shadow-md rounded-lg flex-col gap-12 my-4">
          <div key={index} className="">
            <div className="flex items-center gap-4 pb-4">
              <img
                src={item.avatar}
                alt={`Avatar for ${item.username}`}
                className="w-12 h-12 object-cover rounded-full"
              />
              <h3>{item.username}</h3>
            </div>
            <img src={item.image} alt={`Image for ${item.username}`} />
            <p className="pt-4">{item.recipe}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;

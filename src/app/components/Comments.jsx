import React, { useState, useEffect } from "react";
import Image from "next/image";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch the JSON file
    fetch("/comments.json")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error loading comments:", error));
  }, []);

  return (
    <div className="pt-4">
      {/* WRITE A COMMENT */}
      <div className="flex items-center gap-4">
        <Image
          src="/chef2.png"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="flex-1 items-center justify-between bg-slate-100 rounded-lg flex text-sm px-4 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-slate-100 rounded-lg flex-1 p-2"
          />
          <Image
            src="/emoji.png"
            alt="Add emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end mb-2"
          />
        </div>
      </div>

      {/* COMMENTS */}
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-center gap-4 mt-6">
          {/* AVATAR */}
          <Image
            src={comment.avatar}
            alt={comment.username}
            width={40}
            height={40}
            className="w-8 h-8 object-cover rounded-full"
          />
          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">{comment.username}</span>
            <p className="text-sm">{comment.text}</p>
            <div className="flex items-center gap-8 text-sm text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt="like"
                  width={12}
                  height={12}
                  className="w-4 h-4 cursor-pointer"
                />
                <span>{comment.likes}</span>
              </div>
              <div>Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            alt="Options"
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

export default Comments;

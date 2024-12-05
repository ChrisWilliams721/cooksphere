import React from "react";
import Image from "next/image";
function Comments() {
  return (
    <div className="pt-4">
      {/*WRITE A COMMENT*/}
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
      {/*COMMENTS*/}
      <div className="flex items-center gap-4">
        {/*COMMENT*/}
        <div className="flex gap-4 justify-between mt-6">
          {/*AVATAR*/}
          <Image
            src="/chef2.png"
            alt=""
            width={40}
            height={40}
            className="w-8 h-8 object-cover rounded-full"
          />
        </div>
        {/*DESCRIPTION*/}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">chris</span>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            quas.
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt="like"
                width={12}
                height={12}
                className="w-4 h-4 cursor-pointer"
              />
            </div>
            <div>Reply</div>
          </div>
        </div>
        <div>
          {/*ICON*/}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Comments;

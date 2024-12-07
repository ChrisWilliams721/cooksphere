import React from "react";
import Image from "next/image";

function AddPost() {
  return (
    <div className="p-4 bg-white shawdow-md rounded-lg flex gap-4 justify-between text-sm">
      {/*AVATAR*/}
      <Image
        src="/user-image.jpg"
        alt=""
        width={40}
        height={40}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/*POST*/}
      <div className="flex-1">
        {/*TEXTINPUT*/}
        <div className="flex gap-4">
          <textarea
            placeholder="What's on your mind"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="Add emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/*POSTOPTIONS*/}
        <div className="flex items-center gap-4 mt-4 text-gray-800 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/camera.png"
              alt=""
              width={20}
              height={20}
            />
            Upload Photo
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;

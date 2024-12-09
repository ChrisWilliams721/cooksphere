import React from "react";
import Image from "next/image";
import Link from "next/link";

function UserInfoCard({ userId }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/*TOP*/}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-600">User Information</span>
        <Link href="/" className="text-blue-600 text-sm">
          See All
        </Link>
      </div>
      {/*BOTTOM*/}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Chris Williams</span>
          <span className="text-sm">@wchris</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex items-center gap-2">
          <Image
            src="/map.png"
            alt=""
            width={16}
            height={16}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-black font-semibold">
            Living in <b>Calagry</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/graduation-cap.png"
            alt=""
            width={16}
            height={16}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-black font-semibold">
            Went to <b>St Marys</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/work.png"
            alt=""
            width={16}
            height={16}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-black font-semibold">
            Works at <b>Sait</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="date.png" alt="" width={16} height={16} />
            <span className="text-black font-semibold">Joined December 2022</span>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm p-2">Follow</button>
        <span className="text-red-600 cursor-pointer self-end text-sm">Block User</span>
      </div>
    </div>
  );
}

export default UserInfoCard;

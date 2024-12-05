import Link from "next/link";
import React from "react";
import Image from "next/image";

function FriendRequest() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/*TOP*/}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-600">Friend Request</span>
        <Link href="/" className="text-blue-600 text-sm">See All</Link>
      </div>
      {/*USER*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/chef2.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-semibold">John Doe</span>
        </div>
        <div className="flex gap-3 justify-end">
            <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
            <Image src="/close.png" alt="" width={19} height={19} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;

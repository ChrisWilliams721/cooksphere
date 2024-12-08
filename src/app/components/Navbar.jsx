"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useUserAuth } from "../_utils/auth-context";

function Navbar() {
  const { user, firebaseSignOut } = useUserAuth();

  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="text-2xl font-bold">
          Cooksphere
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="logo"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="logo"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center justify-center gap-2 text-sm">
        {user ? (
          <>
            <Image
              src={user.photoURL || "/default-avatar.png"}
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <Link onClick={firebaseSignOut} className="text-red-600" href={"signin"}>
              logout
            </Link>
          </>
        ) : (
          <Link href="/signin" className="text-blue-500">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;

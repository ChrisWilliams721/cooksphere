import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileMenu from "./MobileMenu";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function Navbar() {
  return (
    <div className=" h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="text-2xl font-bold">
          Cooksphere
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* LINKS */}
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
      <div className="w-[30%] flex items-center justify-center gap-2 text-sm  ">
        <ClerkLoading>
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded class>
          <SignedIn>
            <div className="cursor-pointer"></div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center justify-center gap-2 text-sm ">
              <Image
                src="/login.png"
                alt="logo"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <Link href="/sign-in">Login/Signup</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
